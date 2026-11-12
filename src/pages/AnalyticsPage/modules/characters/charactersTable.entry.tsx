import {DataTable, toTableData} from "@/shared/ui/DataTable";
import { reatomComponent } from "@reatom/react";
import { Spinner } from "@/shared/ui/spinner";
import {useCharactersTableDi} from "./charactersTable.injector";

export const CharactersTableEntry = reatomComponent(() => {
    const {
        charactersTableStore: {fetchCharacters},
    } = useCharactersTableDi();

    const { data, columns } = toTableData(fetchCharacters.data());

    if (fetchCharacters.pending()) {
        return <Spinner className="m-auto" />
    }

    return <DataTable data={data} columns={columns} limit={10} />
});
