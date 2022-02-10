import RecentPostCarousel from './RecentPostCarousel';
import RecentPostCarouselSmall from './RecentPostCarouselSmall';
import {useContext } from "react";
import SectionTitle from '../shared/SectionTitle';
import { WindowSizeContext } from '../../pages/_app';

const RecentPost = () => {
    const [size, setSize] = useContext(WindowSizeContext);
    return ( 
        <div className="container">
            <SectionTitle sectionTitle="RECENT POSTS"/>
            <div className="mb-3">
                {
                    size.width <= 991 ?  <RecentPostCarouselSmall size={size} /> :  <RecentPostCarousel size={size} />
                }                    
            </div>
        </div>
     );
}
 
export default RecentPost;