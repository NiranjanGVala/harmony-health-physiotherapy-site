import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assests/images/logo.png'

const Footer = () => {
    return (
        <>
            <div className="container-fluid footer py-5 wow fadeIn" data-wow-delay="0.2s">
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col-md-6 col-lg-6 col-xl-3">
                            <div className="footer-item d-flex flex-column">
                                <img src={logo} alt="logo" />
                                <div className="d-flex align-items-center mt-3">
                                    <i className="fas fa-share fa-2x text-white me-2"></i>
                                    <NavLink className="btn-square text-white rounded-circle mx-1" to="https://www.facebook.com/share/Gb5AwyWRLSWEqtYE/" target='_blank'><i className="fab fa-facebook"></i></NavLink>
                                    <NavLink className="btn-square text-white rounded-circle mx-1" to="https://www.instagram.com/explore/locations/1780938745473345/harmony-health-physiotherapy-center/recent/" target='_blank'><i className="fab fa-instagram"></i></NavLink>
                                    <NavLink className="btn-square text-white rounded-circle mx-1" to="https://wa.me/919898288499" target='_blank'><i className="fa-brands fa-whatsapp"></i></NavLink>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-3">
                            <div className="footer-item d-flex flex-column">
                                <h4 className="mb-4 text-white">Quick Links</h4>
                                <NavLink to="/service"><i className="fas fa-angle-right me-2"></i> Services</NavLink>
                                <NavLink to="/"><i className="fas fa-angle-right me-2"></i> Treatment</NavLink>
                                <NavLink to="founders"><i className="fas fa-angle-right me-2"></i> Founders</NavLink>
                                <NavLink to="contact-us"><i className="fas fa-angle-right me-2"></i> Contact Us</NavLink>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-3">
                            <div className="footer-item d-flex flex-column">
                                <h4 className="mb-4 text-white">Services</h4>
                                <NavLink href=""><i className="fas fa-angle-right me-2"></i>Laser Therapy</NavLink>
                                <NavLink href=""><i className="fas fa-angle-right me-2"></i> Long Wave Therapy</NavLink>
                                <NavLink href=""><i className="fas fa-angle-right me-2"></i> Dry Cupping Therapy</NavLink>
                                <NavLink href=""><i className="fas fa-angle-right me-2"></i> Kinesiology Taping</NavLink>
                                <NavLink href=""><i className="fas fa-angle-right me-2"></i> Dry Needle Therapy</NavLink>
                                <NavLink href=""><i className="fas fa-angle-right me-2"></i> IASTM</NavLink>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-3">
                            <div className="footer-item d-flex flex-column">
                                <h4 className="mb-4 text-white">Contact Info</h4>
                                <NavLink href=""><i className="fa fa-map-marker-alt me-2"></i>2, Dharti Complex, Mahuda Road, Mahemdabad, Dist, Kheda, Gujarat, India, 387130</NavLink>
                                <NavLink href=""><i className="fas fa-envelope me-2"></i> drhardikpatel@gmail.com</NavLink>
                                <NavLink href=""><i className="fas fa-phone me-2"></i> +919898288499</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid copyright py-4">
                <div className="container">
                    <div className="row g-4 align-items-center">
                        <div className="text-center mb-md-0">
                            {/* <span className="text-white"><NavLink href="#"><i className="fas fa-copyright text-light me-2"></i>Your Site Name</NavLink>, All right reserved.</span> */}
                            <span className='text-white'>Copyright text: <i className="fas fa-copyright text-light me-2"></i>2024 Harmony Health Physiotherapy Center. All rights reserved.</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer