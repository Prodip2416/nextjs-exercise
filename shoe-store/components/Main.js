import Header from './header/Header';
import NewProduct from './newProduct/NewProduct';
import PickedCollection from './pickedCollection/PickedCollection';
import FeaturedProduct from './featuredProduct/FeaturedProduct';
import BestSeller from './bestSeller/BestSeller';
import Favourites from './favourites/Favourites';
import RecentPost from './recentPost/RecentPost';
import Instagram from './bataOnInstagram/Instagram';
import Footer from './footer/Footer';
import BackToTop from './shared/BackToTop';

const Main = () => {
    return (
        <>
            <Header />
            <NewProduct />
            <PickedCollection />
            <FeaturedProduct />
            <BestSeller />
            <Favourites />
            <RecentPost />
            <Instagram />
            <Footer />
            <BackToTop />
        </>
    );
}

export default Main;