import { NavBar } from "@/components/NavBar";
import chickenSalad from "@/public/chickenSalad.jpg";
import React from "react";
import Image from "next/image";
import { Recipe } from "@/types/types";
import { Rating } from "@mui/material";
import { Bookmark, Print } from "@mui/icons-material";
import { RecipeGridCard } from "@/components/RecipeGridCard";

type RecipePageProps = {
  recipe: Recipe;
};

const RecipePage = () => (
  <main>
    <NavBar />
    <div className="recipePageGrid">
      <div className="recipeGridCard mainInfo" title={"Chicken Salad"}>
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
          <RecipeGridCard className="spreadOut" title="Before you cook:">
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
          </RecipeGridCard>
          <RecipeGridCard className="spreadOut" title="After you cook:">
            <div>
              <p>
                <strong>Author:</strong> John Doe
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
              <li>
                Begin by preparing the ingredients. Shred the cooked chicken
                breast and chop the lettuce. Halve the cherry tomatoes, dice the
                cucumber, and thinly slice the red onion.
              </li>
              <li>
                In a mixing bowl, combine the shredded chicken, chopped lettuce,
                halved cherry tomatoes, diced cucumber, and thinly sliced red
                onion.
              </li>
              <li>Add the desired amount of salad dressing to the bowl.</li>
              <li>
                Using salad tongs or forks, toss the ingredients until they are
                evenly coated with the dressing.
              </li>
              <li>
                Once thoroughly mixed, transfer the chicken salad to a serving
                bowl.
              </li>
              <li>Serve immediately and enjoy your delicious chicken salad!</li>
            </ol>
          </div>
        </RecipeGridCard>
      </div>
    </div>
  </main>
);

export default RecipePage;
