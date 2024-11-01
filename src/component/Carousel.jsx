import React from "react";
import Slider from "react-slick"; // Import the react-slick Slider component
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import review1 from '../assests/images/review1.jpg'
import review2 from '../assests/images/review2.jpg'
import review3 from '../assests/images/review3.jpg'

const Carousel = () => {
    const settings = {
        className: "center",
        centerMode: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="carousel-container">
            <div className="container-fluid team py-5">
                <div className="container py-5">
                    <div className="section-title wow fadeInUp" data-aos="fade-up">
                        <div className="sub-style d-flex justify-content-center">
                            <div >
                                <div className="line short" style={{ marginLeft: '50px', backgroundColor: '#fff' }}></div>
                                <div className="line long" style={{ backgroundColor: '#fff' }}></div>
                            </div>
                            <h4 className="sub-title px-3 mb-0 text-white">TESTIMONIAL</h4>
                            <div>
                                <div className="line short" style={{ backgroundColor: '#fff' }}></div>
                                <div className="line long" style={{ backgroundColor: '#fff' }}></div>
                            </div>
                        </div>
                        <h1 className="display-3 mb-4">What Clients are Say</h1>
                    </div>
                </div>
            </div>
            <div className="slider-container" style={{ paddingBottom: '150px' }}>
                <Slider {...settings}>
                    <div className="item text-center">
                        <div className="d-flex justify-content-center testimonial-inner-img mb-4">
                            <img src={review1} alt="reviwe 1" className="img-fluid rounded-circle" />
                        </div>
                        <div className="d-flex justify-content-center">
                        <span className="text-white w-50" style={{fontSize: '20px'}}>Best treatment I ever have in physiotherapy......DR.HARDIK WITH HIS GREAT KNOWLEDGE AND WIDE EXPERIENCE....can perform all the duties very well....and good supporting staff... True a quality services......best in whole mahemdabaad..... thanks to dr.hardik and vaibhavi madam
                        </span>
                        </div>
                        <h3 className="text-black pt-3">SUNNY PARIKH</h3>
                        <div className="d-flex gap-1 justify-content-center">
                            <i className="fas fa-star" style={{ color: '#efa286' }}></i>
                            <i className="fas fa-star" style={{ color: '#efa286' }}></i>
                            <i className="fas fa-star" style={{ color: '#efa286' }}></i>
                            <i className="fas fa-star" style={{ color: '#efa286' }}></i>
                            <i className="fas fa-star" style={{ color: '#efa286' }}></i>
                        </div>
                    </div>
                    <div className="item text-center">
                        <div className="d-flex justify-content-center testimonial-inner-img mb-4">
                            <img src={review2} alt="review 2" className="img-fluid rounded-circle" />
                        </div>
                        <div className="d-flex justify-content-center">
                        <span className="text-white w-50" style={{fontSize: '20px'}}>A good place to strengthen body by Physiotherapy. Approach and knowledge of doctor is very good.</span>
                        </div>
                        <h3 className="text-black pt-3">Purvesh parmar</h3><div className="d-flex gap-1 justify-content-center">
                            <i className="fas fa-star" style={{ color: '#efa286' }}></i>
                            <i className="fas fa-star" style={{ color: '#efa286' }}></i>
                            <i className="fas fa-star" style={{ color: '#efa286' }}></i>
                            <i className="fas fa-star" style={{ color: '#efa286' }}></i>
                            <i className="fas fa-star" style={{ color: '#efa286' }}></i>
                        </div>
                    </div>
                    <div className="item text-center">
                        <div className="d-flex justify-content-center testimonial-inner-img mb-4">
                            <img src={review3} alt="review 3" className="img-fluid rounded-circle" />
                        </div>
                        <div className="d-flex justify-content-center">
                        <span className="text-white w-50" style={{fontSize: '20px'}}>I was going there for the physiotherapy of after TKR It was superb experience
                        </span>
                        </div>
                        <h3 className="text-black pt-3">pravinbhai suthar</h3>
                        <div className="d-flex gap-1 justify-content-center">
                            <i className="fas fa-star" style={{ color: '#efa286' }}></i>
                            <i className="fas fa-star" style={{ color: '#efa286' }}></i>
                            <i className="fas fa-star" style={{ color: '#efa286' }}></i>
                            <i className="fas fa-star" style={{ color: '#efa286' }}></i>
                            <i className="fas fa-star" style={{ color: '#efa286' }}></i>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default Carousel;
