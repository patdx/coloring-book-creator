import { PdfDocumentRenderer } from './pdf-document'
import { Settings } from './settings'
import { Uploader } from './uploader'

function App() {
  return (
    <div className="grid grid-rows-[1fr_auto_1fr] grid-cols-1 gap-4 p-4 w-screen h-screen">
      <Uploader />
      <Settings />
      <PdfDocumentRenderer />
    </div>
  )
}

export default App
