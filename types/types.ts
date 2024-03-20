export type Ingredient = {
  amount: string;
  units: string;
  ingredient: string;
};

export type NutritionInfo = {
  calories: number;
  fat: string;
  carbohydrates: string;
  protein: string;
};

export type Recipe = {
  author: string;
  url: string;
  isBasedOn: string;
  cookTime: string;
  datePublished: string;
  keywords: string;
  description: string;
  image: string;
  ingredients: Ingredient[];
  name: string;
  prepTime: string;
  recipeYield: string;
  recipe_title: string;
  difficulty: string;
  equipment: string[];
  servings: number;
  instructions: string[];
  nutrition_info: NutritionInfo;
  rating: number;
};
