import { useParams } from "react-router-dom";
import { useAppStore } from "../stores/app-store"
import { useState } from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

export default function DataUpdate() {
  const {products, updateProduct} = useAppStore(state => {
    return {
      products: state.products,
      updateProduct: state.updateProduct
    }
  })
  const {id} = useParams();
  const currentId = parseInt(id)
  console.log(id)
  
  const dataUpdate = products.find(product => product.id === currentId) || {};
  const [name, setName] = useState(dataUpdate.name || '');
  const [quantity, setQuantity] = useState(dataUpdate.quantity || 0);
  const [price, setPrice] = useState(dataUpdate.price || 0);
  const [image, setImage] = useState(dataUpdate.image || '');
  const navigate = useNavigate()

   async function handleSubmit(e) {
  e.preventDefault();

  try {
    // Validasi input
    if (name.trim() === '' || quantity <= 0 || price <= 0) {
      throw new Error("Data tidak boleh kosong");
    }

    // Persiapkan data untuk update
    const updateData = {id: currentId, name, quantity, price, image };

    // Panggil fungsi updateProduct dengan menunggu hasilnya
    await updateProduct(currentId, updateData);

    // Setelah pembaruan berhasil, tampilkan pesan sukses dan reset state
    alert("Produk berhasil diperbarui");
    setName('');
    setQuantity(0);
    setPrice(0);
    setImage('');
  } catch (error) {
    // Tangkap kesalahan dan tampilkan pesan kesalahan
    alert(`Terjadi kesalahan: ${error.message}`);
  }
  navigate("/dashboard")

}

  function handleImageUpload(e) {
    const file = e.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setImage(imageUrl)
  }

   return (
    <>
      <h1 className="font-bold text-3xl text-slate-900 text-center mt-14 ">Product Update</h1>
  <form action="" onSubmit={handleSubmit} className="w-3/4 md:w-1/2 border rounded-lg shadow-md mx-auto flex flex-col p-10 mt-5 items-center gap-3">
      <div className="flex flex-col mx-auto">
        <label className="mb-1 font-semibold" htmlFor="name">Name Product</label>
        <input 
          id="name"
          type="text" 
          className="h-10 w-full border px-2 rounded-md" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
         <label className="mt-2 mb-1 font-semibold" htmlFor="quantity">Quantity</label>
        <input 
          id="quantity"
          type="number" 
          placeholder="quantity" 
          className="h-10 w-full border px-2 rounded-md"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <label className="mt-2 mb-1 font-semibold" htmlFor="price">Price</label>
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
      <Button color="bg-slate-900" type="submit">Update Data</Button>

    </form>   
    </>
  )

}