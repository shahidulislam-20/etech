import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import './Banner.css';

const Banner = () => {

    const slider = (
        <AwesomeSlider animation="cubeAnimation" bullets={false}>
            <div id="slider1" className='text-center md:space-y-14 space-y-5'>
                <p className='text-white md:text-7xl text-5xl'>save up to <br/><span className='text-custom md:text-8xl text-4xl font-bold'>$400</span></p>
                <p className='text-white md:text-2xl text-xl uppercase'>on selected laptops and desktop pcs and smartphones</p>
                <button className='bg-custom hover:bg-base-content text-xl font-bold text-white px-8 py-3 rounded-md'>Shop Now</button>
            </div>
            <div id="slider1" className='text-center space-y-10'>
                <p className='text-white md:text-7xl text-5xl'>save up to <br/><span className='text-custom md:text-8xl text-4xl font-bold'>$400</span></p>
                <p className='text-white md:text-2xl text-xl uppercase'>on selected laptops and desktop pcs and smartphones</p>
            </div>
            <div id="slider1" className='text-center space-y-10'>
                <p className='text-white md:text-7xl text-5xl'>save up to <br/><span className='text-custom md:text-8xl text-4xl font-bold'>$400</span></p>
                <p className='text-white md:text-2xl text-xl uppercase'>on selected laptops and desktop pcs and smartphones</p>
            </div>  
        </AwesomeSlider>
    );

    return (
        <div>
            {slider}
        </div>
    );
};

export default Banner;