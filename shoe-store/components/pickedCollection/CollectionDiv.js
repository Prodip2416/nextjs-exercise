import Image from 'next/image';
import Style from '../../styles/CollectionDiv.module.css';

const CollectionDiv = ({ size }) => {
    return (
        <div>
            <div className="row mb-4">
                <div className={`${Style.position} ${"col-md-4"}`}>
                    <div className={Style.boxShadow}>
                        <div>
                            <Image className={`${Style.img}`} src="/pickedCollection/1.png" width={380} height={380} alt="" />
                        </div>
                        <div>
                            <h3 className={`${size.width > 1199 ? Style.superSaversLarge : Style.superSavers}`}><span>SUPER SAVERS</span></h3>
                        </div>
                        <p className={`${Style.des} ${"mt-5"}`}><span>The Ideal selection for your everyday-use in a Super-Saver range of 399-999 is here for you to stay steady.</span></p>
                        <div className="text-center">
                            <p className={`${Style.shopNow}`}><span>Shop Now</span></p>
                        </div>
                    </div>
                </div>
                <div className={`${Style.position} ${"col-md-4"}`}>
                    <div className={Style.boxShadow}>
                        <div>
                            <Image className={`${Style.img}`} src="/pickedCollection/2.png" width={380} height={380} alt="" />
                        </div>
                        <div className="mb-3">
                            <h3 className={`${size.width > 1199 ? Style.superSaversLarge : Style.superSavers}`}><span>MAGIC POTION</span></h3>
                        </div>
                        <p className={`${Style.des} ${"mt-5"}`}><span> Shiny, shimmering, and splendid- made for your fairy-girl! Here comfort and glamour blend together.</span></p>
                        <div className="text-center">
                            <p className={`${Style.shopNow}`}><span>Shop Now</span></p>
                        </div>
                    </div>
                </div>
                <div className={`${Style.position} ${"col-md-4"}`}>
                    <div className={Style.boxShadow}>
                        <div>
                            <Image className={`${Style.img}`} src="/pickedCollection/3.png" width={380} height={380} alt="" />
                        </div>
                        <div className="mb-3">
                            <h3 className={`${size.width > 1199 ? Style.superSaversLarge : Style.superSavers}`}><span>ALL DAY COMFORT</span></h3>
                        </div>
                        <p className={`${Style.des} ${"mt-5"}`}><span> Designed with all-encompassing comfort features to provide you with the feet-support that you need.</span></p>
                        <div className="text-center">
                            <p className={`${Style.shopNow}`}><span>Shop Now</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CollectionDiv;