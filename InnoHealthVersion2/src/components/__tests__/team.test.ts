import { describe, it, expect } from 'vitest'
import { team } from '../Team'

describe('team array', () => {
  it('exports a non-empty array', () => {
    expect(Array.isArray(team)).toBe(true)
    expect(team.length).toBeGreaterThan(0)
  })

  it('each member has required fields with correct types', () => {
    team.forEach((m) => {
      expect(typeof m.name).toBe('string')
      expect(m.name.length).toBeGreaterThan(0)

      expect(typeof m.role).toBe('string')
      expect(m.role.length).toBeGreaterThan(0)

      expect(typeof m.bio).toBe('string')

      expect(typeof m.img).toBe('string')
      // basic sanity for img URL
      expect(m.img.length).toBeGreaterThan(0)
      expect(/^(https?:\/\/|\/)/.test(m.img)).toBe(true)
    })
  })
})
