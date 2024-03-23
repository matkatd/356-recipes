import React from "react";

type RecipeGridCardProps = {
  children: React.ReactNode;
  className?: string;
  title: string;
};

export const RecipeGridCard = ({
  children,
  className = "",
  title,
}: RecipeGridCardProps) => (
  <div className={"recipeGridCard " + className}>
    <h2>{title}</h2>
    {children}
  </div>
);
