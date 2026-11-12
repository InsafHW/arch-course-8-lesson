import type {CharactersDTO} from "@/shared/dto/characterDto";
import type {CharactersTableConfig, CharacterTableRow} from "./charactersTable.types";
import type {Column} from "@/shared/ui/DataTable";

class CharactersTableMapper {
    static dtoToTableConfig(dto: CharactersDTO): CharactersTableConfig {
        const columns: Column<CharacterTableRow>[] = [
            {key: "name", header: "Имя"},
            {key: "status", header: "Статус"},
            {key: "species", header: "Раса"},
            {key: "type", header: "Тип"},
            {key: "gender", header: "Пол"},
            { key: "id", header: "ID" },
        ];

        const data = dto.results.map(
            (item): CharacterTableRow => ({
                id: item.id,
                name: item.name,
                status: item.status,
                species: item.species,
                type: item.type,
                gender: item.gender,
            }),
        );
        
        return {
            columns,
            data,
        }
    }
}

export {
    CharactersTableMapper
}