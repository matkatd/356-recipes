import { NavBar } from "@/components/NavBar";
import styles from "./page.module.css";
import WavyBox from "@/public/WavyBox.svg";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <NavBar />
      <div className="wavyBox">
        <Image src={WavyBox} alt="wavy box background" />
      </div>
    </main>
  );
}
