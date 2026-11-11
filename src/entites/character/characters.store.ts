import { type Character } from "./model/types";
import { atom, computed, sleep, withAsyncData, wrap } from "@reatom/core";
import { CharactersService } from "./services/charactersService/characters.service";
import {inject, injectable} from "inversify";

@injectable()
export class CharactersStore {
  constructor(
      @inject(CharactersService)
      private readonly charactersService: CharactersService
  ) {}

  search = atom("");

  characters = computed(async () => {
    const query = this.search();

    if (query) {
      await wrap(sleep(200));
    }

    return await wrap(this.charactersService.getCharacters(query));
  }).extend(withAsyncData({ initState: [] }));

  favoriteCharacters = computed(() =>
    this.charactersService.getFavoriteCharacters(this.characters.data()),
  );

  clearFavorites = async () => {
    await this.charactersService.clearFavorites(this.characters.data());
  };

  toggleFavorites = async (id: Character["id"]) => {
    await this.charactersService.toggleFavorite(this.characters.data(), id);
  };
}
