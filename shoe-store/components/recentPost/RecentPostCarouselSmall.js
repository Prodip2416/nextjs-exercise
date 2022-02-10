import Style from '../../styles/RecentPostCarouselSmall.module.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';

const RecentPostCarouselSmall = ({size}) => {
    return (
        <Carousel autoPlay={true} interval={4000} infiniteLoop={true} showStatus={false} showThumbs={false}>
            <div className={`${Style.position} ${"mb-3"}`}>
                <div>
                    <Image className={`${Style.img}`} src="/recentPost/1.png" width={380} height={380}  layout='responsive' alt="" />
                </div>
                <div>
                    <h3 className={`${size.width > 768 ? Style.superSaversLarge : Style.superSavers}`}>
                        <p className={`${Style.subTitle}`}>By Bata Bangladesh on February 01, 2021</p>
                        <span>Bata continues to focus on Social {size.width < 326 ? '': <br />}  Responsibility</span></h3>
                </div>
                <p className={`${Style.des} ${"mt-5"}`}><span>Bata Bangladesh recently donated meals towards 5,600 underprivileged children in collaboration with UCEP Bangladesh. On behalf of UCEP Bangladesh, Executive Director Ms. Tahsinah Ahmed thanked Bata Bangladesh for the noble initiative. Addressing to the...</span></p>
                <div className="text-center">
                    <p className={`${Style.shopNow}`}><span>READ MORE</span></p>
                </div>
            </div>  

            <div className={`${Style.position} ${"mb-3"}`}>
                <div>
                    <Image className={`${Style.img}`} src="/recentPost/2.jpg" width={380} height={380}  layout='responsive' alt="" />
                </div>
                <div>
                    <h3 className={`${size.width > 768 ? Style.superSaversLarge : Style.superSavers}`}>
                        <p className={`${Style.subTitle}`}>By Bata Bangladesh on June 12, 2019</p>
                        <span>What Do Your Shoes Say About You?</span></h3>
                </div>
                <p className={`${Style.des} ${"mt-5"}`}><span>The Casual shoes of Bata ensure comfort & style & are always on-trend. The widest range of these casuals make free-styles easy to wear without compromising on sleek & contemporary design. Bata Casual Shoes have the widest variety with panache.</span></p>
                <div className="text-center">
                    <p className={`${Style.shopNow}`}><span>READ MORE</span></p>
                </div>
            </div>  

            <div className={`${Style.position} ${"mb-3"}`}>
                <div>
                    <Image className={`${Style.img}`} src="/recentPost/3.jpg" width={380} height={380}  layout='responsive' alt="" />
                </div>
                <div>
                    <h3 className={`${size.width > 768 ? Style.superSaversLarge : Style.superSavers}`}>
                        <p className={`${Style.subTitle}`}>By Bata Bangladesh on April 23, 2019</p>
                        <span>Bata Fashion Weekend 2019</span></h3>
                </div>
                <p className={`${Style.des} ${"mt-5"}`}><span>A banging catwalk show, an inspiring shoe exhibition, a nostalgic pop-up museum, and the finale of the Bata Young Designers’ Challenge—the Bata Fashion Weekend 2019 at the historic Zofin Palace in Prague,...</span></p>
                <div className="text-center">
                    <p className={`${Style.shopNow}`}><span>READ MORE</span></p>
                </div>
            </div>                  

            <div className={`${Style.position} ${"mb-3"}`}>
                <div>
                    <Image className={`${Style.img}`} src="/recentPost/4.jpg" width={380} height={380}  layout='responsive' alt="" />
                </div>
                <div>
                    <h3 className={`${size.width > 768 ? Style.superSaversLarge : Style.superSavers}`}>
                        <p className={`${Style.subTitle}`}>By Bata Bangladesh on April 23, 2019</p>
                        <span>Bata to Walk its Talk at Fashion Extravaganza</span></h3>
                </div>
                <p className={`${Style.des} ${"mt-5"}`}><span>Bata Fashion Weekend 2019 is taking in place in Prague, the Czech Republic on 13-15 April. With a theme of ‘The Evolution of Style’, the event will see catwalk shows, the finale of the...</span></p>
                <div className="text-center">
                    <p className={`${Style.shopNow}`}><span>READ MORE</span></p>
                </div>
            </div>                  
        </Carousel>
    );
}

export default RecentPostCarouselSmall;