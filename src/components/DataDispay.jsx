import { useAppStore } from "../stores/app-store";
import Button from "./Button";
import { Link } from "react-router-dom";

export default function DataDisplay() {
  const { products, removeProduct } = useAppStore((state) => {
    return {
      products: state.products,
      removeProduct: state.removeProduct,
    };
  });
  if (products.length <= 0)
    return <h1 className="text-center text-xl">data masih kosong</h1>;
  return (
    <div className="container mx-auto w-9/12 mt-10">
      <h1 className="font-bold text-3xl text-slate-900 text-center ">
        Product List
      </h1>
      <ul className="w-full flex flex-wrap justify-evenly gap-5 py-5">
        {products.map((product) => (
          <li
            key={product.id}
            className="border p-5 w-52 rounded-md shadow-md font-semibold"
          >
            <div className="flex flex-col text-lg">
              <img src={product.image} alt="" className="w-32 h-32 mx-auto" />
              <p className="font-bold mt-3 ">{product.name}</p>
              <p>{product.quantity}</p>
              <p className="pb-3">{product.price}</p>
            </div>
            <div className="flex gap-3 justify-center">
              <Button color="bg-slate-900">
                <Link to={`update/${product.id}`}>update</Link>
              </Button>
              <Button
                handler={() => removeProduct(product.id)}
                color="bg-red-500"
              >
                delete
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
