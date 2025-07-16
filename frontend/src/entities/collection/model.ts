// это просто заглушка
export const mockCollections: string[] = [];

export function addCollection(name: string) {
  mockCollections.push(name);
  console.log("new folder", name);
}
