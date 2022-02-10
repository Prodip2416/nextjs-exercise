import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from 'next/image';
import { useContext } from "react";
import { WindowSizeContext } from '../../pages/_app';

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5,
    },
    desktop: {
        breakpoint: { max: 1024, min: 768 },
        items: 3,
    },
    tablet: {
        breakpoint: { max: 768, min: 425 },
        items: 3,
    },
    mobile: {
        breakpoint: { max: 425, min: 0 },
        items: 2,
    }
};

const InstagramCarousel = () => {
    const [size, setSize] = useContext(WindowSizeContext);
    let isDotShow = true;
    let isArrowShow = false;
    if (size.width > 1024) { isDotShow = false; isArrowShow = true; }
    return (
        <div className="text-center">
            <Carousel responsive={responsive} autoPlaySpeed={1000} showDots={isDotShow} arrows={isArrowShow}
                dotListClass="custom-dot-list-style" itemClass="carousel-item-padding-40-px">
                <div className="m-2 mb-5">
                    <Image src="/instagram/1.jpg" width={237} height={158} layout='responsive' alt="" />
                </div>
                <div className="m-2">
                    <Image src="/instagram/2.jpg" width={237} height={158} layout='responsive' alt="" />
                </div>
                <div className="m-2">
                    <Image src="/instagram/3.jpg" width={237} height={158} layout='responsive' alt="" />
                </div>
                <div className="m-2">
                    <Image src="/instagram/4.jpg" width={237} height={158} layout='responsive' alt="" />
                </div>
                <div className="m-2">
                    <Image src="/instagram/5.jpg" width={237} height={158} layout='responsive' alt="" />
                </div>
                <div className="m-2">
                    <Image src="/instagram/6.jpg" width={237} height={158} layout='responsive' alt="" />
                </div>
            </Carousel>
        </div>
    );
}

export default InstagramCarousel;