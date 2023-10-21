import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";


const ChooseUs = () => {

    const {darkMode} = useContext(AuthContext);

    return (
        <div 
        style={darkMode?{background: '#ccc'}:{background: '#333', color: 'white', border: 'none'}}
        className="mt-20 bg-base-300 py-20">
            <div className="text-center">
                <h2 className="text-4xl font-bold mb-8"><span className="text-custom">Why</span> People Choose Us</h2>
            </div>
            <div className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 items-center max-w-7xl mx-auto text-xl text-center font-semibold">
                <div 
                style={darkMode?{background: 'white'}:{background: '#0D1117', color: 'white', border: 'none'}}
                className="shadow-xl rounded-lg border-2 bg-white m-2 px-8 py-5 space-y-5" to="/">
                    <img className="h-14 mx-auto" src="https://i.ibb.co/jRS8kGC/01.png" alt="" />
                    <h4>Fast & Secure Delivery</h4>
                </div>
                <div 
                style={darkMode?{background: 'white'}:{background: '#0D1117', color: 'white', border: 'none'}}
                className="shadow-xl rounded-lg border-2 bg-white m-2 px-8 py-5 space-y-5" to="/">
                    <img className="h-14 mx-auto" src="https://i.ibb.co/2MBGjx2/02.png" alt="" />
                    <h4>Money Back Guarantee</h4>
                </div>
                <div 
                style={darkMode?{background: 'white'}:{background: '#0D1117', color: 'white', border: 'none'}}
                className="shadow-xl rounded-lg border-2 bg-white m-2 px-8 py-5 space-y-5" to="/">
                    <img className="h-14 mx-auto" src="https://i.ibb.co/m67JwvC/03.png" alt="" />
                    <h4>24 Hour Return Policy</h4>
                </div>
                <div 
                style={darkMode?{background: 'white'}:{background: '#0D1117', color: 'white', border: 'none'}}
                className="shadow-xl rounded-lg border-2 bg-white m-2 px-8 py-5 space-y-5" to="/">
                    <img className="h-14 mx-auto" src="https://i.ibb.co/2Z9DFNh/04.png" alt="" />
                    <h4>Pro Quality Support</h4>
                </div>
                <div 
                style={darkMode?{background: 'white'}:{background: '#0D1117', color: 'white', border: 'none'}}
                className="shadow-xl rounded-lg border-2 bg-white m-2 px-8 py-5 space-y-5" to="/">
                    <img className="h-14 mx-auto" src="https://i.ibb.co/HXbdqFc/05.png" alt="" />
                    <h4>Next Level Pro Quality</h4>
                </div>
            </div>
        </div>
    );
};

export default ChooseUs;