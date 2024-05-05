"use client";

import { useTheme } from "./components/contextApi";
import { useQRCode } from "next-qrcode";

export default function Home() {
  const { Canvas } = useQRCode();
  const { val, setVal, handleChange } = useTheme();

  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen text-2xl  text-[#964B00]">
        <h1>Welcome {val}!</h1>
        <Canvas
          text={`https://qr-code-rust-two.vercel.app/access/${val}`}
          options={{
            errorCorrectionLevel: "M",
            margin: 3,
            scale: 4,
            width: 300,
            color: {
              dark: "#964B00",
              light: "#ffffff",
            },
          }}
        />
        <h1> #TOBE4EVER</h1>
      </div>
    </>
  );
}
