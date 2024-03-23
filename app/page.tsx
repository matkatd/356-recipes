import { NavBar } from "@/components/NavBar";
import Footer from "@/components/Footer";
import styles from "./page.module.css";
import WavyBox from "@/public/WavyBox.svg";
import Image from "next/image";
import RecipeCard from "../components/Card";
import { promises as fs } from "fs";
import { Recipe } from "@/types/types";
import { MongoClient } from "mongodb";

const getRecipes = async () => {
  const client = new MongoClient(process.env.MONGODB_URI ?? "", {});

  try {
    await client.connect();
    const database = client.db("reciped");
    const collection = database.collection("recipes");
    const recipes = await collection.find().toArray();
    // only return the first 3 recipes
    return JSON.parse(JSON.stringify(recipes)).slice(0, 3);
  } catch (error) {
    console.error(error);
  } finally {
    await client.close();
  }
};

export default async function Home() {
  const recipes = await getRecipes();

  return (
    <main>
      <NavBar />
      <div className="wavyBox">
        <Image src={WavyBox} alt="wavy box background" />
        <div>
          <h1 style={{ color: "#232323" }}>
            Hello!👋
            <br />
            Welcome to Reciped.
          </h1>
          <p style={{ color: "#555555" }}>
            Home to hundreds of your favorite recipes,
            <br /> without all the clutter
          </p>
        </div>
      </div>
      <div className="cardContainer">
        {recipes.map((recipe: Recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </main>
  );
}
