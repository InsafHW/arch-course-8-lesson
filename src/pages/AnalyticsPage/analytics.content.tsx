import {useMemo} from "react";
import type {Tab} from "./analyticsPage.store";
import {CharactersTableEntry} from "./modules/characters/charactersTable.entry";
import {CharactersTableInjector} from "./modules/characters/charactersTable.injector";
import {CharactersTableStore} from "./modules/characters/charactersTable.store";
import {CharactersTableService} from "./modules/characters/charactersTable.service";
import {CharacterApi} from "../../entites/character/repository/character.api";

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
                return 'Episodes'
            case "locations":
                return 'Locations'
            default:
                return null
        }
    }, [tab])

   return content
};