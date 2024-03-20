import { NavBar } from "@/components/NavBar";
import styles from "./page.module.css";
import WavyBox from "@/public/WavyBox.svg";
import Image from "next/image";
import ActionAreaCard from "../components/Card";

export default function Home() {
  return (
    <main>
      <NavBar />
      <div className="wavyBox">
        <Image src={WavyBox} alt="wavy box background" />
        <div>
          <h1>
            Hello!👋
            <br />
            Welcome to Reciped.
          </h1>
          <p style={{ color: "#555555" }}>
            Home to hundreds of your favorite recipes,
            <br /> all at your fingertips
          </p>
        </div>
      </div>
      <div className="cardContainer">
        <ActionAreaCard />
        <ActionAreaCard />
        <ActionAreaCard />
      </div>
    </main>
  );
}
