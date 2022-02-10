import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from 'next/image';

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5,
    },
    desktop: {
        breakpoint: { max: 1024, min: 768 },
        items: 4,
    },
    tablet: {
        breakpoint: { max: 768, min: 468 },
        items: 3,
    },
    mobile: {
        breakpoint: { max: 468, min: 0 },
        items: 1,
    }
};

const LogoCarousel = () => {
    return (
        <div className="text-center">
            <Carousel responsive={responsive} autoPlaySpeed={1000}
                dotListClass="custom-dot-list-style" itemClass="carousel-item-padding-40-px">
                <div className="m-3">
                    <Image src="/instagram/brandLogo/1.png" width={199} height={46} alt="" />
                </div>
                <div className="m-3">
                    <Image src="/instagram/brandLogo/2.png" width={199} height={46} alt="" />
                </div>
                <div className="m-3">
                    <Image src="/instagram/brandLogo/3.png" width={199} height={46} alt="" />
                </div>
                <div className="m-3">
                    <Image src="/instagram/brandLogo/4.png" width={199} height={46} alt="" />
                </div>
                <div className="m-3">
                    <Image src="/instagram/brandLogo/5.png" width={199} height={46} alt="" />
                </div>
                <div className="m-3">
                    <Image src="/instagram/brandLogo/6.png" width={199} height={46} alt="" />
                </div>
                <div className="m-3">
                    <Image src="/instagram/brandLogo/7.png" width={199} height={46} alt="" />
                </div>
                <div className="m-3">
                    <Image src="/instagram/brandLogo/8.png" width={199} height={46} alt="" />
                </div>
                <div className="m-3">
                    <Image src="/instagram/brandLogo/9.png" width={199} height={46} alt="" />
                </div>
            </Carousel>
        </div>
    );
}

export default LogoCarousel;