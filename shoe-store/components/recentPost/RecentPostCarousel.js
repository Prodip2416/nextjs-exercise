import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
import Style from '../../styles/RecentPostCarousel.module.css';

const RecentPostCarousel = ({ size }) => {

    return (
        <Carousel autoPlay={true} interval={4000} infiniteLoop={true} showStatus={false} showThumbs={false}>
            <div className="row mb-5">
                <div className={`${Style.position} ${"col-md-6 text-center"}`}>
                    <div className={Style.boxShadow}>
                        <div>
                            <Image className={`${Style.img}`} src="/recentPost/1.png" width={600} height={430} alt="" />
                        </div>
                        <div>
                            <h3 className={`${size.width > 1199 ? Style.recentPostLarge : Style.recentPost}`}> <p className={Style.subTitle}>By Bata Bangladesh on February 01, 2021</p>Bata continues to focus on Social <br /> Responsibility</h3>
                        </div>
                        <p className={`${Style.des} ${"mt-5"}`}><span>Bata Bangladesh recently donated meals towards 5,600 underprivileged children in collaboration with UCEP Bangladesh. On behalf of UCEP Bangladesh, Executive Director Ms. Tahsinah Ahmed thanked Bata Bangladesh for the noble initiative. Addressing to the...</span></p>
                        <div className="text-center">
                            <p className={`${Style.shopNow}`}><span>READ MORE</span></p>
                        </div>
                    </div>
                </div>

                <div className={`${Style.position} ${"col-md-6 text-center"}`}>
                    <div className={Style.boxShadow}>
                        <Image className={`${Style.img}`} src="/recentPost/2.jpg" width={600} height={430} alt="" />
                        <div>
                            <h3 className={`${size.width > 1199 ? Style.recentPostLarge : Style.recentPost}`}> <p className={Style.subTitle}>By Bata Bangladesh on June 12, 2019</p>What Do Your Shoes Say About You?</h3>
                        </div>
                        <p className={`${Style.des} ${"mt-5"}`}><span>The Casual shoes of Bata ensure comfort & style & are always on-trend. The widest range of these casuals make free-styles easy to wear without compromising on sleek & contemporary design. Bata Casual Shoes have the widest variety with panache.</span></p>
                        <div className="text-center">
                            <p className={`${Style.shopNow}`}><span>READ MORE</span></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className={`${Style.position} ${"col-md-6 text-center"} $`}>
                    <div className={Style.boxShadow}>
                        <Image className={`${Style.img}`} src="/recentPost/2.jpg" width={600} height={430} alt="" />
                        <div>
                            <h3 className={`${size.width > 1199 ? Style.recentPostLarge : Style.recentPost}`}> <p className={Style.subTitle}>By Bata Bangladesh on June 12, 2019</p>What Do Your Shoes Say About You?</h3>
                        </div>
                        <p className={`${Style.des} ${"mt-5"}`}><span>The Casual shoes of Bata ensure comfort & style & are always on-trend. The widest range of these casuals make free-styles easy to wear without compromising on sleek & contemporary design. Bata Casual Shoes have the widest variety with panache.</span></p>
                        <div className="text-center">
                            <p className={`${Style.shopNow}`}><span>READ MORE</span></p>
                        </div>
                    </div>
                </div>

                <div className={`${Style.position} ${"col-md-6 text-center"}`}>
                    <div className={Style.boxShadow}>
                        <Image className={`${Style.img}`} src="/recentPost/3.jpg" width={600} height={430} alt="" />
                        <div>
                            <h3 className={`${size.width > 1199 ? Style.recentPostLarge : Style.recentPost}`}> <p className={Style.subTitle}>By Bata Bangladesh on April 23, 2019</p>Bata Fashion Weekend 2019</h3>
                        </div>
                        <p className={`${Style.des} ${"mt-5"}`}><span>A banging catwalk show, an inspiring shoe exhibition, a nostalgic pop-up museum, and the finale of the Bata Young Designers’ Challenge—the Bata Fashion Weekend 2019 at the historic Zofin Palace in Prague,...</span></p>
                        <div className="text-center">
                            <p className={`${Style.shopNow}`}><span>READ MORE</span></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className={`${Style.position} ${"col-md-6 text-center"}`}>
                    <div className={Style.boxShadow}>
                        <Image className={`${Style.img}`} src="/recentPost/3.jpg" width={600} height={430} alt="" />
                        <div>
                            <h3 className={`${size.width > 1199 ? Style.recentPostLarge : Style.recentPost}`}> <p className={Style.subTitle}>By Bata Bangladesh on April 23, 2019</p>Bata Fashion Weekend 2019</h3>
                        </div>
                        <p className={`${Style.des} ${"mt-5"}`}><span>A banging catwalk show, an inspiring shoe exhibition, a nostalgic pop-up museum, and the finale of the Bata Young Designers’ Challenge—the Bata Fashion Weekend 2019 at the historic Zofin Palace in Prague,...</span></p>
                        <div className="text-center">
                            <p className={`${Style.shopNow}`}><span>READ MORE</span></p>
                        </div>
                    </div>
                </div>

                <div className={`${Style.position} ${"col-md-6 text-center"}`}>
                    <div className={Style.boxShadow}>
                        <Image className={`${Style.img}`} src="/recentPost/4.jpg" width={600} height={430} alt="" />
                        <div>
                            <h3 className={`${size.width > 1199 ? Style.recentPostLarge : Style.recentPost}`}> <p className={Style.subTitle}>By Bata Bangladesh on April 23, 2019</p>Bata to Walk its Talk at Fashion Extravaganza</h3>
                        </div>
                        <p className={`${Style.des} ${"mt-5"}`}><span> Bata Fashion Weekend 2019 is taking in place in Prague, the Czech Republic on 13-15 April. With a theme of ‘The Evolution of Style’, the event will see catwalk shows, the finale of the...</span></p>
                        <div className="text-center">
                            <p className={`${Style.shopNow}`}><span>READ MORE</span></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className={`${Style.position} ${"col-md-6 text-center"}`}>
                    <div className={Style.boxShadow}>
                        <Image className={`${Style.img}`} src="/recentPost/4.jpg" width={600} height={430} alt="" />
                        <div>
                            <h3 className={`${size.width > 1199 ? Style.recentPostLarge : Style.recentPost}`}> <p className={Style.subTitle}>By Bata Bangladesh on April 23, 2019</p>Bata to Walk its Talk at Fashion Extravaganza</h3>
                        </div>
                        <p className={`${Style.des} ${"mt-5"}`}><span> Bata Fashion Weekend 2019 is taking in place in Prague, the Czech Republic on 13-15 April. With a theme of ‘The Evolution of Style’, the event will see catwalk shows, the finale of the...</span></p>
                        <div className="text-center">
                            <p className={`${Style.shopNow}`}><span>READ MORE</span></p>
                        </div>
                    </div>
                </div>

                <div className={`${Style.position} ${"col-md-6 text-center"} ${Style.boxShadow}`}>
                    <div className={Style.boxShadow}>
                        <div>
                            <Image className={`${Style.img}`} src="/recentPost/1.png" width={600} height={430} alt="" />
                        </div>
                        <div>
                            <h3 className={`${size.width > 1199 ? Style.recentPostLarge : Style.recentPost}`}> <p className={Style.subTitle}>By Bata Bangladesh on February 01, 2021</p>Bata continues to focus on Social <br /> Responsibility</h3>
                        </div>
                        <p className={`${Style.des} ${"mt-5"}`}><span>Bata Bangladesh recently donated meals towards 5,600 underprivileged children in collaboration with UCEP Bangladesh. On behalf of UCEP Bangladesh, Executive Director Ms. Tahsinah Ahmed thanked Bata Bangladesh for the noble initiative. Addressing to the...</span></p>
                        <div className="text-center">
                            <p className={`${Style.shopNow}`}><span>READ MORE</span></p>
                        </div>
                    </div>
                </div>
            </div>

        </Carousel >
    );
}

export default RecentPostCarousel;