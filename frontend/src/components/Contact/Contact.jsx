const Contact = () => {
    return (
        <div className="md:w-1/2 mx-auto mt-24">
            <h1 className="text-center text-2xl font-bold py-6">Contact Us</h1>
            <form action="#" method="POST">
                <div className="my-5 w-4/5 md:w-3/4 lg:w-1/2 mx-auto">
                    <label htmlFor="text"><b>Name</b></label>
                    <input 
                        className="signup" 
                        type="text" 
                        name="name" 
                        placeholder="Name" 
                        required 
                    />
                </div>
                <div className="my-5 w-4/5 md:w-3/4 lg:w-1/2 mx-auto">
                    <label htmlFor="email"><b>Email</b></label>
                    <input 
                        className="signup" 
                        type="email" 
                        name="email" 
                        placeholder="Email" 
                        required 
                    />
                </div>
                <div className="my-2 w-4/5 md:w-3/4 lg:w-1/2 mx-auto">
                    <label htmlFor="message"><b>Message</b></label>
                    <textarea 
                        className="signup" 
                        type="text" 
                        name="message" 
                        placeholder="Message" 
                        required 
                    ></textarea>
                </div>
                
                <div className="w-4/5 md:w-3/4 lg:w-1/2 mx-auto">
                    <button type="submit" className="px-5 py-2 font-bold text-white bg-[#1E1E1E] rounded-sm">Send Message</button>
                </div>
            </form>
        </div>
    );
}
 
export default Contact;