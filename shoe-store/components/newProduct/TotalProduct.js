import fakeData from '../../fakeData/newProduct';
import MultiCarousel from '../shared/MultiCarousel';

const TotalProduct = ({ category }) => {
    const totalItem = fakeData.filter(item => item.category === category);
    return (
        <div className="mt-3 mb-5">
            <MultiCarousel totalItem={totalItem}/>
        </div>
    );
}

export default TotalProduct;