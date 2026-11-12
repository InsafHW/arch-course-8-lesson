import {useMemo} from "react";
import type {Tab} from "./analyticsPage.store";
import {CharactersTableEntry} from "./modules/characters/charactersTable.entry";
import {CharactersTableInjector} from "./modules/characters/charactersTable.injector";
import {CharactersTableStore} from "./modules/characters/charactersTable.store";
import {CharactersTableService} from "./modules/characters/charactersTable.service";
import {CharacterApi} from "@/entites/character/repository/character.api";
import {EpisodesTableInjector} from "./modules/episodes/episodesTable.injector";
import {EpisodesTableStore} from "./modules/episodes/episodesTable.store";
import {EpisodesTableService} from "./modules/episodes/episodesTable.service";
import {EpisodeApi} from "@/entites/episode/repository/episodes.api";
import {LocationApi} from "@/entites/location/repository/localtion.api";
import {EpisodesTableEntry} from "./modules/episodes/episodesTable.entry";
import {LocationsTableInjector} from "./modules/locations/locationsTable.injector";
import {LocationsTableEntry} from "./modules/locations/locationsTable.entry";
import {LocationsTableStore} from "./modules/locations/locationsTable.store";
import {LocationsTableService} from "./modules/locations/locationsTable.service";

export const AnalyticsContent = ({tab}: {tab: Tab}) => {
    const content = useMemo(() => {
        switch (tab) {
            case "characters":
                return (
                    <CharactersTableInjector value={{
                        charactersTableStore: new CharactersTableStore(
                            new CharactersTableService(new CharacterApi())
                        )
                    }}>
                        <CharactersTableEntry />
                    </CharactersTableInjector>
                )
            case "episodes":
                return (
                    <EpisodesTableInjector value={{
                        episodesTableStore: new EpisodesTableStore(
                            new EpisodesTableService(new EpisodeApi())
                        )
                    }}>
                        <EpisodesTableEntry />
                    </EpisodesTableInjector>
                )
            case "locations":
                return (
                    <LocationsTableInjector value={{
                        locationsTableStore: new LocationsTableStore(
                            new LocationsTableService(new LocationApi())
                        )
                    }}>
                        <LocationsTableEntry />
                    </LocationsTableInjector>
                )
            default:
                return null
        }
    }, [tab])

   return content
};