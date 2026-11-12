import {EpisodesTableMapper} from "./model/episodesTable.mapper";
import type {EpisodesRepository} from "@/entites/episode/repository/types";

class EpisodesTableService {
    constructor(
        private episodesRepo: EpisodesRepository,
    ) {}

    async getEpisodes() {
        const {data: rawEpisodes} = await this.episodesRepo.getEpisodes();
        return EpisodesTableMapper.dtoToTableConfig(rawEpisodes);
    }
}

export {
    EpisodesTableService
}