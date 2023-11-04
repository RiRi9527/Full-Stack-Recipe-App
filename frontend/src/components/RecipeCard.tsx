import { Recipe } from "../types";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

interface Props {
  recipe: Recipe;
  onClick: () => void;
  onFavouriteButtonClick: (recipe: Recipe) => void;
  isFavourite: boolean;
}

const RecipeCard = ({
  recipe,
  onClick,
  onFavouriteButtonClick,
  isFavourite,
}: Props) => {
  return (
    <div className="recipe-card" onClick={onClick}>
      <img src={recipe.image}></img>
      <div className="recipe-card-title">
        <span
          onClick={(e) => {
            e.stopPropagation();
            onFavouriteButtonClick(recipe);
          }}
        >
          {isFavourite ? (
            <AiFillHeart size={25} color="red" />
          ) : (
            <AiOutlineHeart size={25} />
          )}
        </span>
        <h3>{recipe.title}</h3>
      </div>
    </div>
  );
};

export default RecipeCard;
