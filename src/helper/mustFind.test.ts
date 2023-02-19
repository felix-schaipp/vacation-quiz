import { mustFind } from './mustFind'
import { describe, test, expect } from '@/setupTests'

type TestItem = {
  id: number
  name: string
}

const createTestItems = (): TestItem[] => [
  { id: 1, name: 'foo' },
  { id: 2, name: 'bar' },
  { id: 3, name: 'foobar' },
]

describe('[UTILITIES - ARRAY] - mustFind', () => {
  test('returns item', () => {
    const testItems = createTestItems()
    const found = mustFind(testItems, (item) => item.id === 3)

    expect(found).toBeDefined()
    expect(found).toMatchObject({ id: 3, name: 'foobar' })
  })

  test('throws if item is not in array', () => {
    const testItems = createTestItems()

    expect(() => mustFind(testItems, (item) => item.id === 4)).toThrow(
      'No item found for predicate (item) => item.id === 4',
    )
  })
})
