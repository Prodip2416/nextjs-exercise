import FeaturedProductCarousel from './FeaturedProductCarousel';
import FeaturedPoster from './FeaturedPoster';
import SectionTitle from '../shared/SectionTitle';

const FeaturedProduct = () => {
    return (
        <div className="container-fluid">
            <SectionTitle sectionTitle = "FEATURED PRODUCTS "/>
            <FeaturedProductCarousel />
            <FeaturedPoster/>
        </div>
    );
}

export default FeaturedProduct;