import { Carousel } from 'react-responsive-carousel';

import image1 from '../../assets/img/carousel_1.jpg';
import image2 from '../../assets/img/carousel_2.jpg';

const Carousel1 = () => {
    return (
        <Carousel showArrows={true}>
            <div>
                <img src={image1} className="w-full h-auto" />
                <p className="legend">Legend 1</p>
            </div>
            <div>
                <img src={image2} />
                <p className="legend">Legend 2</p>
            </div>
        </Carousel>
    );
}
 
export default Carousel1;