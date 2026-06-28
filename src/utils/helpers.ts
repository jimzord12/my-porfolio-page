import { twMerge } from 'tailwind-merge';
import { clsx, type ClassValue } from 'clsx';

export function cn(...classes: ClassValue[]): string {
  return twMerge(clsx(...classes));
}

export function duplicateItemsBy<T>(array: T[], num: number = 2): T[] {
  let newArr: T[] = [];
  for (let i = 0; i < num; i++) {
    newArr = [...newArr, ...array];
  }
  return newArr;
}
