import { Recipe } from "./types";

const searchRecipes = async (searchTerm: string, page: number) => {
  const baseURL = new URL("http://localhost:5000/api/recipe/search");
  baseURL.searchParams.append("searchTerm", searchTerm);
  baseURL.searchParams.append("page", page.toString());

  const response = await fetch(baseURL.toString());

  if (!response.ok) {
    throw new Error(`HTTP Error: ${response.status}`);
  }

  return response.json();
};

const getRecipeSummary = async (recipeId: string) => {
  const baseURL = new URL(
    `http://localhost:5000/api/recipe/${recipeId}/summary`
  );

  const response = await fetch(baseURL.toString());

  if (!response.ok) {
    throw new Error(`HTTP Error: ${response.status}`);
  }

  return response.json();
};

const getFavouriteRecipes = async () => {
  const url = new URL("http://localhost:5000/api/recipes/favorite");
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  return response.json();
};

const addFavoriteRecipe = async (recipe: Recipe) => {
  const body = {
    recipeId: recipe.id,
  };
  const response = await fetch("http://localhost:5000/api/recipes/favorite", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  if (!response.ok) {
    throw new Error("Failed to save favorite");
  }
};

const removeFavoriteRecipe = async (recipe: Recipe) => {
  const body = {
    recipeId: recipe.id,
  };
  const response = await fetch("http://localhost:5000/api/recipes/favorite", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  if (!response.ok) {
    throw new Error("Failed to remove favorite");
  }
};

export {
  searchRecipes,
  getRecipeSummary,
  getFavouriteRecipes,
  addFavoriteRecipe,
  removeFavoriteRecipe,
};
