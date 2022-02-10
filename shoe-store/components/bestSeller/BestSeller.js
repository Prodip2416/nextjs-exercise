import BestSellerCarousel from './BestSellerCarousel';
import SectionTitle from '../shared/SectionTitle';

const BestSeller = () => {
    return (
        <div className="container-fluid mt-5">
            <SectionTitle sectionTitle="BEST SELLER" />
            <BestSellerCarousel />
        </div>
    );
}

export default BestSeller;