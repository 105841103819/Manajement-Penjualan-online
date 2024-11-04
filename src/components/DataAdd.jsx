import { useState } from "react";
import { useAppStore } from "../stores/app-store";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

export default function AddData() {
  const addProduct = useAppStore((state) => state.addProduct);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");
  const navigate = useNavigate();
  function handleImageUpload(e) {
    const file = e.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setImage(imageUrl);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const id = +new Date();
    if (name === "") return alert("data tidak boleh kosong");
    if (quantity <= 0 || price <= 0) return alert("data tidak boleh kosong");
    const newData = { id, name, quantity, price, image };
    addProduct(newData);
    alert("success to add product");
    setName("");
    setQuantity(0);
    setPrice(0);
    setImage("");
    navigate("/dashboard");
  }
  return (
    <>
      <h1 className="font-bold text-3xl text-slate-900 text-center mt-14 ">
        Product Add
      </h1>
      <form
        action=""
        onSubmit={handleSubmit}
        className="w-3/4 md:w-1/2 border rounded-lg shadow-md mx-auto flex flex-col p-10 mt-5 gap-3 items-center"
      >
        <div className="flex flex-col mx-auto">
          <label className="mb-1 font-semibold" htmlFor="name">
            Name Product
          </label>
          <input
            id="name"
            type="text"
            className="h-10 w-full border px-2 rounded-md"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label className="mt-2 mb-1 font-semibold" htmlFor="quantity">
            Quantity
          </label>
          <input
            id="quantity"
            type="number"
            placeholder="quantity"
            className="h-10 w-full border px-2 rounded-md"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
          <label className="mt-2 mb-1 font-semibold" htmlFor="price">
            Price
          </label>
          <input
            id="price"
            type="number"
            placeholder="price"
            className="h-10 w-full border px-2 rounded-md"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <input
            type="file"
            accept="image/*"
            className=" w-full mt-2 "
            onChange={handleImageUpload}
          />
        </div>
        <Button color="bg-slate-900" type="submit">
          Add Data
        </Button>
      </form>
    </>
  );
}
