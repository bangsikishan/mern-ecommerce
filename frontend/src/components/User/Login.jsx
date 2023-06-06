import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="md:w-1/2 mx-auto mt-24">
            <h1 className="text-center text-2xl font-bold py-6">Login</h1>
            <form action="#" method="POST">
                <div className="my-5 w-4/5 md:w-3/4 lg:w-1/2 mx-auto">
                    <label htmlFor="email"><b>Email or Phone Number</b></label>
                    <input 
                        className="signup" 
                        type="text" 
                        name="email" 
                        placeholder="Email or Phone Number" 
                        required 
                    />
                </div>
                <div className="my-2 w-4/5 md:w-3/4 lg:w-1/2 mx-auto">
                    <label htmlFor="password"><b>Password</b></label>
                    <input 
                        className="signup" 
                        type="password" 
                        name="password" 
                        placeholder="Password" 
                        required 
                    />
                </div>
                
                <div className="w-4/5 md:w-3/4 lg:w-1/2 mx-auto">
                    <button type="submit" className="px-5 py-2 font-bold text-white bg-[#1E1E1E] rounded-sm">Login</button>
                </div>
                <p className="w-4/5 md:w-3/4 lg:w-1/2 mt-3 mx-auto font-semibold">
                    Don't have an account? <Link className="font-normal hover:underline" to="/signup">Signup</Link>
                </p>
            </form>
        </div>
    );
}
 
export default Login;