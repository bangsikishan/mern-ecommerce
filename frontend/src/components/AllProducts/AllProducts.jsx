import { useState } from "react";
import {
    Select,
    Option,
    Radio,
    Drawer,
    Button,
    Typography,
    IconButton,
    Input,
    Textarea,
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import SingleProduct from '../SingleProduct/SingleProduct';

const AllProducts = () => {
    const [product, setProduct] = useState(null);
    const [price, setPrice] = useState(null);

    const [open, setOpen] = useState(false);
    const openDrawer = () => setOpen(true);
    const closeDrawer = () => setOpen(false);

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
                <button onClick={openDrawer} className="px-5 py-2 font-bold text-white bg-[#1E1E1E] rounded-sm">Filter Products</button>
            </div>

            <Drawer open={open} onClose={closeDrawer} className="md:hidden">
                <div className="mb-2 flex items-center justify-between p-4">
                    <Typography variant="h5" color="blue-gray">
                        Filter By
                    </Typography>
                    <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
                        <XMarkIcon strokeWidth={2} className="h-5 w-5" />
                    </IconButton>
                </div>
                <form onSubmit={handleClick} className="flex flex-col px-6 space-y-6">
                    <div>
                        <Select label="Product Type" name="product" onChange={(value) => setProduct(value)}>
                            <Option value="clothing & apparel">Clothing & Apparel</Option>
                            <Option value="technology">Technology</Option>
                            <Option value="foods & groceries">Foods & Groceries</Option>
                            <Option value="jewelery">Jewelery</Option>
                            <Option value="household">Household</Option>
                        </Select>
                    </div>
    
                    <div className="flex flex-col" onChange={(e) => setPrice(e.target.value)}>
                        <p className="font-semibold">Price:</p>
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

                    <button type="submit" className="px-5 py-2 font-bold text-white bg-[#1E1E1E] rounded-sm">Filter</button>
                </form>
            </Drawer>

            <div className="hidden md:flex md:flex-col xl:flex-row justify-around items-center py-3 bg-gray-100">
                <p className="font-semibold md:mb-5 xl:mb-0">Filter By:</p>
                <form onSubmit={handleClick} className="flex md:flex-col md:items-center md:space-y-4 xl:flex-row xl:justify-evenly xl:space-y-0 w-3/4">
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

                    <button type="submit" className="px-5 md:py-3 font-bold text-white bg-[#1E1E1E] rounded-sm">Filter</button>
                </form>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-center my-10">
                <SingleProduct />
                <SingleProduct />
                <SingleProduct />
                <SingleProduct />
                <SingleProduct />
            </div>
        </div>
    );
}
 
export default AllProducts;