import * as R from 'ramda';

import fetchWithCors from '~/fetch-with-cors.js';

export default {
    findAllByStreets() {
        const convertSingleStop = function convertSingleStop([id, name]) {
            return { id, name };
        };

        const convertSingleStreet = function convertSingleStreet([_, name, stops]) {
            return {
                name,
                stops: R.map(convertSingleStop, stops),
            };
        };

        const convertStops = R.map(convertSingleStreet);

        return fetchWithCors('http://einfo.erzeszow.pl/Home/GetBusStopList?q=&ttId=0')
            .then(response => response.json())
            .then(convertStops);
    },

    getNameById(id) {
        return this
            .findAll()
            .then(allStops => allStops.find(stop => stop.id === id).name);
    },

    findAll() {
        return this.findAllByStreets()
            .then(R.pipe(
                R.map(R.prop('stops')),
                R.flatten,
            ));
    },

    findAllMatching(query) {
        if (query.trim() === '') {
            return this.findAll();
        }

        query = query.toLowerCase();

        return this.findAll()
            .then((stops) => {
                return stops.filter(stop =>
                    stop.name.toLowerCase().includes(query));
            });
    },
};
