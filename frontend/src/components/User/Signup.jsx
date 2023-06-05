import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <div className="mt-24">
            <h1 className="text-center text-2xl font-bold py-6">Signup</h1>
            <form action="#" method="POST" className="grid grid-cols-2 gap-5 px-16">
                <div>
                    <label htmlFor="name"><b>Name</b></label>
                    <input 
                        className="block border border-gray-400 rounded-sm py-2 px-3 my-1 w-full" 
                        type="text" 
                        name="name" 
                        placeholder="Name" 
                        required 
                    />
                </div>
                <div>
                    <label htmlFor="email"><b>Email</b></label>
                    <input 
                        className="block border border-gray-400 rounded-sm py-2 px-3 my-1 w-full" 
                        type="text" 
                        name="email" 
                        placeholder="Email" 
                        required 
                    />
                </div>
                <div>
                    <label htmlFor="phone"><b>Phone Number</b></label>
                    <input 
                        className="block border border-gray-400 rounded-sm py-2 px-3 my-1 w-full" 
                        type="text"
                        name="phone" 
                        placeholder="Phone Number" 
                        required 
                    />
                </div>
                <div>
                    <label htmlFor="password"><b>Password</b></label>
                    <input 
                        className="block border border-gray-400 rounded-sm py-2 px-3 my-1 w-full" 
                        type="password" 
                        name="password" 
                        placeholder="Password" 
                        required 
                    />
                </div>
                <div>
                    <label htmlFor="confirm_password"><b>Confirm Password</b></label>
                    <input 
                        className="block border border-gray-400 rounded-sm py-2 px-3 my-1 w-full" 
                        type="password" 
                        name="confirm_password" 
                        placeholder="Confirm Password" 
                        required 
                    />
                </div>
                
                <div className="col-span-2 text-center">
                    <button type="submit" className="px-5 py-2 font-bold text-white bg-[#1E1E1E] rounded-sm">Signup</button>
                </div>
                <p className="col-span-2 font-semibold text-center">
                    Have an account? <Link className="font-normal hover:underline" to="/login">Login</Link>
                </p>
            </form>
        </div>
    );
}
 
export default Signup;