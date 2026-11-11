import { CharacterList } from "@/entites/character/ui/characterList.component";
import { CharacterCard } from "@/entites/character/ui/characterCard.component";
import { Button } from "@/shared/ui/button";
import { reatomComponent } from "@reatom/react";
import { CharactersStore } from "@/entites/character/characters.store";
import {useContainerInjection} from "@/app/container/ContainerProvider";

export const FavoritesPage = reatomComponent(() => {
  const charactersStore = useContainerInjection(CharactersStore);

  const favoriteCharacters = charactersStore.favoriteCharacters();

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold">Favorites</h2>
      {favoriteCharacters && favoriteCharacters.length > 0 && (
        <>
          <Button
            onClick={charactersStore.clearFavorites}
            title="Clear all favorites"
          >
            Clear all
          </Button>
          <CharacterList
            characters={favoriteCharacters}
            renderCharacter={(character) => (
              <CharacterCard
                character={character}
                onToggleFavorite={charactersStore.toggleFavorites}
              />
            )}
          />
        </>
      )}
    </div>
  );
});
