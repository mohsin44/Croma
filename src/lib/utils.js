import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const futureDate = getFutureDate(2);
function getFutureDate(daysToAdd) {
  const currentDate = new Date();
  const futureDate = new Date(currentDate);
  
  // Add days to the current date
  futureDate.setDate(currentDate.getDate() + daysToAdd);

  const day = futureDate.getDate();
  const month = futureDate.toLocaleString('default', { month: 'long' });
  const year = futureDate.getFullYear();

  const formattedDate = `${day} ${month} ${year}`;

  return formattedDate;
}