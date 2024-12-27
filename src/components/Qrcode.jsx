import React, { useEffect, useState } from "react";
import axios from "axios";

const Qrcode = () => {
  const [qrCode, setQrCode] = useState("");

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_SERVERAPI}/api/v1/qr/generate-qr`, { responseType: "text" })
      .then((response) => setQrCode(response.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: qrCode }} />
      <p>Scan the QR code to download the notice PDF.</p>
    </div>
  );
};

export default Qrcode;
