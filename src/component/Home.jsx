import React, { useEffect, useState } from 'react'
import slider1 from '../assests/images/slider1.jpg'
import slider2 from '../assests/images/slider2.jpg'
import slider3 from '../assests/images/slider3.jpg'
import about1 from '../assests/images/about-1.jpg'
import about2 from '../assests/images/about-2.jpg'
import service1 from '../assests/images/service1.jpg'
import service2 from '../assests/images/service2.webp'
import service3 from '../assests/images/service3.jpg'
import service4 from '../assests/images/service4.jpg'
import service5 from '../assests/images/service5.jpg'
import service6 from '../assests/images/service6.jpg'
import profile1 from '../assests/images/profile1.jpg'
import profile2 from '../assests/images/profile2_1.jpg'
import profile3 from '../assests/images/profile3.png'
import { NavLink, useNavigate } from 'react-router-dom'
import Carousel from './Carousel'
import Features from './Features'
const Home = () => {
  const [desc, setDesc] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0,0);
  },[])

  const teams = [{
    no: 1,
    name: 'Dr. Hardik Patel',
    Description: `Dr. Hardik Patel, co-founder of Harmony Health Physiotherapy Center, brought his expertise in manual therapy to the clinic. With hands-on experience since 2017, Dr. Patel helped numerous patients recover from pain and physical limitations. His personal approach, focusing on individualized care, made a real difference in the lives of his patients. Though he left the organization in 2023, his contributions have left a lasting impact on the clinic's treatment methodologies, making it a trusted place for recovery.`,
    email: 'drhardikpatel@gmail.com',
    mobile: '+91 98982 88499',
    image:profile1
  }, {
    no: 2,
    name: 'Vaibhaviben Patel',
    Description: `Vaibhaviben Patel was the backbone of Harmony Health Physiotherapy Center’s administration and executive operations. Since the clinic's inception in 2017, she ensured the smooth running of all administrative tasks, which directly contributed to providing patients with a stress-free experience. Her organized and compassionate approach to the clinic's daily operations created a welcoming environment for everyone seeking care. Vaibhaviben left the organization in 2023, but her influence is still felt in the clinic’s patient-first mindset.`,
    email: 'VaibhavibenPatel@gmail.com',
    mobile: '+91 98982 88499',
    image:profile2
  }, {
    no: 3,
    name: 'Niranjan Vala',
    Description: `Niranjan Vala, the CEO of Harmony Health Physiotherapy Center, has been leading the clinic since its inception in 2017. Specializing in orthopedic conditions, Niranjan has been instrumental in helping patients overcome mobility issues and live pain-free lives. His compassionate and results-driven approach ensures that every patient receives the best possible care for their specific needs. With years of experience, Niranjan continues to drive the clinic’s mission to provide personalized, high-quality physiotherapy that improves the well-being of all who come to us.`,
    email: 'niranjanvala@gmail.com',
    mobile: '+91 97125 80724',
    image:profile3
  }]

  return (
    <>
      <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" style={{ backgroundColor: '#15b9d9 !important' }} aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="header-carousel">
              <img src={slider1} className="d-block w-100" alt="..." loading="lazy" style={{ height: '600px', backgroundSize: 'cover', backgroundPosition: 'center' }} />
              <div className="carousel-caption d-none d-md-block">
                <div className="slider-info">
                  <h1 className='display-1 text-capitalize text-white mb-4' data-aos="fade-up">Book Your Appointment Now!</h1>
                  <p className='mb-5 fs-5 text-white' data-aos="fade-up">Contact us today to schedule your consultation and begin your journey towards better health and independence.</p>
                  <button onClick={() => navigate('/contact-us')} className='slider-btn'>Book Appointment</button>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item active" data-bs-interval="2000" >
            <div className="header-carousel">
              <img src={slider2} className="d-block w-100" alt="..." loading="lazy" style={{ height: '600px', backgroundSize: 'cover', backgroundPosition: 'center' }} />
              <div className="carousel-caption d-none d-md-block">
                <div className="slider-info">
                  <h1 className='display-1 text-capitalize text-white mb-4'>Expert Care in Your Neighborhood</h1>
                  <p className='mb-5 fs-5 text-white'>Our team provides personalized therapy sessions tailored to your needs..</p>
                  <button onClick={() => navigate('/contact-us')} className='slider-btn'>Call Us: +919898288499</button>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item active" data-bs-interval="2000" >
            <div className="header-carousel">
              <img src={slider3} className="d-block w-100" alt="..." loading="lazy" style={{ height: '600px', backgroundSize: 'cover', backgroundPosition: 'center' }} />
              <div className="carousel-caption d-none d-md-block">
                <div className="slider-info">
                  <h1 className='display-1 text-capitalize text-white mb-4'>Advanced Physiotherapy Techniques</h1>
                  <p className='mb-5 fs-5 text-white'>Discover modern treatments for faster recovery and improved mobility.</p>
                  <button className='slider-btn' onClick={() => navigate('/contact-us')}>Call Us: +919898288499</button>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
      {/* About section */}
      <div className="container-fluid about bg-light py-5">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-5 wow fadeInLeft m-0" data-aos="fade-right">
              <div className="about-img pb-5 ps-5">
                <img src={about1} className="img-fluid rounded w-100" style={{ objectFit: 'cover' }} alt="about" />
                <div className="about-img-inner">
                  <img src={about2} className="img-fluid rounded-circle w-100 h-100" alt="about" />
                </div>
              </div>
            </div>
            <div className="col-lg-7 wow fadeInRight" data-aos="fade-left">
              <div className="section-title text-start mb-5">
                <div className='d-flex'>
                  <h4 className="sub-title pe-3 mb-0">ABOUT US</h4>
                  <div>
                    <div className="line short"></div>
                    <div className="line long"></div>
                  </div>
                </div>
                <h1 className="display-3 mb-4">We are Ready to Help Improve Your Treatment.</h1>
                <p className="mb-4">Since 2017, Harmony Health Physiotherapy Center has been committed to improving the health and well-being of our patients. We specialize in advanced physiotherapy techniques such as laser therapy, dry cupping, and manual therapy to treat a wide range of conditions. Whether you're recovering from an injury, surgery, or managing chronic pain, our goal is to help you restore your strength and mobility with personalized care.
                  Our experienced therapists work closely with each patient, developing customized treatment plans that focus on your specific needs. From neurological conditions like stroke recovery to orthopedic issues such as joint pain or stiffness, we are here to guide you through every step of your healing journey. At Harmony Health, we believe in a holistic approach that not only treats the symptoms but also helps you regain independence and a better quality of life.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* service section */}
      <div className="container-fluid service py-5">
        <div className="container py-5">
          <div className="section-title mb-5 wow fadeInUp" data-aos="fade-up">
            <div className="sub-style d-flex justify-content-center">
              <div >
                <div className="line short" style={{ marginLeft: '50px' }}></div>
                <div className="line long"></div>
              </div>
              <h4 className="sub-title px-3 mb-0">What We Do</h4>
              <div>
                <div className="line short"></div>
                <div className="line long"></div>
              </div>
            </div>
            <h1 className="display-3 mb-4">Our Service Given Physio Therapy By Expert.</h1>
          </div>
          <div className="row g-4 justify-content-center" data-aos="fade-up">
            <div className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.1s">
              <div className="service-item rounded">
                <div className="service-img rounded-top">
                  <img src={service1} className="img-fluid rounded-top w-100" alt="" style={{ height: '265px' }} />
                </div>
                <div className="service-content rounded-bottom bg-light p-4">
                  <div className="service-content-inner">
                    <h5 className="mb-4">Laser Therapy</h5>
                    <p className="mb-4">Our cutting-edge laser therapy provides quick, non-invasive pain relief by targeting affected areas. This treatment speeds up recovery, helping you get back to your daily activities without discomfort.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.1s">
              <div className="service-item rounded">
                <div className="service-img rounded-top">
                  <img src={service2} className="img-fluid rounded-top w-100" alt="" style={{ height: '265px' }} />
                </div>
                <div className="service-content rounded-bottom bg-light p-4">
                  <div className="service-content-inner">
                    <h5 className="mb-4">Long Wave Therapy</h5>
                    <p className="mb-4">Using advanced sound wave technology, this therapy penetrates deep into muscles to ease chronic pain and tension. Ideal for long-term relief, it helps you feel stronger and more relaxed.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.1s">
              <div className="service-item rounded">
                <div className="service-img rounded-top">
                  <img src={service3} className="img-fluid rounded-top w-100" alt="" style={{ height: '265px' }} />
                </div>
                <div className="service-content rounded-bottom bg-light p-4">
                  <div className="service-content-inner">
                    <h5 className="mb-4">Dry Cupping Therapy</h5>
                    <p className="mb-4">Rediscover comfort and relaxation with cupping therapy, a time-tested method that improves circulation, reduces muscle stiffness, and releases tension throughout your body.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.1s">
              <div className="service-item rounded">
                <div className="service-img rounded-top">
                  <img src={service4} className="img-fluid rounded-top w-100" alt="" style={{ height: '265px' }} />
                </div>
                <div className="service-content rounded-bottom bg-light p-4">
                  <div className="service-content-inner">
                    <h5 className="mb-4">Kinesiology Taping</h5>
                    <p className="mb-4">Support your joints and muscles without limiting your movement. This taping method promotes faster recovery, reduces strain, and helps you stay active with less discomfort.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.1s">
              <div className="service-item rounded">
                <div className="service-img rounded-top">
                  <img src={service5} className="img-fluid rounded-top w-100" alt="" style={{ height: '265px' }} />
                </div>
                <div className="service-content rounded-bottom bg-light p-4">
                  <div className="service-content-inner">
                    <h5 className="mb-4">Dry Needle Therapy</h5>
                    <p className="mb-4">Target muscle knots and trigger points with precision. This therapy releases tightness, improves mobility, and offers lasting relief from persistent pain.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.1s">
              <div className="service-item rounded">
                <div className="service-img rounded-top">
                  <img src={service6} className="img-fluid rounded-top w-100" alt="" style={{ height: '265px' }} />
                </div>
                <div className="service-content rounded-bottom bg-light p-4">
                  <div className="service-content-inner">
                    <h5 className="mb-4">IASTM</h5>
                    <p className="mb-4">Our Instrument-Assisted Soft Tissue Mobilization (IASTM) technique uses specialized tools to release tension and break down scar tissue, helping you move more freely and recover faster.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team section */}
      <div className="container-fluid team py-5">
        <div className="container py-5">
          <div className="section-title mb-5 wow fadeInUp" data-aos="fade-up">
            <div className="sub-style d-flex justify-content-center">
              <div >
                <div className="line short" style={{ marginLeft: '50px' }}></div>
                <div className="line long"></div>
              </div>
              <h4 className="sub-title px-3 mb-0">MEET OUT TEAM</h4>
              <div>
                <div className="line short"></div>
                <div className="line long"></div>
              </div>
            </div>
            <h1 className="display-3 mb-4">Physiotherapy Services from Professional Therapist</h1>
          </div>
          <div className="row g-4 justify-content-center">
            {
              teams?.map(x => (
                <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-aos="fade-up">
                  <div className="team-item rounded">
                    <div className="team-img rounded-top h-100">
                      <img src={x?.image} className="img-fluid rounded-top w-100" alt="" style={{height:'300px'}}/>
                    </div>
                    <div className="team-content border border-top-0 rounded-bottom p-4">
                      <h5 className='text-center'>{x?.name}</h5>
                      <p className="mb-0">{x?.Description}</p>
                      <div className='mt-3 mb-3'>
                        <NavLink className='text-decoration-none read-more' data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setDesc(x?.Description)}>Read more <i className="fa-solid fa-arrow-right"></i></NavLink>
                      </div>
                      <div className="d-grid mt-2 contact-info">
                        <span>Email: {x?.email}</span>
                        <span>Mobile No: {x?.mobile}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
      {/* Features */}
      <Features />
      {/* Testimonial */}
      <Carousel />

      <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header border-bottom-0">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              {desc}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home