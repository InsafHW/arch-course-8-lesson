import {LocationsTableMapper} from "./model/locationsTable.mapper";
import type {LocationsRepository} from "@/entites/location/repository/types";

class LocationsTableService {
    constructor(
        private locationsRepo: LocationsRepository,
    ) {}

    async getLocations() {
        const {data: rawLocations} = await this.locationsRepo.getLocations();
        return LocationsTableMapper.dtoToTableConfig(rawLocations);
    }
}

export {
    LocationsTableService
}