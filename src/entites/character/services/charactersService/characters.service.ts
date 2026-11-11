import { type Character } from "../../model/types";
import {
    CHARACTERS_REPOSITORY_TOKEN,
    type CharactersRepository,
    type FavoriteCharactersRepository,
    FAVORITES_REPOSITORY_TOKEN,
} from "../../repository/types";
import { CharactersModel } from "../../model/characters.model";
import { CharactersBuilder } from "../../model/characters.builder";
import {inject, injectable} from "inversify";

@injectable()
export class CharactersService {
  constructor(
    @inject(CHARACTERS_REPOSITORY_TOKEN)
    private readonly charactersRepo: CharactersRepository,
    @inject(FAVORITES_REPOSITORY_TOKEN)
    private readonly favoritesRepo: FavoriteCharactersRepository,
  ) {}

  async getCharacters(name: string = "") {
    const [{ data }, ids] = await Promise.all([
      this.charactersRepo.getCharacters({
        options: { params: { name } },
      }),
      this.favoritesRepo.getFavoriteCharacterIds(),
    ]);

    return new CharactersBuilder()
      .fromDto(data)
      .withApplyFavoriteIds(ids)
      .build();
  }

  public getFavoriteCharacters(characters: Character[]) {
    return CharactersModel.getFavoriteCharacters(characters);
  }

  public async toggleFavorite(characters: Character[], id: number) {
    await this.favoritesRepo.toggleFavorite(id);

    return CharactersModel.toggleCharacterById(characters, id);
  }

  public async clearFavorites(characters: Character[]) {
    await this.favoritesRepo.clearFavorites();

    return CharactersModel.clearCharacters(characters);
  }
}
