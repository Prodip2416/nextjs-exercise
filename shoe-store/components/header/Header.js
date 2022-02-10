import HeaderBar from './HeaderBar';
import MegaMenu from './MegaMenu';
import HeaderCarousel from './HeaderCarousel';
import HeaderCard from './HeaderCard';

const Header = () => {
    return (
        <>
            <HeaderBar />
            <MegaMenu  />
            <HeaderCarousel />
            <HeaderCard/>
        </>
    );
}

export default Header;