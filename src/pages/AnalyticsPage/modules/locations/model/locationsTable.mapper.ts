import type {LocationTableConfig, LocationTableRow} from "./locationsTable.types";
import type {Column} from "@/shared/ui/DataTable";
import type {EpisodesDTO} from "@/shared/dto/episodeDto";

class LocationsTableMapper {
    static dtoToTableConfig(dto: EpisodesDTO): LocationTableConfig {
        const columns: Column<LocationTableRow>[] = [
            { key: "name", header: "Название" },
            { key: "type", header: "Тип" },
            { key: "dimension", header: "Измерение" },
            { key: "id", header: "ID" },
        ];

        const data = dto.results.map(
            (item): LocationTableRow => ({
                id: item.id,
                name: item.name,
                type: item.type,
                dimension: item.dimension,
            }),
        );
        
        return {
            columns,
            data,
        }
    }
}

export {
    LocationsTableMapper
}