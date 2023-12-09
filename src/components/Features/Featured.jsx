import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";


const Featured = () => {

    const {darkMode} = useContext(AuthContext);
    const [loadedProducts, setLoadedProducts] = useState([]);

    useEffect(() => {

        fetch('https://etech-server.vercel.app/products/')
        .then(res => res.json())
        .then(data => setLoadedProducts(data))

    }, [])

    return (
        <div className="my-20 py-20">
            <div className="text-center">
                <h2 className="text-4xl font-bold mb-8"><span className="text-custom">Featured</span> Products</h2>
            </div>
            <div className="max-w-7xl mx-auto mt-10">
                <div className="grid lg:grid-cols-4 grid-cols-1 gap-6">
                    {
                        loadedProducts.slice(0, 8).map(product => <div key={product._id} 
                        style={darkMode?{background: 'white'}:{background: '#333', color: 'white', border: 'none'}}
                        className="card card-compact bg-base-100 shadow-2xl border">
                            <figure><img className="h-52" src={product.photo} alt="product" /></figure>
                            <div className="card-body">
                                <div>
                                    <h2 className="card-title">{product.name}</h2>
                                    <div className="flex justify-between">
                                        <p>Brand : {product.brandName}</p>
                                        <p>Type : {product.type}</p>
                                    </div>
                                </div>
                                <hr />
                                <div>
                                    <h2 className="text-custom font-bold text-4xl mt-2">{product.price}</h2>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div className="rating">
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    </div>
                                    <h4 className="font-bold">{product.rating}</h4>
                                </div>
                                <hr />
                                <div className="card-actions mt-4">
                                    <Link  className="btn w-full bg-custom text-white hover:bg-base-content" to={`/product-details/product/${product._id}`}>Details</Link>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Featured;