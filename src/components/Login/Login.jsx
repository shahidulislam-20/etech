import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { FaGoogle } from "react-icons/fa";

const Login = () => {

    const location = useLocation();
    const navigate = useNavigate();

    const { loginUser, googleLogin, darkMode } = useContext(AuthContext);
    const [loginError, setLoginError] = useState(null);

    const handleSubmitLogin = e => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        loginUser(email, password)
            .then(result => {
                console.log(result)
                setLoginError('Successfully logged in')
                Swal.fire({
                    position: 'center-center',
                    icon: 'success',
                    title: 'Logged in successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
                {
                    location.state ? navigate(`${location.state}`) : navigate("/")
                }
            })
            .catch(error => {
                console.log(error)
                setLoginError(error.message)
            })
        console.log(email, password);
    }

    const handleGoogle = () => {
        googleLogin()
            .then(result => {
                console.log(result)
                Swal.fire({
                    position: 'center-center',
                    icon: 'success',
                    title: 'Logged in with Google successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
                {
                    location.state ? navigate(`${location.state}`) : navigate("/")
                }
            })
            .catch(error => {
                console.log(error.message)
                setLoginError(error.message)
            })
    }

    return (
        <div style={darkMode?{background: 'white'}:{background: '#202124', color: 'white', border: 'none'}}>
            <div className="max-w-7xl mx-auto py-20">
                <div>
                    <h2 className="text-4xl uppercase font-bold text-center mb-10"><span className="text-custom">Log In</span> Now!</h2>
                </div>
                <div 
                style={darkMode?{background: '#D4D4D4'}:{background: '#333', color: 'white', border: 'none'}}
                className="lg:p-20 p-5 bg-base-300 max-w-2xl rounded-lg shadow-lg mx-auto">
                    <form onSubmit={handleSubmitLogin} className="space-y-8">
                        <div className="flex flex-col">
                            <label className="font-bold text-xl mb-2" htmlFor="email">Email</label>
                            <input 
                            style={darkMode?{background: 'white'}:{background: '#202124', color: 'white', border: 'none'}}
                            className="p-2 rounded-md" type="email" name="email" id="email" placeholder="Email" />
                        </div>
                        <div className="flex flex-col">
                            <label className="font-bold text-xl mb-2" htmlFor="password">Password</label>
                            <input 
                            style={darkMode?{background: 'white'}:{background: '#202124', color: 'white', border: 'none'}}
                            className="p-2 rounded-md" type="password" name="password" id="password" placeholder="Password" />
                        </div>
                        <div>
                            <input className="btn w-full bg-custom font-bold text-white hover:bg-base-content" type="submit" value="Log In" />
                        </div>
                    </form>
                    <div className="text-center mb-5">
                        <p className="font-bold text-black my-5">OR</p>
                        <button onClick={handleGoogle} className="btn w-full btn-primary"><FaGoogle></FaGoogle> LogIn with Google</button>
                    </div>
                    <div className="text-center">
                        <p>New Here? Please <Link className="text-custom underline font-bold" to="/sign-up">Sign Up</Link></p>
                        <p className="text-red-500">{loginError}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;