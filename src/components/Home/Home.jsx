import Banner from "../Banner/Banner";
import Brands from "../Brands/Brands";
import ChooseUs from "../ChooseUs/ChooseUs";
import Featured from "../Features/Featured";



const Home = () => {
    return (
        <div className="font-poppins">
            <Banner></Banner>
            <Brands></Brands>
            <Featured></Featured>
            <ChooseUs></ChooseUs>
        </div>
    );
};

export default Home;