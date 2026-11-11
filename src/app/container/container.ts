import { CharacterApi } from "@/entites/character/repository/character.api";
import { FavoritesCharactersStorage } from "@/entites/character/repository/favoriteCharacters.storage";
import { Container } from "inversify";
import { LocalStoragePersister } from "@/shared/storages/LocalStoragePersister";
import { CHARACTERS_REPOSITORY_TOKEN, FAVORITES_REPOSITORY_TOKEN } from "@/entites/character/repository/types";
import { KEY_VALUE_STORAGE_TOKEN } from "@/shared/storages/types";
import {CharactersStore} from "@/entites/character/characters.store";
import {CharactersService} from "@/entites/character/services/charactersService/characters.service";

export const container = new Container();

container.bind(CHARACTERS_REPOSITORY_TOKEN).to(CharacterApi)
container.bind(FAVORITES_REPOSITORY_TOKEN).to(FavoritesCharactersStorage)
container.bind(KEY_VALUE_STORAGE_TOKEN).to(LocalStoragePersister)

container.bind(CharactersStore).toSelf().inSingletonScope()
container.bind(CharactersService).toSelf().inSingletonScope()
