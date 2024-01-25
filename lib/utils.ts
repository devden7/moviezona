import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function convertDateToMonthYear(dateString: string): string {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const date = new Date(dateString);
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return `${month} ${year}`;
}

export function convertDateToYear(dateString: string): string {
  const date = new Date(dateString);
  const year = date.getFullYear();

  return `${year}`;
}

export function convertToHourMinute(minutes: number): string {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  const hoursText = hours > 0 ? `${hours}h` : "";
  const minutesText = remainingMinutes > 0 ? ` ${remainingMinutes}m` : "";

  return `${hoursText}${minutesText}`;
}

export function formatNumberRating(numberRating: number): string {
  return (
    Math.floor(numberRating) +
    (numberRating - Math.floor(numberRating))
  ).toFixed(1);
}
