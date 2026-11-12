import {action, withAsyncData} from "@reatom/core";
import {EpisodesTableService} from "./episodesTable.service";

class EpisodesTableStore {
    constructor(
        private readonly episodesTableService: EpisodesTableService,
    ) {
        this.fetchEpisodes()
    }

    fetchEpisodes = action(() => {
        return this.episodesTableService.getEpisodes()
    }).extend(withAsyncData({
        initState: {
            data: [],
            columns: []
        }
    }));
}

export {
    EpisodesTableStore
}