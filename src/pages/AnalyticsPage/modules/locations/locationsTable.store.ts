import {action, withAsyncData} from "@reatom/core";
import {LocationsTableService} from "./locationsTable.service";

class LocationsTableStore {
    constructor(
        private readonly locationsTableService: LocationsTableService,
    ) {
        this.fetchLocations()
    }

    fetchLocations = action(() => {
        return this.locationsTableService.getLocations()
    }).extend(withAsyncData({
        initState: {
            data: [],
            columns: []
        }
    }));
}

export {
    LocationsTableStore
}