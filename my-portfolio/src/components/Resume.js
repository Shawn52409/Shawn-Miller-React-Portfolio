import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { FiDownload } from "react-icons/fi";


export default function Resume() {
    
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
    const [numPages, setNumPages] = useState(2);
    const [pageNumber, setPageNumber] = useState(1);
  
    function onDocumentLoadSuccess({ numPages }) {
      setNumPages(numPages);
    }
    
    
    return(
        <div className='m-5 d-inline-flex'>
            <div>
                <a href="/img/Miller-Shawn-Resume.pdf" target="_blank" className='resumeLink'><FiDownload /> Resume</a> 
            </div>
            
            <Document
                file='/img/Miller-Shawn-Resume.pdf'
                onLoadSucess={onDocumentLoadSuccess}
                >
                <Page pageNumber={1} />
            </Document>

            <Document 
                file='/img/Miller-Shawn-Resume.pdf'
                onLoadSucess={onDocumentLoadSuccess}
            >
                <Page pageNumber={2} />
            </Document>
        </div>
    );
};