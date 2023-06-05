import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="w-1/2 mx-auto mt-24">
            <h1 className="text-center text-2xl font-bold py-6">Login</h1>
            <form action="#" method="POST">
                <div className="my-5 w-1/2 mx-auto">
                    <label htmlFor="email"><b>Email or Phone Number</b></label>
                    <input 
                        className="block border border-gray-400 rounded-sm py-2 px-3 my-1 w-full" 
                        type="text" 
                        name="email" 
                        placeholder="Email or Phone Number" 
                        required 
                    />
                </div>
                <div className="my-2 w-1/2 mx-auto">
                    <label htmlFor="password"><b>Password</b></label>
                    <input 
                        className="block border border-gray-400 rounded-sm py-2 px-3 my-1 w-full" 
                        type="password" 
                        name="password" 
                        placeholder="Password" 
                        required 
                    />
                </div>
                <div className="w-1/2 mx-auto">
                    <button type="submit" className="px-5 py-2 font-bold text-white bg-[#1E1E1E] rounded-sm">Login</button>
                </div>
                <p className="mt-3 mx-auto font-semibold w-1/2">
                    Don't have an account? <Link className="font-normal hover:underline" to="/signup">Signup</Link>
                </p>
            </form>
        </div>
    );
}
 
export default Login;