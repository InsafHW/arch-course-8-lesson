import {type CharactersRepository} from "@/entites/character/repository/types";
import {CharactersTableMapper} from "./model/charactersTable.mapper";

class CharactersTableService {
    constructor(
        private charactersRepo: CharactersRepository,
    ) {}

    async getCharacters() {
        const {data: rawCharacters} = await this.charactersRepo.getCharacters();
        return CharactersTableMapper.dtoToTableConfig(rawCharacters);
    }
}

export {
    CharactersTableService
}