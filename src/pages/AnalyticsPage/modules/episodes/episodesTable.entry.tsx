import {DataTable, toTableData} from "@/shared/ui/DataTable";
import { reatomComponent } from "@reatom/react";
import { Spinner } from "@/shared/ui/spinner";
import {useEpisodesTableDi} from "./episodesTable.injector";

export const EpisodesTableEntry = reatomComponent(() => {
    const {
        episodesTableStore: {fetchEpisodes},
    } = useEpisodesTableDi();

    const { data, columns } = toTableData(fetchEpisodes.data());

    if (fetchEpisodes.pending()) {
        return <Spinner className="m-auto" />
    }

    return <DataTable data={data} columns={columns} limit={10} />
});
