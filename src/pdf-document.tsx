import {
  Document,
  Image,
  Page,
  PDFViewer,
  StyleSheet,
} from '@react-pdf/renderer'
import Uppy from '@uppy/core'
import { useUppyState } from '@uppy/react'
import { ErrorBoundary } from 'react-error-boundary'

// Create styles
const styles = StyleSheet.create({
  page: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  },
})

// Create Document Component
export const PdfDocument = ({ uppy }: { uppy: Uppy }) => {
  const files = useUppyState(uppy, (state) => state.files)

  return (
    <Document>
      {Object.keys(files).map((key) => {
        const file = files[key]
        return (
          <Page size="A4" style={styles.page} key={file.id} wrap={false}>
            <Image src={file.data} style={styles.image} />
          </Page>
        )
      })}
    </Document>
  )
}

export function PdfDocumentRenderer({ uppy }: { uppy: Uppy }) {
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
          <PDFViewer>
            <PdfDocument uppy={uppy} />
          </PDFViewer>
        </ErrorBoundary>
      ) : (
        <div>Upload a file to see the PDF preview</div>
      )}
    </>
  )
}
