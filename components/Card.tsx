import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import { CardActionArea } from "@mui/material";
import chickenSalad from "@/public/chickenSalad.jpg";
import { Recipe } from "@/types/types";

type RecipeCardProps = {
  recipe: Recipe;
};

export default function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <Card
      sx={{
        maxWidth: 600,
        borderRadius: "25px",
        boxShadow: "0px 4px 11.9px rgba(0, 0, 0, 0.04)",
      }}
    >
      <CardActionArea href={`/recipe/${recipe?.id}`}>
        <div style={{ borderBottom: "1px solid #DDDDDD" }}>
          <CardMedia
            component="img"
            height="300"
            width="300"
            src={`/${recipe?.url}`}
            alt={recipe?.image}
          />
          <div
            style={{
              position: "absolute",
              top: "16px",
              right: "16px",
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              backgroundColor: "#CCCCCC",
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
              alignItems: "center",
              background: "white",
              boxShadow: "0px 4px 11.9px rgba(0, 0, 0, 0.04)",
            }}
          >
            <button
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 0,
                fontSize: "24px",
                color: "#232323",
                height: "48px",
                width: "48px",
                display: "flex",
                placeContent: "center",
                justifyContent: "center",
                placeItems: "center",
              }}
            >
              {/* Icon or content for the button */}
              <BookmarkBorderOutlinedIcon />
            </button>
          </div>
        </div>
        <CardContent>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Typography
              style={{
                fontSize: "24px",
                color: "#232323",
                fontFamily: "Inter",
                fontWeight: "500",
                marginBottom: "6px",
              }}
            >
              {recipe?.name}
            </Typography>
            <div
              style={{
                marginLeft: "8px",
                marginBottom: "2px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography
                style={{
                  fontSize: "12px",
                  color: "#888888",
                  fontFamily: "Inter",
                }}
              >
                <StarBorderOutlinedIcon
                  style={{ fontSize: "small", marginRight: "2px" }}
                />
                {recipe?.rating + "/5"}
              </Typography>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <Typography
                style={{
                  fontSize: "12px",
                  color: "#888888",
                  fontFamily: "Inter",
                }}
              >
                <AccessTimeOutlinedIcon
                  style={{ fontSize: "small", marginRight: "4px" }}
                />
                {recipe?.cookTime}
              </Typography>
            </div>

            <div>
              <Typography
                style={{
                  fontSize: "12px",
                  color: "#888888",
                  fontFamily: "Inter",
                }}
              >
                Difficulty: {recipe?.difficulty}
              </Typography>
            </div>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
