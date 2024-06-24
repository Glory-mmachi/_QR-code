import Image from "next/image";
import background from "../../../../public/B&T.jpg";
import background1 from "../../../../public/Benny BG Access.jpg";

export default function AccessDetails({ params }) {
  // Function to capitalize the first letter of each word in a string
  function capitalizeWords(sentence) {
    if (!sentence) {
      return "";
    }
    return sentence
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  }

  // Replace %20 with space and capitalize the first letter of each word
  const accessId = capitalizeWords(params.accessId.replaceAll("%20", " "));

  return (
    <>
      <div className="relative h-[100vh] overflow-y-hidden flex justify-center items-top">
        <Image
          src={background}
          alt="Background Image"
          className="absolute opacity-75"
          fill={true}
          style={{ objectFit: "contain", objectPosition: "center" }}
        />
        <Image
          src={background1}
          alt="Background Image"
          className="absolute z-[-4] h-[100vh] opacity-65"
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
        <div className="w-full h-[100px] bg-transparent flex justify-center items-center">
          <h1 className="absolute text-xl md:text-6xl font-bold flex justify-center items-center">
            {" "}
            Welcome{" "}
            <span className="pl-2 text-[#f8f6f3] italic font-mono">
              {accessId}!
            </span>
          </h1>
        </div>
      </div>
    </>
  );
}
