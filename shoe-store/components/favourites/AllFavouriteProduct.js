import FavouriteProductCarousel from "./FavouriteProductCarousel";
import FavouriteProductDiv from "./FavouriteProductDiv";
import SectionTitle from "../shared/SectionTitle";
import { useContext } from "react";
import { WindowSizeContext } from '../../pages/_app';

const AllFavouriteProduct = () => {
    const [size, setSize] = useContext(WindowSizeContext);
    return (
        <div className="container mt-5">
            <SectionTitle sectionTitle="PICK YOUR FAVOURITES" />
            <div className="mb-5">
                {
                    size.width <= 991 ? <FavouriteProductCarousel size={size} /> : <FavouriteProductDiv size={size} />
                }
            </div>
        </div>
    );
}

export default AllFavouriteProduct;