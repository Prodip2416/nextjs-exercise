import fakeData from '../../fakeData/featuredProduct';
import MultiCarousel from '../shared/MultiCarousel';

const FeaturedProductCarousel = () => {
    return (
        <div className="mt-3 mb-4">
              <MultiCarousel totalItem={fakeData}/>
        </div>
    );
}

export default FeaturedProductCarousel;