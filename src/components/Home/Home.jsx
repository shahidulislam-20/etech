import { useContext } from "react";
import Banner from "../Banner/Banner";
import Brands from "../Brands/Brands";
import ChooseUs from "../ChooseUs/ChooseUs";
import Featured from "../Features/Featured";
import { AuthContext } from "../AuthProvider/AuthProvider";



const Home = () => {

    const {darkMode} = useContext(AuthContext);

    return (
        <div style={darkMode?{background: 'white'}:{background: '#202124', color: 'white'}} className="font-poppins">
            <Banner></Banner>
            <Brands></Brands>
            <Featured></Featured>
            <ChooseUs></ChooseUs>
        </div>
    );
};

export default Home;