"use client";
import { useTheme } from "./components/contextApi";
import { useQRCode } from "next-qrcode";
const names1 = [
  "Precious",
  "Ruka",
  "Ronke",
  "Shully",
  "Taiwo",
  "Kenny",
  "Bazon",
  "Iyanu",
  "Kanyisola",
  "Onyinye",
];

const names2 = [
  "Dami",
  "Osi",
  "Victor",
  "Abigail",
  "Amarachi",
  "Natty",
  "Ryan",
  "Ayomide",
  "Richmond",
  "Temilade",
];

const names3 = [
  "Ebuka",
  "Malik",
  "George",
  "Double G",
  "Hannah",
  "Ijeoma",
  "Kosisochukwu",
  "Dr. Martha",
  "David Edos",
  "Precious M",
  "MCee Triple 1",
];

const names4 = [
  "Arinze",
  "Edosan",
  "Tobenna",
  "Tope",
  "Ashley",
  "Chidiebere",
  "Vinson",
  "Benita",
  "Ikechukwu",
  "Seun Obisus",
  "Okon",
];

const names5 = [
  "Damilare",
  "Olayinka",
  "Amara",
  "Victoria",
  "Abubakar",
  "Precious",
  "Mrs. Christiana",
  "Isaac",
  "Joe",
  "Chijioke",
  "Fifty",
];

const names6 = [
  "Chisom Akah",
  "Clementina",
  "Ndupu",
  "Cynthia",
  "Hope",
  "Hope +1",
  "Odilu",
  "Dera",
  "Chibuike",
  "Tonia",
  "Tonia 2",
];

const names7 = [
  "Louis",
  "Victus",
  "Emre",
  "Dimzy",
  "Dr. Nono",
  "Anita",
  "Mrs. Maduche",
  "Cynthia Ayodele",
  "Seye",
  "Mary",
  "Jummai 2",
];

const names8 = [
  "Dayo",
  "Rapha",
  "Mayo",
  "Clara",
  "David",
  "Cyndy",
  "Boniface",
  "Chisom",
  "Irene Nwaukwa",
  "Oke Umurhohwo",
  "Ejiofor",
];

const names9 = [
  "Adolphus",
  "Oyeme",
  "Seun",
  "Suleiman",
  "Mr. Dapo",
  "Dr. Diya",
  "Doris",
  "Monica",
  "Adeola",
  "Vivian",
  "Aaron",
  "Kwado",
];
const names10 = [
  "Chisom Umekesiobi",
  "Bro Emmanuel",
  "Bro John",
  "Nancy",
  "Aunty Faith",
  "Aunty Blessing",
  "Halima",
  "Balikis"
];


// Now each array (names1 to names9) contains a distinct set of names

export default function Home() {
  const { Canvas } = useQRCode();
  const { val, setVal, handleChange } = useTheme();

  return (
    <>
      <div className="flex flex-wrap text-center justify-center items-center h-screen text-2xl  text-[#964B00]">
        {names10.map((name, index) => {
          return (
            <div key={index} className=" flex flex-col">
              <h1> #TOBE4EVER </h1>
              <p className=" italic from-neutral-500  font-extralight text-wrap  text-[#82552b]">
                Invites...
              </p>
              <h2>{name}</h2>
              <Canvas
                text={`https://qr-code-rust-two.vercel.app/access/${name}`}
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
          );
        })}
      </div>
    </>
  );
}
