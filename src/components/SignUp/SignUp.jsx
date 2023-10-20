import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";
import { FaGoogle } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {

    const { createUser, updateUserProfile, googleLogin } = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState(null);

    const handleSubmitSignUp = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;


        if(password.length < 6){
            toast("Password dont be less than 6 character");
            return;
        }else if(!/[A-Z]/.test(password)){
            toast("Please use capital letter in password");
            return;
        // eslint-disable-next-line no-useless-escape
        }else if(!/^(?=.*[!@#\$%\^&*()_+=[\]{};:'",<>./?\\|])[a-zA-Z0-9!@#\$%\^&*()_+=[\]{};:'",<>./?\\|]{8,}$/.test(password)){
            toast("Please use special character in password");
            return;
        }

        createUser(email, password)
            .then(result => {
                console.log(result.user)
                updateUserProfile(name, photo)
                    .then(() => {
                        console.log('profile updated')
                    })
                    .catch(error => {
                        console.log(error)
                    })
                setSignUpError('Sign Up Successfully');
                Swal.fire({
                    position: 'center-center',
                    icon: 'success',
                    title: 'Signed Up successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
            .catch(error => {
                console.log(error)
                setSignUpError(error.message)
            })
    }

    const handleGoogle = () => {
        googleLogin()
        .then(result => {
            console.log(result)
            Swal.fire({
                position: 'center-center',
                icon: 'success',
                title: 'Signed Up with Google successfully',
                showConfirmButton: false,
                timer: 1500
            })
        })
        .catch(error => {
            console.log(error)
            setSignUpError(error.message)
        })
    }

    return (
        <div className="max-w-7xl mx-auto py-20">
            <div>
                <div>
                    <h2 className="text-4xl uppercase font-bold text-center mb-10"><span className="text-custom">Sign Up</span> Now!</h2>
                </div>
                <div className="bg-base-300 lg:p-20 p-5 max-w-2xl rounded-lg shadow-2xl mx-auto">
                    <form onSubmit={handleSubmitSignUp} className="space-y-8">
                        <div className="flex flex-col">
                            <label className="font-bold text-xl mb-2" htmlFor="name">Name</label>
                            <input className="p-2 rounded-md" type="text" name="name" id="name" placeholder="Name" />
                        </div>
                        <div className="flex flex-col">
                            <label className="font-bold text-xl mb-2" htmlFor="email">Email</label>
                            <input className="p-2 rounded-md" type="email" name="email" id="email" placeholder="Email" />
                        </div>
                        <div className="flex flex-col">
                            <label className="font-bold text-xl mb-2" htmlFor="password">Password</label>
                            <input className="p-2 rounded-md" type="password" name="password" id="password" placeholder="Password" />
                        </div>
                        <div className="flex flex-col">
                            <label className="font-bold text-xl mb-2" htmlFor="photo">Photo URL</label>
                            <input className="p-2 rounded-md" type="text" name="photo" id="photo" placeholder="Photo URL" />
                        </div>
                        <div>
                            <input className="btn w-full bg-custom font-bold text-white hover:bg-base-content" type="submit" value="Sign Up" />
                            <ToastContainer/>
                        </div>
                    </form>
                    <div className="text-center mb-5">
                        <p className="font-bold text-black my-5">OR</p>
                        <button onClick={handleGoogle} className="btn w-full btn-primary"><FaGoogle></FaGoogle> Sign Up with Google</button>
                    </div>
                    <div className="text-center">
                        <p>Already have an account? Please <Link className="text-custom underline font-bold" to="/login">LogIn</Link></p>
                        <p className="text-red-500">{signUpError}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;