import {
  Document,
  Image,
  Page,
  PDFViewer,
  StyleSheet,
} from '@react-pdf/renderer'
import { useUppyState } from '@uppy/react'
import { ErrorBoundary } from 'react-error-boundary'
import { useAppState } from './use-app-state'

// Create styles
const styles = StyleSheet.create({
  page: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pageMargin: {
    padding: 20,
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  },
})

// Create Document Component
export const PdfDocument = () => {
  const uppy = useAppState((state) => state.uppy)
  const files = useUppyState(uppy, (state) => state.files)
  const pageSize = useAppState((state) => state.pageSize)
  const margin = useAppState((state) => state.margin)

  return (
    <Document>
      {Object.keys(files).map((key) => {
        const file = files[key]
        return (
          <Page
            size={pageSize}
            style={[styles.page, ...(margin ? [styles.pageMargin] : [])]}
            key={file.id}
            wrap={false}
          >
            <Image src={file.data} style={styles.image} />
          </Page>
        )
      })}
    </Document>
  )
}

export function PdfDocumentRenderer() {
  const uppy = useAppState((state) => state.uppy)
  const hasFiles = useUppyState(
    uppy,
    (state) => Object.keys(state.files).length > 0,
  )

  return (
    <>
      {hasFiles ? (
        <ErrorBoundary
          fallbackRender={function fallbackRender({ error }) {
            // Call resetErrorBoundary() to reset the error boundary and retry the render.

            return (
              <div role="alert">
                <p>Something went wrong:</p>
                <pre style={{ color: 'red' }}>{error.message}</pre>
              </div>
            )
          }}
        >
          <PDFViewer className="w-full h-full">
            <PdfDocument />
          </PDFViewer>
        </ErrorBoundary>
      ) : (
        <div className="p-4 border rounded flex flex-col gap-2">
          <p>
            This is a free tool to combine multiple images into a PDF, such as
            for a coloring book.
          </p>
          <p>All processing happens inside your browser.</p>
          <p>Upload a file to see the PDF preview.</p>
        </div>
      )}
    </>
  )
}
