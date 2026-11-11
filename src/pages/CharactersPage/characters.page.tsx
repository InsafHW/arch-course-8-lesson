import { CharactersStore } from "@/entites/character/characters.store";
import { CharactersCatalogEntry } from "@/features/charactersCatalog/charactersCatalog.entry";
import { CharactersCatalogInjector } from "@/features/charactersCatalog/charactersCatalog.injector";
import {useContainerInjection} from "@/app/container/ContainerProvider";

export const CharactersPage = () => {
  const charactersStore = useContainerInjection(CharactersStore);

  return (
    <CharactersCatalogInjector
      value={{
        charactersStore,
      }}
    >
      <CharactersCatalogEntry />
    </CharactersCatalogInjector>
  );
};
