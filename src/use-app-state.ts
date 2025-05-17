import Uppy from '@uppy/core'
import { useState } from 'react'

export type AppState = {
  uppy: Uppy
  pageSize: 'a4' | 'letter'
  margin: boolean
}

export function useAppState() {
  const [uppy] = useState(
    () =>
      new Uppy({
        restrictions: {
          allowedFileTypes: ['image/*'],
        },
      }),
  )

  return { uppy }
}
