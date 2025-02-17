import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';

/**
 * Combines `clsx` and `twMerge` to handle dynamic and merged Tailwind classes.
 *
 * @param  {...string} classes - Class names or conditions for classes
 * @returns {string} - A string of merged and resolved class names
 */
export function cn(...classes: string[]): string {
  return twMerge(clsx(...classes));
}

export function duplicateItemsBy<T>(array: T[], num: number = 2): T[] {
  let newArr: T[] = [];
  for (let i = 0; i < num; i++) {
    newArr = [...newArr, ...array];
  }
  return newArr;
}
