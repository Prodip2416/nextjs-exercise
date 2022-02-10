import React,{useContext} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
import Style from '../../styles/HeaderCarousel.module.css';
import { WindowSizeContext } from '../../pages/_app';

const HeaderCarousel = () => {
    const [size, setSize] = useContext(WindowSizeContext);
    return (
        <div className={`${size.width <= 1024 ? 'container-fluid' : ''} ${size.width <= 768 ? Style.margin : ""}`}>
            <Carousel autoPlay={true} interval={4000} infiniteLoop={true} showStatus={false} showThumbs={false}>
                <div className="">
                    <Image className="" src="/header/headerCarousel1.jpg" width={1380} height={550} layout='responsive' alt="" />
                </div>
                <div className="">
                    <Image className="" src="/header/headerCarousel2.jpg" width={1380} height={550} layout='responsive' alt="" />
                </div>
                <div className="">
                    <Image className="" src="/header/headerCarousel4.png" width={1380} height={550} layout='responsive' alt="" />
                </div>
            </Carousel>
        </div>
    );
}

export default HeaderCarousel;