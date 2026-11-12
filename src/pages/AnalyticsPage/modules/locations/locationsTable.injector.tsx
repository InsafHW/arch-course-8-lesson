import {LocationsTableStore} from "./locationsTable.store";
import {createDi} from "@/shared/lib/react";

type LocationsTableDeps = {
    locationsTableStore: LocationsTableStore
}

const {
    Injector: LocationsTableInjector,
    useDi: useLocationsTableDi
} = createDi<LocationsTableDeps>()

export {
    LocationsTableInjector,
    useLocationsTableDi
}