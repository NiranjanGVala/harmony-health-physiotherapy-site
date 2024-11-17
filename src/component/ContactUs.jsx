import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'

const ContactUs = () => {
    useEffect(()=>{
        window.scrollTo(0,0);
    },[])
    return (
        <>
            <div className="container-fluid bg-breadcrumb">
                <div className="container text-center py-5" style={{ maxWidth: '900px' }}>
                    <h3 className="text-white display-3 mb-4 wow fadeInDown" data-wow-delay="0.1s">Contact Us</h3>
                    <ol className="breadcrumb justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s">
                        <li className="breadcrumb-item"><NavLink to="/">Home</NavLink></li>
                        <li className="breadcrumb-item active">Contact</li>
                    </ol>
                </div>
            </div>
            <div className="container-fluid contact py-5">
                <div className="container py-5">
                    <div className="section-title mb-5 wow fadeInUp" data-wow-delay="0.1s" >
                        <div className="sub-style mb-4">
                            <h4 className="sub-title text-white px-3 mb-0">Contact Us</h4>
                        </div>
                    </div>
                    <div className="row g-4 align-items-center">
                        <div className="col-lg-5 col-xl-5 contact-form wow fadeInLeft" data-aos="fade-right">
                            <h2 className="display-5 text-white mb-2">Get in Touch</h2>
                            <p className="mb-4 text-white">Feel free to reach out with any questions or to schedule an appointment. You can call us or email us, and we’ll get back to you as soon as possible.</p>
                        </div>
                        <div className="col-lg-2 col-xl-2 wow fadeInUp" data-aos="fade-up">
                            <div className="bg-transparent rounded">
                                <div className="d-flex flex-column align-items-center text-center mb-4">
                                    <div className="bg-white d-flex align-items-center justify-content-center mb-3" style={{ width: '90px', height: '90px', borderRadius: '50px' }}><i className="fa fa-map-marker-alt fa-2x text-primary"></i></div>
                                    <h4 className="text-dark">Addresses</h4>
                                    <p className="mb-0 text-white">2, Dharti Complex, Mahuda Road, Mahemdabad, Dist, Kheda, Gujarat, India, 387130</p>
                                </div>
                                <div className="d-flex flex-column align-items-center text-center mb-4">
                                    <div className="bg-white d-flex align-items-center justify-content-center mb-3" style={{ width: '90px', height: '90px', borderRadius: '50px' }}><i className="fa fa-phone-alt fa-2x text-primary"></i></div>
                                    <h4 className="text-dark">Mobile</h4>
                                    <p className="mb-0 text-white">+9712580724</p>
                                    <p className="mb-0 text-white">+918585959293</p>
                                </div>

                                <div className="d-flex flex-column align-items-center text-center">
                                    <div className="bg-white d-flex align-items-center justify-content-center mb-3" style={{ width: '90px', height: '90px', borderRadius: '50px' }}><i className="fa fa-envelope-open fa-2x text-primary"></i></div>
                                    <h4 className="text-dark">Email</h4>
                                    <p className="mb-0 text-white">info@harmonyhealthphysiotherapycenter.in</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 col-xl-5 wow fadeInRight" data-aos="fade-left">
                            <div className="rounded h-100">
                                <iframe title='map' className="rounded w-100" style={{ height: '500px' }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.4876793954745!2d72.75984677508544!3d22.821439979315283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e6121256f33a3%3A0x3b2f6dd8771990e7!2sDharti%20Complex!5e0!3m2!1sen!2sin!4v1728738868213!5m2!1sen!2sin" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactUs