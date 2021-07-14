// ? internal imports
// ? Components imports
import { LinearProgress } from "@material-ui/core";
import { useQuery } from "react-query";

export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
};

const getProducts = async (): Promise<CartItemType[]> =>
  await (await fetch("https://fakestoreapi.com/products")).json();

const App = () => {
  const { data, isLoading, error } = useQuery<CartItemType[]>(
    "products",
    getProducts
  );
  console.log(data);

  const getTotalItems = () => null;

  const handleAddToCart = () => null;

  const handleRemoveFromCart = () => null;

  if (isLoading) {
    return <LinearProgress />;
  }

  if (error) {
    return <div>Something went wrong...</div>;
  }
  return (
    <>
      <h1>Shopping Cart</h1>
    </>
  );
};

export default App;
