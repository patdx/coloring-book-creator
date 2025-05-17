import Uppy from '@uppy/core'
import { create } from 'zustand'

export type PageSize = 'A4' | 'LETTER'

export type AppState = {
  uppy: Uppy
  pageSize: PageSize
  setPageSize: (pageSize: PageSize) => void
  margin: boolean
  setMargin: (margin: boolean) => void
}

export const useAppState = create<AppState>((set) => ({
  uppy: new Uppy({
    restrictions: {
      allowedFileTypes: ['image/*'],
    },
  }),
  pageSize: 'A4',
  setPageSize: (pageSize) => set({ pageSize }),
  margin: true,
  setMargin: (margin) => set({ margin }),
}))
