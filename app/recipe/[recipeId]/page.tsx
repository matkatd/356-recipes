import { NavBar } from "@/components/NavBar";
import { promises as fs } from "fs";
import React from "react";
import Image from "next/image";
import { Recipe } from "@/types/types";
import { Rating } from "@mui/material";
import { Bookmark, Print } from "@mui/icons-material";
import { RecipeGridCard } from "@/components/RecipeGridCard";
import { MongoClient } from "mongodb";

const getRecipes = async () => {
  // fetch from MONGODB_CONN connection string
  const client = new MongoClient(process.env.MONGODB_URI ?? "", {});

  try {
    await client.connect();
    const database = client.db("reciped");
    const collection = database.collection("recipes");
    const recipes = await collection.find().toArray();
    return JSON.parse(JSON.stringify(recipes));
  } catch (error) {
    console.error(error);
  } finally {
    await client.close();
  }
};

const RecipePage = async ({ params }: { params: { recipeId: string } }) => {
  const recipes: Recipe[] = await getRecipes();
  const recipe = recipes.find(
    (recipe) => recipe.id === parseInt(params.recipeId)
  );

  return (
    <main>
      <NavBar />
      <div className="recipePageGrid">
        <div className="recipeGridCard mainInfo">
          <Image
            src={`/${recipe?.url}`}
            width={200}
            height={200}
            alt={recipe?.image ?? "Recipe Image"}
          />
          <div className="recipeInfo">
            <div className="recipeName">
              <h1>{recipe?.name}</h1>
              <Rating value={recipe?.rating ?? 4} readOnly />
            </div>
            <p>{recipe?.description ?? ""}</p>
            <p>
              <strong>Time:</strong> {recipe?.cookTime}
            </p>
            <p>
              <strong>Difficulty:</strong> {recipe?.difficulty}
            </p>
            <p>
              <strong>Servings:</strong> {recipe?.servings}
            </p>
            <p>
              <strong>Nutrition Info:</strong> {recipe?.nutrition_info.calories}{" "}
              calories, {recipe?.nutrition_info.fat} fat,{" "}
              {recipe?.nutrition_info.carbohydrates} carbs,{" "}
              {recipe?.nutrition_info.protein} protein
            </p>
          </div>
        </div>
        <div className="beforeWhileAfter">
          <div className="beforeAfter">
            <RecipeGridCard title="Before you cook:">
              <div className="neededStuff">
                <div>
                  <h3>Ingredients Needed:</h3>
                  <ul>
                    {recipe?.ingredients.map((ingredient, index) => (
                      <li key={index}>
                        {ingredient.amount} {ingredient.units}{" "}
                        {ingredient.ingredient}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3>Equipment Needed:</h3>
                  <ul>
                    {recipe?.equipment.map((equipment, index) => (
                      <li key={index}>{equipment}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </RecipeGridCard>
            <RecipeGridCard className="spreadOut" title="After you cook:">
              <div>
                <p>
                  <strong>Author:</strong> {recipe?.author}
                </p>
                <div className="rateRecipe">
                  <strong>Rate:</strong>
                  <Rating />
                </div>
              </div>
              <div className="afterButtons">
                <button className="saveButton">
                  <Bookmark /> Save
                </button>
                <button className="printButton">
                  <Print /> Print
                </button>
              </div>
            </RecipeGridCard>
          </div>
          <RecipeGridCard className="whileCooking" title="While you cook:">
            <div>
              <h3>Instructions</h3>
              <ol>
                {recipe?.instructions.map((instruction, index) => (
                  <li key={index}>{instruction}</li>
                ))}
              </ol>
            </div>
          </RecipeGridCard>
        </div>
      </div>
    </main>
  );
};

export default RecipePage;
