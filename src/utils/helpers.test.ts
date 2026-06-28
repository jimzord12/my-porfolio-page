import { describe, it, expect } from 'vitest';
import { cn, duplicateItemsBy } from './helpers';

describe('cn', () => {
  it('merges multiple class names', () => {
    expect(cn('foo', 'bar')).toBe('foo bar');
  });

  it('resolves tailwind conflicts — last class wins', () => {
    expect(cn('p-4', 'p-2')).toBe('p-2');
    expect(cn('text-red-500', 'text-blue-500')).toBe('text-blue-500');
  });

  it('strips empty strings', () => {
    expect(cn('foo', '', 'bar')).toBe('foo bar');
  });
});

describe('duplicateItemsBy', () => {
  it('duplicates array twice by default', () => {
    expect(duplicateItemsBy([1, 2, 3])).toEqual([1, 2, 3, 1, 2, 3]);
  });

  it('duplicates array by specified factor', () => {
    expect(duplicateItemsBy(['a', 'b'], 3)).toEqual(['a', 'b', 'a', 'b', 'a', 'b']);
  });

  it('returns empty array for empty input', () => {
    expect(duplicateItemsBy([])).toEqual([]);
  });
});
