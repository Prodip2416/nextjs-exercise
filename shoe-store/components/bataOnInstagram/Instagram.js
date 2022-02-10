import Style from '../../styles/Instagram.module.css';
import InstagramCarousel from './InstagramCarousel';
import LogoCarousel from './LogoCarousel';
import SectionTitle from '../shared/SectionTitle';

const Instagram = () => {
    return (
        <div className="container mt-3">
            <SectionTitle sectionTitle="BATA ON INSTAGRAM"/>
            <div className="row mb-2">
                <div className="text-center"><p className={Style.subTitle}>#BATABANGLADESH</p></div>
            </div>
            <div className="mb-5">
                <InstagramCarousel />
            </div>
            <div className="mt-5">
                <LogoCarousel />
            </div>

        </div>
    );
}

export default Instagram;