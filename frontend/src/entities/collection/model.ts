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

export function renameCollection(col: Collection) {
  const colIndex = mockCollections.findIndex((item) => item.id === col.id);

  if (mockCollections[colIndex]) {
    mockCollections[colIndex].name = col.name;
  }
}
