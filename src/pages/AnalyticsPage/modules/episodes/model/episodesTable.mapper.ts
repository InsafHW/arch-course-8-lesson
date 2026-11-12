import type {EpisodeTableRow, EpisodesTableConfig} from "./episodesTable.types";
import type {Column} from "@/shared/ui/DataTable";
import type {EpisodesDTO} from "@/shared/dto/episodeDto";

class EpisodesTableMapper {
    static dtoToTableConfig(dto: EpisodesDTO): EpisodesTableConfig {
        const columns: Column<EpisodeTableRow>[] = [
            { key: "name", header: "Название" },
            { key: "episode", header: "Эпизод" },
            { key: "airDate", header: "Дата выхода" },
            { key: "id", header: "ID" },
        ];

        const data = dto.results.map(
            (item): EpisodeTableRow => ({
                id: item.id,
                name: item.name,
                airDate: item.air_date,
                episode: item.episode,
                characters: item.characters,
            }),
        );
        
        return {
            columns,
            data,
        }
    }
}

export {
    EpisodesTableMapper
}