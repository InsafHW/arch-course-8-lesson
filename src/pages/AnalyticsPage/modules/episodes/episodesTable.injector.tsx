import {EpisodesTableStore} from "./episodesTable.store";
import {createDi} from "@/shared/lib/react";

type EpisodesTableDeps = {
    episodesTableStore: EpisodesTableStore
}

const {
    Injector: EpisodesTableInjector,
    useDi: useEpisodesTableDi
} = createDi<EpisodesTableDeps>()

export {
    EpisodesTableInjector,
    useEpisodesTableDi
}