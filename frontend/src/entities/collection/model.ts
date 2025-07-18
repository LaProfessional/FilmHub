// это просто заглушка

export type Collection = {
  id: number;
  name: string;
};

export const mockCollections: Collection[] = [];

export function addCollection(name: string) {
  const id = mockCollections.length + 1;

  mockCollections.push({ id, name });
}
