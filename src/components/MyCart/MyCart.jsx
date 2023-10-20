import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const MyCart = () => {

    const loadedCart = useLoaderData();
    const [carts, setCarts] = useState([]);
    const [display, setDisplay] = useState(loadedCart);

    useEffect(() => {

        fetch('https://etech-server-f4q7p9tuv-ishahidul018-gmailcom.vercel.app/products')
            .then(res => res.json())
            .then(data => setCarts(data))

    }, [])

    const myCartProduct = carts.filter(cart => {
        return display.find(load => load.id == cart._id);
    })


    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://etech-server-f4q7p9tuv-ishahidul018-gmailcom.vercel.app/addtocart/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if(data.deletedCount>0){
                            Swal.fire(
                                'Deleted!',
                                'Your product has been deleted.',
                                'success'
                            )
                            const remaining = display.filter(filterCart => filterCart.id !== id);
                            setDisplay(remaining);
                        }
                    })
            }
        })

    }

    return (
        <div className="max-w-7xl mx-auto py-28">
            <div>
                <div>
                    <h2 className="text-4xl font-bold text-center uppercase"><span className="text-custom">My</span> Cart</h2>
                    <h3 className="text-xl my-5 font-bold text-center uppercase">Total Add to Cart ({myCartProduct.length})</h3>
                </div>
                <div>
                    {
                        myCartProduct.map(product => <div
                            className="grid md:grid-cols-4 gap-10 shadow-xl p-10 rounded-lg my-5 items-center"
                            key={product._id}>
                            <div>
                                <img src={product.photo} alt="" />
                            </div>
                            <div className="col-span-3 flex justify-between items-center">
                                <div>
                                    <h2 className="text-2xl font-bold">{product.name}</h2>
                                    <p>Brand Name : {product.brandName}</p>
                                    <p>Price : {product.price}</p>
                                    <p>Type : {product.type}</p>
                                </div>
                                <div>
                                    <button onClick={() => handleDelete(product._id)} className="btn bg-custom text-white hover:text-black font-bold">Delete</button>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default MyCart;