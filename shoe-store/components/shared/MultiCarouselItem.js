import Image from 'next/image';
import Tooltip from '@material-ui/core/Tooltip';
import Style from '../../styles/MultiCarouselItem.module.css'

const MultiCarouselItem = ({ product }) => {
    return (
        <div className={`${Style.singleDiv}`}>
            <div className={`${"text-center mb-4"}`}>
                <div className={`${Style.heart}`}>
                    <i className={`${"bi bi-heart"}`}></i>
                </div>
                <div >
                    {/* <span className={`${Style.quickView}`}>QUICK VIEW</span> */}
                    <Image className={`${product.category === 'Accessories' ? '' : Style.img}`} src={product.img} height={200} width={200} alt="" />
                </div>
                <p><span className={`${Style.size}`}>{product.size}</span></p>
                <h6 className={`${Style.model} ${"text-center"}`}>{product.model}</h6>
                <p><span className={`${"m-2"} ${Style.title}`}>{product.desc}</span></p>
                <p>
                    {product.star == '0' && <span><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i></span>}
                    {product.star == '1' && <span><i className={`${Style.star} ${"bi bi-star-fill"}`}></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i></span>}
                    {product.star == '2' && <span><i className={`${Style.star} ${"bi bi-star-fill"}`}></i><i className={`${Style.star} ${"bi bi-star-fill"}`}></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i></span>}
                    {product.star == '3' && <span><i className={`${Style.star} ${"bi bi-star-fill"}`}></i><i className={`${Style.star} ${"bi bi-star-fill"}`}></i><i className={`${Style.star} ${"bi bi-star-fill"}`}></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i></span>}
                    {product.star == '4' && <span><i className={`${Style.star} ${"bi bi-star-fill"}`}></i><i className={`${Style.star} ${"bi bi-star-fill"}`}></i><i className={`${Style.star} ${"bi bi-star-fill"}`}></i><i className={`${Style.star} ${"bi bi-star-fill"}`}></i><i className="bi bi-star-fill"></i></span>}
                    {product.star == '5' && <span><i className={`${Style.star} ${"bi bi-star-fill"}`}></i><i className={`${Style.star} ${"bi bi-star-fill"}`}></i><i className={`${Style.star} ${"bi bi-star-fill"}`}></i><i className={`${Style.star} ${"bi bi-star-fill"}`}></i><i className={`${Style.star} ${"bi bi-star-fill"}`}></i></span>}
                </p>
                <p>
                    <del className={`${Style.price} ${"text-secondary"}`}>{'Tk.' + (parseInt(product.price.toString().replace('Tk.', '')) + 500)}</del>
                    <span className={`${"text-danger"} ${Style.price}`}>{' '}{product.price}</span>
                </p>
                <input type="button" className={`${"form-control m-3"} ${Style.shopNow}`} value="SHOP NOW" />
                <div>
                    {
                        product.color == 'Black' && <Tooltip title="Black" interactive>
                            <p><span className={`${Style.colorBlack}`}>{'TTT'}</span></p></Tooltip>
                    }
                    {
                        product.color == 'Blue' && <Tooltip title="Blue" interactive>
                            <p><span className={`${Style.colorBlue}`}>{'TTT'}</span></p></Tooltip>
                    }
                    {
                        product.color == 'Brown' && <Tooltip title="Brown" interactive>
                            <p><span className={`${Style.colorBrown}`}>{'TTT'}</span></p></Tooltip>
                    }
                    {
                        product.color == 'Green' && <Tooltip title="Green" interactive>
                            <p><span className={`${Style.colorGreen}`}>{'TTT'}</span></p></Tooltip>
                    }
                    {
                        product.color == 'White' && <Tooltip title="White" interactive>
                            <p><span className={`${Style.colorWhite}`}>{'TTT'}</span></p></Tooltip>
                    }
                    {
                        product.color == 'Pink' && <Tooltip title="Pink" interactive>
                            <p><span className={`${Style.colorPink}`}>{'TTT'}</span></p></Tooltip>
                    }
                    {
                        product.color == 'Gray' && <Tooltip title="Gray" interactive>
                            <p><span className={`${Style.colorGray}`}>{'TTT'}</span></p></Tooltip>
                    }
                </div>
            </div>
        </div>
    );
}

export default MultiCarouselItem;