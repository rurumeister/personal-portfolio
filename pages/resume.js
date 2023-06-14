import Head from "next/head";
import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import useMediaQuery from "@mui/material/useMediaQuery";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
//component imports
import Navbar from "../public/components/navbar";
import ContactMe from "../public/components/contactMe";
import Footer from "../public/components/footer";
import { BsFileX } from "react-icons/bs";

export default function Resume() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  const canvasWrapperStyle = {
    backgroundColor: "#f0f0f0",
    border: "1px solid black",
    borderRadius: "5px",
    padding: "10px",
  };
  const isInitialRequestGreaterThan700 = useMediaQuery("(min-width:700px)");
  return (
    <div className="bg-black">
      <Head>
        <title>Elroy Chua Portfolio - Resume</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/elroy_icon.png" />
      </Head>
      <Navbar activePage="resume" />
      <main>
        <section className="pt-10 px-10 md:px-20 lg:px-40">
          <div
            style={{ maxWidth: "100%", width: "100%", padding: "10px" }}
            className="bg-slate-900 rounded-xl shadow-xl"
          >
            <h2 className="font-mono bg-clip-text text-emerald-400 py-2 text-left  text-2xl md:text-5xl">
              Resume.
            </h2>
            <Document
              file="ElroyChuaResume.pdf "
              onLoadSuccess={onDocumentLoadSuccess}
              canvasWrapperStyle={canvasWrapperStyle}
            >
              {isInitialRequestGreaterThan700 ? (
                <Page
                  renderMode="canvas"
                  pageNumber={pageNumber}
                  renderAnnotationLayer={false}
                  renderTextLayer={false}
                  width="600"
                />
              ) : (
                <Page
                  pageNumber={pageNumber}
                  renderAnnotationLayer={false}
                  renderTextLayer={false}
                  width="300"
                />
              )}
            </Document>
            <p>
              Page {pageNumber} of {numPages}
            </p>
          </div>
          <ContactMe />
          <Footer />
        </section>
      </main>
    </div>
  );
}
