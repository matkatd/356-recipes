import { NavBar } from "@/components/NavBar";
import chickenSalad from "@/public/chickenSalad.jpg";
import React from "react";
import Image from "next/image";
import { Recipe } from "@/types/types";

type RecipePageProps = {
  recipe: Recipe;
};

const RecipePage = ({ recipe }: RecipePageProps) => (
  <main>
    <NavBar />
    <div className="recipePageGrid">
      <div className="mainInfo">
        <Image src={recipe.image} alt={recipe.name} />
        <div>
          <h1>{recipe.name}</h1>
        </div>
      </div>
      <div className="beforeWhileAfter">
        <div className="beforeAfter">
          <div>
            <h2>Before you cook:</h2>
          </div>
          <div>
            <h2>After you cook:</h2>
          </div>
        </div>
        <div className="whileCooking">
          <h2>While you cook:</h2>
        </div>
      </div>
    </div>
  </main>
);

export default RecipePage;
