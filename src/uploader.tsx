import { Dashboard } from '@uppy/react'

import '@uppy/core/dist/style.min.css'
import '@uppy/dashboard/dist/style.min.css'
import { useAppState } from './use-app-state'

export function Uploader() {
  const uppy = useAppState((state) => state.uppy)

  return <Dashboard uppy={uppy} hideUploadButton />
}
