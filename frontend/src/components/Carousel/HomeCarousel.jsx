import { Carousel, Typography } from "@material-tailwind/react";

import image1 from '../../assets/img/carousel_1.jpg';
import image2 from '../../assets/img/carousel_2.jpg';
import image3 from '../../assets/img/carousel_3.jpg';

const HomeCarousel = () => {
    return (
        <Carousel className="hidden sm:inline-flex">
            <div className="relative h-full w-full">
                <img
                    src={image1}
                    alt="image 1"
                    className="h-[450px] w-full object-cover"
                />
                <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
                    <div className="w-3/4 text-center md:w-2/4">
                        <Typography
                            variant="h2"
                            color="white"
                            className="mb-4"
                        >
                            Hundreds of items to shop
                        </Typography>
                        <Typography
                            variant="lead"
                            color="white"
                            className="mb-12 opacity-80"
                        >
                            Shop your needs. It's all here.
                        </Typography>
                    </div>
                </div>
            </div>
            <div className="relative h-full w-full">
                <img
                    src={image2}
                    alt="image 2"
                    className="h-[450px] w-full object-cover"
                />
                <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
                    <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
                        <Typography
                            variant="h2"
                            color="white"
                            className="mb-4"
                        >
                            From your comfort zone
                        </Typography>
                        <Typography
                            variant="lead"
                            color="white"
                            className="mb-12 opacity-80"
                        >
                            Shop whenever you want, from wherever you want.
                        </Typography>
                    </div>
                </div>
            </div>
            <div className="relative h-full w-full">
                <img
                    src={image3}
                    alt="image 3"
                    className="h-[450px] w-full object-cover"
                />
                <div className="absolute inset-0 grid h-full w-full items-end bg-black/75">
                    <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
                        <Typography
                            variant="h2"
                            color="white"
                            className="mb-4"
                        >
                            Open 24/7
                        </Typography>
                        <Typography
                            variant="lead"
                            color="white"
                            className="mb-32 md:mb-12 opacity-80"
                        >
                            As an online platform, you can always shop with us.
                        </Typography>
                    </div>
                </div>
            </div>
        </Carousel>
    );
}

export default HomeCarousel;