export const items = [
  { id: "0", name: "Marcos", telephone: "1234567890", favorite: false },
  { id: "1", name: "Mate0", telephone: "1234567890", favorite: true },
];

export function getContact(id) {
  return items.find((item) => item.id === id);
}
