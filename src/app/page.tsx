"use client";

// import { useTheme } from "./ContextApi";
import { useTheme } from "./components/contextApi";
import { useQRCode } from "next-qrcode";

export default function Home() {
  const { Canvas } = useQRCode();
  const { text, setTheme, handleChange } = useTheme();

  return (
    <>
      <div>
        <h1>QR Code Generator</h1>
        <Canvas
          text={`http://localhost:3000/access/${text}`}
          
          options={{
            errorCorrectionLevel: "M",
            margin: 3,
            scale: 4,
            width: 200,
            color: {
              dark: "#964B00",
              light: "#ffffff",
            },
          }}
        />
        <div>
          <p>Enter your Name</p>
          <input
            type="text"
            value={text}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
      </div>
    </>
  );
}
