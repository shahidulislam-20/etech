import { Link } from "react-router-dom";
import ProductAd from "../ProductAd/ProductAd";


const Brands = () => {

    const handleBrandProduct = (brand) => {
        console.log(brand);
        <ProductAd brand={brand}></ProductAd>
        // fetch(`https://etech-server-f4q7p9tuv-ishahidul018-gmailcom.vercel.app/products/${brand}`, {
        //     method: 'GET',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(brand)
        // })
        // .then(res => res.json())
        // .then(data => {
        //     console.log(data)
        // })
    }

    return (
        <div className="my-20">
            <div className="text-center">
                <h2 className="text-4xl font-bold mb-8"><span className="text-custom">Top</span> Brands</h2>
            </div>
            <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-1 items-center max-w-7xl mx-auto text-xl text-center font-semibold">
                <Link onClick={() => handleBrandProduct("Apple")} className="shadow-xl md:mt-0 mt-5 rounded-lg border border-solid hover:bg-[#59b21080] m-2 px-8 py-5 space-y-5" to="/product-ad/Apple">
                    <img className="h-14 mx-auto" src="https://i.ibb.co/HXWTQV8/apple.png" alt="" />
                    <h4>Apple</h4>
                </Link>
                <Link onClick={() => handleBrandProduct("Samsung")}  className="shadow-xl md:mt-0 mt-5 rounded-lg border border-solid hover:bg-[#59b21080] m-2 px-8 py-5 space-y-5" to='/product-ad/Samsung'>
                    <img className="h-14 mx-auto" src="https://i.ibb.co/c2BvF9S/samsung.png" alt="" />
                    <h4>Samsung</h4>
                </Link>
                <Link onClick={() => handleBrandProduct("Google")}  className="shadow-xl md:mt-0 mt-5 rounded-lg border border-solid hover:bg-[#59b21080] m-2 px-8 py-5 space-y-5" to="/product-ad/Google">
                    <img className="h-14 mx-auto" src="https://i.ibb.co/wh8M9HR/google.png" alt="" />
                    <h4>Google</h4>
                </Link>
                <Link onClick={() => handleBrandProduct("Sony")}  className="shadow-xl md:mt-0 mt-5 rounded-lg border border-solid hover:bg-[#59b21080] m-2 px-8 py-5 space-y-5" to="/product-ad/Sony">
                    <img className="h-14 mx-auto" src="https://i.ibb.co/16WNq4F/sony.png" alt="" />
                    <h4>Sony</h4>
                </Link>
                <Link onClick={() => handleBrandProduct("Dell")}  className="shadow-xl md:mt-0 mt-5 rounded-lg border border-solid hover:bg-[#59b21080] m-2 px-8 py-5 space-y-5" to="/product-ad/Dell">
                    <img className="h-14 mx-auto" src="https://i.ibb.co/B22S5Tx/dell.png" alt="" />
                    <h4>Dell</h4>
                </Link>
                <Link onClick={() => handleBrandProduct("HP")}  className="shadow-xl md:mt-0 mt-5 rounded-lg border border-solid hover:bg-[#59b21080] m-2 px-8 py-5 space-y-5" to="/product-ad/HP">
                    <img className="h-14 mx-auto" src="https://i.ibb.co/X8GvQpn/hp.png" alt="" />
                    <h4>HP</h4>
                </Link>
            </div>
        </div>
    );
};

export default Brands;