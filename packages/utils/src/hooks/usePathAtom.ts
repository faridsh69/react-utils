import { atom } from 'jotai'

export const usePathAtom = atom<string>('/g1')
export const useFieldIndexesAtom = atom<any>({ group_1: 0, group_2: 0, group_3: 0, group_4: 0 })
