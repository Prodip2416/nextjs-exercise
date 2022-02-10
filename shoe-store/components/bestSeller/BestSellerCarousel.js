import fakeData from '../../fakeData/bestSeller';
import MultiCarousel from '../shared/MultiCarousel';

const BestSellerCarousel = () => {
    return (
        <div className="mt-3">
            <MultiCarousel totalItem={fakeData} />
        </div>
    );
}

export default BestSellerCarousel;