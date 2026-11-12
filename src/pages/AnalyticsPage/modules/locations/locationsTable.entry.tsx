import {DataTable, toTableData} from "@/shared/ui/DataTable";
import { reatomComponent } from "@reatom/react";
import { Spinner } from "@/shared/ui/spinner";
import {useLocationsTableDi} from "./locationsTable.injector";

export const LocationsTableEntry = reatomComponent(() => {
    const {
        locationsTableStore: {fetchLocations},
    } = useLocationsTableDi();

    const { data, columns } = toTableData(fetchLocations.data());

    if (fetchLocations.pending()) {
        return <Spinner className="m-auto" />
    }

    return <DataTable data={data} columns={columns} limit={10} />
});
