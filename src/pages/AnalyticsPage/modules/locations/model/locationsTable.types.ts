import type {TableConfig} from "@/shared/ui/DataTable";

type LocationTableRow = {
    id: number;
    name: string;
    type: string;
    dimension: string;
};

type LocationTableConfig = TableConfig<LocationTableRow>

export type {
    LocationTableRow,
    LocationTableConfig,
}