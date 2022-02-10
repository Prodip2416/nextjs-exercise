import { useContext } from "react";
import CollectionDiv from './CollectionDiv';
import CollectionCarousel from './CollectionCarousel';
import SectionTitle from "../shared/SectionTitle";
import { WindowSizeContext } from '../../pages/_app';

const Collection = () => {
    const [size, setSize] = useContext(WindowSizeContext);
    return (
        <div className="container-fluid">
            <SectionTitle sectionTitle="OUR HAND PICKED COLLECTION FOR YOU" />
            <div className="mb-5">
                {
                    size.width <= 991 ? <CollectionCarousel size={size} /> : <CollectionDiv size={size} />
                }
            </div>
        </div>
    );
}

export default Collection;