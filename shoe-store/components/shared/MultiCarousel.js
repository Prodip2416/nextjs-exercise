import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MultiCarouselItem from './MultiCarouselItem';
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
        breakpoint: { max: 768, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    }
};

const MultiCarousel = ({ totalItem }) => {
    const [size, setSize] = useContext(WindowSizeContext);
    let isDotShow = true;
    let isArrowShow = false;
    if (size.width > 1024) { isDotShow = false; isArrowShow = true; }
    return (
        <Carousel responsive={responsive} centerMode={true} focusOnSelect={true} showDots={isDotShow} arrows={isArrowShow} >
            {
                totalItem.map(item => <MultiCarouselItem key={item.id} product={item} />)
            }
        </Carousel>
    );
}

export default MultiCarousel;