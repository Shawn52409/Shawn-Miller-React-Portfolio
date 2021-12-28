// import React from 'react';
import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';


export default function Resume() {
    
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
    const [numPages, setNumPages] = useState(2);
    const [pageNumber, setPageNumber] = useState(1);
  
    function onDocumentLoadSuccess({ numPages }) {
      setNumPages(numPages);
    }
    
    
    return(
        <div className='m-5 d-inline-flex'>
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