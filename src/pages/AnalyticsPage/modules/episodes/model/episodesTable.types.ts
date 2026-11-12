import type {TableConfig} from "@/shared/ui/DataTable";

type EpisodeTableRow = {
    id: number;
    name: string;
    airDate: string;
    episode: string;
    characters: string[];
};

type EpisodesTableConfig = TableConfig<EpisodeTableRow>

export type {
    EpisodeTableRow,
    EpisodesTableConfig,
}