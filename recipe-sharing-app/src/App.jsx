import { BrowserRouter, Routes, Route } from "react-router-dom";
import RecipeDetails from "./RecipeDetails";
import RecipeList from "./RecipeList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RecipeList />} />
        <Route path="/recipe/:id" element={<RecipeDetailsWrapper />} />
      </Routes>
    </BrowserRouter>
  );
}

const RecipeDetailsWrapper = () => {
  const { id } = useParams(); // Extract recipe ID from the route
  return <RecipeDetails recipeId={id} />;
};

export default App;
