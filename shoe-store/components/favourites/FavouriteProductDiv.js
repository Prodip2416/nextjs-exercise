import Image from 'next/image';
import Style from '../../styles/FavouriteProductDiv.module.css';

const FavouriteProductDiv = ({ size }) => {
    return (
        <div>
            <div className="row mb-4">
                <div className={`${Style.position} ${"col-md-4 ml-2"}`}>
                    <div className={Style.boxShadow}>
                        <div>
                            <Image className={`${Style.img}`} src="/favourites/1.jpg" width={380} height={380} alt="" />
                        </div>
                        <div>                   
                            <h3 className={`${size.width > 1199 ? Style.superSaversLarge : Style.superSavers}`}> <p className={Style.subTitle}>MENS</p><span>CASUALS</span></h3>
                        </div>
                        <p className={`${Style.des} ${"mt-5"}`}><span>The Casual shoes of Bata ensure comfort & style & are always on-trend. The widest range of these casuals make free-styles easy to wear without compromising on sleek & contemporary design. Bata Casual Shoes have the widest variety with panache.</span></p>
                        <div className="text-center">
                            <p className={`${Style.shopNow}`}><span>Shop Now</span></p>
                        </div>
                    </div>
                </div>
                <div className={`${Style.position} ${"col-md-4"}`}>
                    <div className={Style.boxShadow}>
                        <div>
                            <Image className={`${Style.img}`} src="/favourites/2.jpg" width={380} height={380} alt="" />
                        </div>
                        <div className="mb-3">
                            <h3 className={`${size.width > 1199 ? Style.superSaversLarge : Style.superSavers}`}><p className={Style.subTitle}>LADIES</p><span>Heels</span></h3>
                        </div>
                        <p className={`${Style.des} ${"mt-5"}`}><span> Bata has the most stylish collection of ladies high heels, heeled sandals & stilettos. They get you, they’re happy to accompany you wherever you go assuring the confidence gleaming from the inside to stride with your head high & the graceful foot forward.</span></p>
                        <div className="text-center">
                            <p className={`${Style.shopNow}`}><span>Shop Now</span></p>
                        </div>
                    </div>
                </div>
                <div className={`${Style.position} ${"col-md-4"}`}>
                    <div className={Style.boxShadow}>
                        <div>
                            <Image className={`${Style.img}`} src="/favourites/3.jpg" width={380} height={380} alt="" />
                        </div>
                        <div className="mb-3">
                            <h3 className={`${size.width > 1199 ? Style.superSaversLarge : Style.superSavers}`}><p className={Style.subTitle}>BATA</p><span>BACKPACKS</span></h3>
                        </div>
                        <p className={`${Style.des} ${"mt-5"}`}><span> The premium backpacks from Bata are ideal picks for you to carry your daily belongings in an organized manner. These are stylishly perfect for work, travel, weekends or any random events or outings; designed to give you maximum flexibility for your daily grind.</span></p>
                        <div className="text-center">
                            <p className={`${Style.shopNow}`}><span>Shop Now</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FavouriteProductDiv;