import {CharactersTableStore} from "./charactersTable.store";
import {createDi} from "@/shared/lib/react";

type CharactersTableDeps = {
    charactersTableStore: CharactersTableStore
}

const {
    Injector: CharactersTableInjector,
    useDi: useCharactersTableDi
} = createDi<CharactersTableDeps>()

export {
    CharactersTableInjector,
    useCharactersTableDi
}