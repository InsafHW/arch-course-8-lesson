import {action, withAsyncData} from "@reatom/core";
import {CharactersTableService} from "./charactersTable.service";

class CharactersTableStore {
    constructor(
        private readonly charactersTableService: CharactersTableService,
    ) {
        this.fetchCharacters()
    }

    fetchCharacters = action(() => {
        return this.charactersTableService.getCharacters()
    }).extend(withAsyncData({
        initState: {
            data: [],
            columns: []
        }
    }));
}

export {
    CharactersTableStore
}