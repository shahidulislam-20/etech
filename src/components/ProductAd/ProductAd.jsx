import { Link, useLoaderData } from "react-router-dom";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import { useEffect } from "react";
import { useState } from "react";

const ProductAd = () => {

    const loadedProducts = useLoaderData();
    const [unavailable, setUnavailable] = useState('');

    useEffect(() => {
        if(loadedProducts.find(product => product.brandName == 'Dell')){
            setUnavailable('All the product unavailable at this time');
            return;
        }
    }, [])

    console.log(loadedProducts);

    return (
        <div>
            <div>
                <AwesomeSlider className="h-screen" animation="cubeAnimation" bullets={false}>
                    {/* Slider 01 */}
                    {
                        loadedProducts.slice(0, 3).map(product => <div key={product._id}
                            style={{background: `url('${product.photo}')`, 
                            backgroundRepeat: 'no-repeat', 
                            backgroundSize: 'cover', 
                            backgroundPosition: 'center bottom'}} className='text-center md:space-y-14 space-y-5'>
                            <p className='text-custom md:text-7xl text-5xl'>save up to <br /><span className='text-custom md:text-8xl text-4xl font-bold'>$399</span></p>
                            <p className='text-custom md:text-2xl text-xl uppercase w-1/2 mx-auto'>{product.shortDescription}</p>
                            <button className='bg-custom hover:bg-base-content text-xl font-bold text-white px-8 py-3 rounded-md'>Shop Now</button>
                        </div>)
                    }
                </AwesomeSlider>
            </div>

            {/* product showing from individual brand */}

            <div className="max-w-7xl mx-auto py-28">
                <div>
                    <h3 className="font-bold text-4xl uppercase mb-5"><span className="text-custom">Featured</span> Product</h3>
                    {
                        unavailable && <h4 className="text-center mb-5 text-2xl text-custom font-bold">{unavailable}</h4>
                    }
                    <hr className="mb-8" />
                </div>
                <div className="grid lg:grid-cols-4 grid-cols-1 gap-6">
                    {
                        loadedProducts.map(product => <div key={product._id} className="card card-compact bg-base-100 shadow-2xl border">
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
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    </div>
                                    <h4 className="font-bold">{product.rating}</h4>
                                </div>
                                <hr />
                                <div className="card-actions justify-between mt-4">
                                    <button className="btn bg-custom text-white hover:bg-base-content">
                                        <Link to={`/product-details/product/${product._id}`}>Details</Link>
                                    </button>
                                    <button className="btn bg-custom text-white hover:bg-base-content">
                                        <Link to={`/update-product/${product._id}`}>Update</Link>
                                    </button>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ProductAd;