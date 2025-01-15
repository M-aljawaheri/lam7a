import { Journal } from "./definitions";

/**
 * Extracts the numerical ID from the Journal item's name.
 * @param item - The Journal item.
 * @returns The extracted ID as a number, or null if extraction fails.
 */
export const extractId = (item: Journal): number => {
  const extractIdFromName = (name: string): number => {
    const regex = /issue(\d+)/i; // Added 'i' flag for case-insensitivity
    const match = name.match(regex);
    return match ? parseInt(match[1], 10) : -1;
  };

  const id = extractIdFromName(item.name);
  return id;
};

/**
 * Finds the maximum ID among a list of Journal items.
 * @param items - An array of Journal items.
 * @returns The highest ID found, or 0 if no valid IDs are present.
 */
export const findMaxId = (items: Journal[]): number => {
  return items.reduce((max, item) => {
    const id = extractId(item);
    if (id !== null && id > max) {
      return id;
    }
    return max;
  }, 0); // Initialize max as 0 or any other starting value
};

export const ordinal = (n: number) =>
  `${n}${
    n % 100 >= 11 && n % 100 <= 13
      ? "th"
      : ["th", "st", "nd", "rd"][Math.min(n % 10, 4)] || "th"
  }`;
