import { PdfDocumentRenderer } from './pdf-document'
import { Uploader } from './uploader'
import { useAppState } from './use-app-state'

function App() {
  const appState = useAppState()
  const { uppy } = appState

  return (
    <div className="main">
      <Uploader uppy={uppy} />
      <PdfDocumentRenderer uppy={uppy} />
    </div>
  )
}

export default App
