import HomeCarousel from "../Carousel/HomeCarousel";
import SingleProduct from "../SingleProduct/SingleProduct";
import ReviewCard from "../Review/ReviewCard";

const Home = () => {
    return (
        <div>
            <HomeCarousel />

            <div className="py-10">
                <h1 className="font-bold text-2xl text-center">Latest Products</h1>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-4 my-8">
                    <SingleProduct />
                    <SingleProduct />
                    <SingleProduct />
                </div>
            </div>

            <div className="bg-gray-100 py-10">
                <h1 className="font-bold text-2xl text-center">Reviews</h1>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-4 my-8 px-3">
                    <ReviewCard />
                    <ReviewCard />
                    <ReviewCard />
                </div>
            </div>
        </div>
    );
}
 
export default Home;