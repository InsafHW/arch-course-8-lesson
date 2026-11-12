import type {TableConfig} from "@/shared/ui/DataTable";

type CharacterTableRow = {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
};

type CharactersTableConfig = TableConfig<CharacterTableRow>

export type {
    CharacterTableRow,
    CharactersTableConfig,
}