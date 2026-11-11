import {type ServiceIdentifier} from "inversify";

export type KeyValueStorage = {
  get<T>(key: string): Promise<T | null>;
  set<T>(key: string, value: T): Promise<void>;
  delete(key: string): Promise<void>;
  clear(): Promise<void>;
};

export const KEY_VALUE_STORAGE_TOKEN: ServiceIdentifier<KeyValueStorage>
    = Symbol.for("KEY_VALUE_STORAGE");

export type StorageOptions = {
  prefix?: string;
};

export type Cache<T> = {
  get(key: string): T | null;
  set(key: string, value: T): void;
  clear(): void;
  has(key: string): boolean;
};
