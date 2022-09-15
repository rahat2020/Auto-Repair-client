import { faFacebookSquare, faInstagramSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from './HomePageReview.module.css'


const HomePageReview = ({ item: { img, position, description, name, date } }) => {
    return (
        <section className="container mt-5 pt-5 mb-5">
            <div className="card" id={style.card}>
                <div className="p-1 d-flex justify-content-between align-items-center">
                    <FontAwesomeIcon className={style.icon} icon={faQuoteLeft} />
                    <span className={style.date}>{date}</span>
                </div>
                <p className={style.reviewParagraph}>{description}</p>
                <div className={style.bodyOverlay}>


                    <div id={style.reviewImgContainer}>
                        <div className={style.overlay}>
                            <img src={img} className={style.reviewImg} alt="..." />
                        </div>
                    </div>
                    <div className="card-body" id={style.cardBody}>
                        <h5 className={style.name}>{name}</h5>
                        <span className={style.position}> {position}</span>
                    </div>
                    <div className="d-flex justify-content-center align-items-center">
                        <FontAwesomeIcon id={style.facebook} className={style.Sicons} icon={faFacebookSquare} />
                        <FontAwesomeIcon id={style.instagram} className={style.Sicons} icon={faInstagramSquare} />
                        <FontAwesomeIcon id={style.twitter} className={style.Sicons} icon={faTwitterSquare} />
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path fill="#0099ff" fillOpacity="1" d="M0,0L60,37.3C120,75,240,149,360,170.7C480,192,600,160,720,122.7C840,85,960,43,1080,26.7C1200,11,1320,21,1380,26.7L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
                    </svg>
                </div>
            </div>
        </section>
    );
};

export default HomePageReview;