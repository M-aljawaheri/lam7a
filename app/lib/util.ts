import { Journal } from "./definitions";

export const extractId = (item: Journal): number | null => {
  const extractIdFromImage = (image: string): number | null => {
    const regex = /issue(\d+)/;
    const match = image.match(regex);
    return match ? parseInt(match[1], 10) : null;
  };

  let id = extractIdFromImage(item.name);
  return id;
};

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
