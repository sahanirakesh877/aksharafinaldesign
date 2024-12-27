import React from "react";
import "../css/Download.css";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const Download = () => {
  const [pdfs, setPdfs] = useState([]);
  useEffect(() => {
    const fetchPDF = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_SERVERAPI}/api/v1/getallpdf`
        );

        setPdfs(response.data.pdfs);
      } catch (error) {
        console.error("Error fetching PDFs:", error);
      }
    };
    fetchPDF();
  }, []);
  const handleDownload = (filePath) => {
    // Trigger file download
    window.location.href = `${import.meta.env.VITE_SERVERAPI}/${filePath}`;
  };
  return (
    <>
      <div className="container py-4">
        <div className="row mb-2 text-center">
          <div className="col-12">
            <h2 className="border-bottom-title justify-content-center  head-color d-flex align-items-start">
              <span className="addcolor">Downloads&nbsp;</span> Notices Result
            </h2>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="files-list p-4 shadow-sm rounded">
              <ul className="list-group">
                {pdfs.map((pdf) => (
                  <li key={pdf._id} className="list-group-item">
                    <div className="file-info">
                      <a href="#" className="file-name">
                        {pdf.title}.pdf
                      </a>
                      <span className="publication-date">
                        Published Date:{" "}
                        {new Date(pdf.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                    <a
                      href="#"
                      className="mb-btns"
                      onClick={() => handleDownload(pdf.filePath)}
                    >
                      <i className="fas fa-download"></i> Download
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Download;
