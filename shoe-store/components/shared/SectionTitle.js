import Style from '../../styles/SectionTitle.module.css';

const SectionTitle = ({ sectionTitle }) => {

    return (
        <div className="row mb-4">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 text-center">
                <div className={Style.title}>
                    <span className={`${Style.leftSpan} ${Style.leftSpanMb}`}></span>
                    <h3 className={`${Style.titleFont} ${Style.font}`}>{sectionTitle} </h3>
                    <span className={`${Style.RightSpan} ${Style.RightSpanMb}`}></span>
                </div>
            </div>
        </div>
    );
}

export default SectionTitle;