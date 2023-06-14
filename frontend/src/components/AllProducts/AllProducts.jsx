import { useState } from "react";
import {
    Select,
    Option,
    Radio,
} from "@material-tailwind/react";

const AllProducts = () => {
    const [product, setProduct] = useState(null);
    const [price, setPrice] = useState(null);

    const handleClick = (e) => {
        e.preventDefault();

        console.log(product, price);
    }

    return (
        <div>
            <div className="py-10 text-center">
                <h1 className="text-xl md:text-2xl font-bold">Our Products</h1>
            </div>

            <div className="text-center md:hidden">
                <button className="px-5 py-2 font-bold text-white bg-[#1E1E1E] rounded-sm">Filter Products</button>
            </div>

            <div className="hidden md:flex justify-around items-center py-3 bg-gray-100">
                <p className="font-semibold">Filter By:</p>
                <form onSubmit={handleClick} className="flex justify-evenly w-3/4">
                    <div className="w-72">
                        <Select label="Product Type" name="product" onChange={(value) => setProduct(value)}>
                            <Option value="clothing & apparel">Clothing & Apparel</Option>
                            <Option value="technology">Technology</Option>
                            <Option value="foods & groceries">Foods & Groceries</Option>
                            <Option value="jewelery">Jewelery</Option>
                            <Option value="household">Household</Option>
                        </Select>
                    </div>
    
                    <div className="flex items-center w-max gap-1" onChange={(e) => setPrice(e.target.value)}>
                        <p>Price:</p>
                        <Radio 
                            id="low" 
                            name="price" 
                            color="blue" 
                            value="low" 
                            label="≤ 1000"  
                        />
                        <Radio 
                            id="medium" 
                            name="price" 
                            color="blue" 
                            value="medium" 
                            label="1000 - 10000" 
                        />
                        <Radio 
                            id="high" 
                            name="price" 
                            color="blue" 
                            value="high" 
                            label="10000 ≥" 
                        />
                    </div>

                    <button type="submit" className="px-5 font-bold text-white bg-[#1E1E1E] rounded-sm">Filter</button>
                </form>
            </div>


        </div>
    );
}
 
export default AllProducts;