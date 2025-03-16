import React from 'react'
import DocViewer, {DocViewerRenderers} from '@cyntler/react-doc-viewer'
import { u } from 'framer-motion/client'
import { NaveenResume } from '../assets/Resume/data'

const Resume = () => {

    const pdf = [
        {
            uri: NaveenResume,
            page: 1,
            fileType: 'pdf',
            fileName: 'Naveen PDF'
        }
    ]

  return (
    <div className='md:mx-24 md:my-32 mx-2 my-5'>
        <DocViewer documents={pdf} renderers={DocViewerRenderers} />
    </div>
  )
}

export default Resume