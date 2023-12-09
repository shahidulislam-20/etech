import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../AuthProvider/AuthProvider";


const ProductDetails = () => {

    const {darkMode, user} = useContext(AuthContext);
    const loadedProducts = useLoaderData();
    const { _id, name, brandName, type, price, rating, photo, shortDescription} = loadedProducts;
    const userName = user.email;
    const handleAddToCart = id => {
        fetch('https://etech-server.vercel.app/addtocart', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({id, userName})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    position: 'center-center',
                    icon: 'success',
                    title: 'Product add to cart successfully',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }

    return (
        <div style={darkMode?{background: 'white'}:{background: '#202124', color: 'white', border: 'none'}}>
            <div  className="max-w-7xl mx-auto pt-20 pb-10">
                <h2 className="text-4xl text-center font-bold uppercase"><span className="text-custom">Product</span> Details</h2>
                <div className="flex lg:flex-row flex-col items-center gap-10 py-20">
                    <div>
                        <img src={photo} alt="" />
                    </div>
                    <div 
                    style={darkMode?{background: 'white'}:{background: '#333', color: 'white', border: 'none'}}
                    className="shadow-2xl py-10 rounded-lg px-5">
                        <h3 className="text-2xl font-bold">{name}</h3>
                        <h4>Brand Name : {brandName}</h4>
                        <p className="mb-5">Type : {type}</p>
                        <hr/>
                        <h4 className="text-3xl text-custom font-bold">{price}</h4>
                        <p className="mb-3">Rating : {rating}</p>
                        <p>Description : {shortDescription}</p>
                        <div>
                            <button onClick={() => handleAddToCart(_id)} className="btn bg-custom w-full mt-10 text-white hover:text-black">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;