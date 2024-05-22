import Image from "next/image";
import Rotisserie from "@/public/rotisserie.jpg"

export default function Home() {
  return (
    <main className=""> 
      <Image src={"/rotisserie.jpg"}
      width={4160}
      height={6240}
      alt="chicken"
      />
      
    </main>
  );
}
