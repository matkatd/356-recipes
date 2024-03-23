import { NavBar } from "@/components/NavBar";
import chickenSalad from "@/public/chickenSalad.jpg";
import React from "react";
import Image from "next/image";
import { Recipe } from "@/types/types";
import { Rating } from "@mui/material";

type RecipePageProps = {
  recipe: Recipe;
};

const RecipePage = () => (
  <main>
    <NavBar />
    <div className="recipePageGrid">
      <div className="mainInfo recipeGridCard">
        <Image src={chickenSalad} alt={"chicken salad"} />
        <div className="recipeInfo">
          <div className="recipeName">
            <h1>{"Chicken Salad"}</h1>
            <Rating value={4} readOnly />
          </div>
          <p>
            Savor the perfect blend of tender chicken, crisp vegetables, and
            creamy dressing in our refreshing chicken salad. A satisfying meal
            that&apos;s both healthy and delicious.
          </p>
          <p>
            <strong>Time:</strong> 20 mins
          </p>
          <p>
            <strong>Difficulty:</strong> Easy
          </p>
          <p>
            <strong>Servings:</strong> 4
          </p>
          <p>
            <strong>Nutrition Info:</strong> Calories: 250, Protein: 25g, Carbs:
            10g, Sodium: 400mg
          </p>
        </div>
      </div>
      <div className="beforeWhileAfter">
        <div className="beforeAfter">
          <div className="recipeGridCard">
            <h2>Before you cook:</h2>
            <div className="neededStuff">
              <div>
                <h3>Ingredients Needed:</h3>
                <ul>
                  <li>2 cups cooked chicken breast</li>
                  <li>1 cup lettuce</li>
                  <li>1/2 cup cherry tomatoes</li>
                  <li>1/2 cup cucumber</li>
                  <li>1/4 cup red onion</li>
                  <li>1/4 cup feta cheese</li>
                  <li>Salad Dressing</li>
                </ul>
              </div>
              <div>
                <h3>Equipment Needed:</h3>
                <ul>
                  <li>Mixing Bowl</li>
                  <li>Cutting Board</li>
                  <li>Knife</li>
                  <li>Measuring Cups</li>
                  <li>Salad Tongs or Forks</li>
                  <li>Serving Bowl</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="recipeGridCard">
            <div>
              <h2>After you cook:</h2>
            </div>
          </div>
        </div>
        <div className="whileCooking recipeGridCard">
          <div>
            <h2>While you cook:</h2>
          </div>
        </div>
      </div>
    </div>
  </main>
);

export default RecipePage;
