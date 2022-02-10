import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Image from 'next/image';
import Style from '../../styles/HeaderCard.module.css';

const HeaderCard = ({size}) => {
    return (
        <div className={`${"container ml-5 mt-4 mb-4"}`}>
            <CardGroup>
                <div className="row">
                    <div className="col-6 col-sm-6 col-md-3">         
                        <Card className={`${"m-1"}`}>                    
                            <Image className={`${Style.cardImg}`} src="/header/headerCard1.jpg" width={277} height={147} alt="" />
                        </Card>
                    </div>
                    <div className="col-6 col-sm-6 col-md-3">
                        <Card className={`${"m-1"}`}>
                            <Image className={`${Style.cardImg}`} src="/header/headerCard2.jpg" width={277} height={147} alt="" />
                        </Card>
                    </div>
                    <div className="col-6 col-sm-6 col-md-3">
                        <Card className={`${"m-1"}`}>
                            <Image className={Style.cardImg} src="/header/headerCard3.jpg" width={277} height={147} alt="" />
                        </Card>
                    </div>
                    <div className="col-6 col-sm-6 col-md-3">
                        <Card className={`${"m-1"}`}>
                            <Image className={Style.cardImg} src="/header/headerCard4.jpg" width={277} height={147} alt="" />
                        </Card>
                    </div>
                </div>
            </CardGroup>
        </div>
    );
}

export default HeaderCard;