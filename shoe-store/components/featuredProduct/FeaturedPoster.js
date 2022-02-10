import Image from 'next/image';
import Style from '../../styles/FeaturedPoster.module.css';

const FeaturedPoster = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                    <Image className={`${Style.img}`} src="/featuredProduct/poster/1.jpg" width={585} height={585} alt="" />
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                    <a className={Style.imgBox}>
                        <Image className={`${Style.img}`} src="/featuredProduct/poster/2.jpg" width={585} height={585} alt="" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default FeaturedPoster;