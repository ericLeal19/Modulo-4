import { createContext, useContext } from 'react'

export const HabitsContext = createContext(null)

export function useHabits() {
  return useContext(HabitsContext)
}