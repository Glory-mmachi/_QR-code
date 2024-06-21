"use client";

import { useTheme } from "./components/contextApi";
import { useQRCode } from "next-qrcode";
const namess=[
  "Tobenna", "Amara", "Ndupu", "Emre", "Mayo", "Suleiman", "Plus 1", "Mrs. Umoh", "Dr. Uwajeh",
  "Double G", "Tope", "Victoria", "Cynthia", "Dimzy", "Clara", "Mr. Dapo", "Plus 2", "Plus 1", "Mr. Ademola",
  "Hannah", "Ashley", "Abubakar", "Hope", "Dr. Nono", "David", "Dr. Diya", "Plus 3", "Mrs. Okodogbe", "Irene Nwaukwa",
  "Ijeoma", "Chidiebere", "Precious", "Hope plus 1", "Anita", "Cyndy", "Doris", "Neighbour 1", "Mr. Otis", "Glory's mum",
  "Kosisochukwu", "Vinson", "Mrs. Christiana", "Odilu", "Mrs. Maduche", "Boniface", "Monica", "Neighbour 2", "Chief. Silas", "Steph's mum",
  "Dr. Martha", "Benita", "Isaac", "Dera", "Cynthia Ayodele", "Chisom", "Adeola", "Chief Emmanuel", "Nwa Father", "Mr. Kelechi",
  "KC Uzo", "Ikechukwu"
]


export default function Home() {
  const { Canvas } = useQRCode();
  const { val, setVal, handleChange } = useTheme();

  return (
    <>
      <div className="flex flex-wrap justify-center items-center h-screen text-2xl  text-[#964B00]">
        {namess.map((nam,index)=>{
         return <div key={index} className=" flex flex-col">
       <h1> #TOBE4EVER  </h1>
        <p className=" italic from-neutral-500  font-extralight text-wrap  text-[#82552b]">Invites...</p>
        <h2>{nam}</h2>
        <Canvas
          text={`https://qr-code-rust-two.vercel.app/access/${nam}`}
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

          </div>
        })}
        {/* <h1> #TOBE4EVER  </h1>
        <p className=" italic from-neutral-500  font-extralight text-wrap  text-[#82552b]">Invites...</p>
        <h2>{val}</h2>
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
        /> */}

        <input
          type="text"
          placeholder="Generate access..."
          onChange={handleChange}
          className="border border-[#82552b]"
        />
      </div>
    </>
  );
}
