import Uppy from '@uppy/core'
import { Dashboard } from '@uppy/react'

import '@uppy/core/dist/style.min.css'
import '@uppy/dashboard/dist/style.min.css'

export function Uploader({ uppy }: { uppy: Uppy }) {
  return <Dashboard uppy={uppy} hideUploadButton />
}
