import React, { useContext, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { auth } from '../firebase/firebase.config';
import Lottie from 'lottie-react';
import loginLottie from '../assets/login.json'

const SignIn = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const navigate = useNavigate();
    const location = useLocation()

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const {loginUser, setUser} = useContext(AuthContext)

    const handleSignIn = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        loginUser(email, password)
        .then(result => {
            console.log(result.user);
            navigate('/');
            Swal.fire({
                title: "Congratulations!",
                text: " Login Successful!",
                icon: "success",
            });
        })
        .catch(error => {
            console.log(error.message);
            Swal.fire({
                title: "Sorry!",
                text: "Enter Valid Email and Password",
                icon: "error",
            });
            
        })

    }


    // Login with google 

    const provider = new GoogleAuthProvider();

    const handleGoogleLogin = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                setUser(user);
                navigate('/');

                Swal.fire({
                    title: "Congratulations!",
                    text: "Google Login Successful!",
                    icon: "success",
                });
            })
            .catch((error) => {
                Swal.fire({
                    title: "Error",
                    text: "Google Login Failed: " + error.message,
                    icon: "error",
                });
                setUser(null);
            });
    };

    return (
        <div className='bg-gray-100'>
            

            <div className="w-11/12 mx-auto flex flex-col md:flex-row items-center justify-center min-h-screen pt-4">
                <div className="w-full lg:ml-28 md:w-6/12 lg:w-4/12  bg-white shadow-lg rounded-lg p-8">
                    <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Login</h2>
                    <form onSubmit={handleSignIn}>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Username or Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                            />
                        </div>
                        <div className="mb-4 relative">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <input
                                type={passwordVisible ? "text" : "password"}
                                id="password"
                                placeholder="Enter your password"
                                className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                            />
                            <button
                                type="button"
                                className="absolute inset-y-0 right-0 mt-6 flex items-center px-3 text-gray-600"
                                onClick={togglePasswordVisibility}
                            >
                                {passwordVisible ? "🙈" : "👁️"}
                            </button>
                        </div>
                        <div className="flex items-center justify-between mb-6">
                            <label className="flex items-center">
                                <input
                                    type="checkbox"
                                    className="form-checkbox text-orange-500"
                                />
                                <span className="ml-2 text-sm text-gray-600">Remember Me</span>
                            </label>
                            <a href="#" className="text-sm text-orange-500 hover:underline">
                                Forgot Password
                            </a>
                        </div>
                        <button
                            type="submit"
                            className="w-full py-2 px-4 bg-[#0A14F5] text-white hover:bg-[#000a50]  font-semibold rounded-lg  focus:outline-none focus:ring-2 focus:ring-orange-500"
                        >
                            Login
                        </button>
                        <p className="text-center text-sm text-gray-600 mt-4">
                            Don't have an account?{" "}
                            <Link to='/auth/register' className="text-orange-500 hover:underline">
                                Create an account
                            </Link>
                        </p>
                        <div className="flex items-center my-4">
                            <div className="border-t border-gray-300 flex-grow"></div>
                            <span className="mx-2 text-sm text-gray-600">Or</span>
                            <div className="border-t border-gray-300 flex-grow"></div>
                        </div>
                        <button
                            onClick={handleGoogleLogin}
                            type="button"
                            className="w-full py-2 px-4 mb-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                        >
                            Continue with Google
                        </button>
                        <button
                            type="button"
                            className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            Continue with Facebook
                        </button>
                    </form>
                </div>

                <div className=" md:w-6/12 lg:w-8/12 flex justify-center">
                    <div className='w-full md:w-[400px] md:h-[400px] '>
                        <Lottie animationData={loginLottie}></Lottie>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;