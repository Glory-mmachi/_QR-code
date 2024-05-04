"use client";

import "./globals.css";

// import { useTheme } from "./ContextApi";
import { useTheme } from "./components/contextApi";
import { useQRCode } from "next-qrcode";


export default function Home() {
  const { Canvas } = useQRCode();
  const { val, setVal, handleChange } = useTheme();

  return (
    <>
      <div className="App bg-slate-700">
        <h1 className="text-7xl " style={{ color: "#964B00" }}>{val} #TOBE4EVER</h1>
        <Canvas 
          text={`https://qr-code-rust-two.vercel.app/access/${val}`}
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
      </div>
    </>
  );
}
