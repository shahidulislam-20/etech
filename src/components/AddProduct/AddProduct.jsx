import Swal from "sweetalert2";


const AddProduct = () => {

    const handleAddProduct = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const brandName = form.brandName.value;
        const type = form.type.value;
        const price = form.price.value;
        const photo = form.photo.value;
        const rating = form.rating.value;
        const shortDescription = form.short.value;
        console.log(name, brandName, type, price, photo, rating, shortDescription);
        const products = {name, brandName, type, price, rating, photo, shortDescription};

        fetch('https://etech-server-f0bwcw1a9-ishahidul018-gmailcom.vercel.app/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(products)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    position: 'center-center',
                    icon: 'success',
                    title: 'Product has been added',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }

    return (
        <div>
            <div className="max-w-7xl mx-auto">
                <div>
                    <h2 className="font-bold text-4xl uppercase text-center my-10">Add Product</h2>
                </div>
                <form onSubmit={handleAddProduct} className="bg-base-300 rounded-lg lg:px-20 px-5 py-10 mb-20">
                    <div className="grid md:grid-cols-2 grid-cols-1 md:gap-10">
                        <div className="flex flex-col mt-6 md:mt-0">
                            <label className="font-bold mb-2" htmlFor="name">Name</label>
                            <input className="p-2 rounded-md" placeholder="Name" type="text" name="name" id="name" required/>
                        </div>
                        <div className="flex flex-col mt-6 md:mt-0">
                            <label className="font-bold mb-2" htmlFor="brandName">Brand Name</label>
                            <input className="p-2 rounded-md" placeholder="Brand Name" type="text" name="brandName" id="brandName" required/>
                        </div>
                        <div className="flex flex-col mt-6 md:mt-0">
                            <label className="font-bold mb-2" htmlFor="type">Type</label>
                            <input className="p-2 rounded-md" placeholder="Type" type="text" name="type" id="type" required/>
                        </div>
                        <div className="flex flex-col mt-6 md:mt-0">
                            <label className="font-bold mb-2" htmlFor="price">Price</label>
                            <input className="p-2 rounded-md" placeholder="Price" type="text" name="price" id="price" required/>
                        </div>
                        <div className="flex flex-col mt-6 md:mt-0">
                            <label className="font-bold mb-2" htmlFor="photo">Photo URL</label>
                            <input className="p-2 rounded-md" placeholder="Photo URL" type="text" name="photo" id="photo" required/>
                        </div>
                        <div className="flex flex-col mt-6 md:mt-0">
                            <label className="font-bold mb-2" htmlFor="rating">Rating</label>
                            <input className="p-2 rounded-md" placeholder="Rating" type="text" name="rating" id="rating" required/>
                        </div>
                        <div className="flex flex-col mt-6 md:mt-0 md:col-span-2">
                            <label className="font-bold mb-2" htmlFor="short">Short Description</label>
                            <textarea className="p-2 rounded-md" name="shortDescription" placeholder="Short Description" id="short" cols="2" rows="3" required></textarea>
                        </div>
                    </div>
                    <input className="btn w-full bg-custom font-bold text-white mt-10" type="submit" value="Add Product" />
                </form>
            </div>
        </div>
    );
};

export default AddProduct;