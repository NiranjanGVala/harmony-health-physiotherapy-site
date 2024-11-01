import React, { useEffect } from 'react'
import service1 from '../assests/images/service1.jpg'
import service2 from '../assests/images/service2.webp'
import service3 from '../assests/images/service3.jpg'
import service4 from '../assests/images/service4.jpg'
import service5 from '../assests/images/service5.jpg'
import service6 from '../assests/images/service6.jpg'
import { NavLink } from 'react-router-dom'

const Service = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return (
    <>
      <div className="container-fluid bg-breadcrumb">
        <div className="container text-center py-5" style={{ maxWidth: '900px' }}>
          <h3 className="text-white display-3 mb-4 wow fadeInDown" data-wow-delay="0.1s">Services</h3>
          <ol className="breadcrumb justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s">
            <li className="breadcrumb-item"><NavLink to="/">Home</NavLink></li>
            <li className="breadcrumb-item active">Services</li>
          </ol>
        </div>
      </div>
      <div className="container-fluid service py-5">
        <div className="container py-5">
          <div className="section-title mb-5 wow fadeInUp" data-wow-delay="0.2s">
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
            <h1 className="display-3 mb-4" data-aos="fade-up" >Our Service Given Physio Therapy By Expert.</h1>
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
    </>
  )
}

export default Service