import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import logo from '../assests/images/logo.png'

const Header = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="container-fluid p-1 d-none d-lg-block" style={{ backgroundColor: '#202135' }}>
                <div className="row gx-0 align-items-center" style={{ height: '45px' }}>
                    <div className="col-lg-8 text-center text-lg-start mb-lg-0">
                        <div className="d-flex flex-wrap px-4">
                        <NavLink href="#" className="text-light me-4 text-decoration-none"><i className="fas fa-phone  me-2" style={{ color: '#15b9d9' }}></i>+91 9712580724</NavLink>
                            <NavLink href="#" className="text-light me-4 text-decoration-none"><i className="fas fa-phone  me-2" style={{ color: '#15b9d9' }}></i>+91 9898288499</NavLink>
                            <NavLink href="#" className="text-light me-0 text-decoration-none"><i className="fas fa-envelope  me-2" style={{ color: '#15b9d9' }}></i>info@harmonyhealthphysiotherapycenter.in</NavLink>
                        </div>
                    </div>
                    <div className="col-lg-4 text-center text-lg-end">
                        <div className="d-flex align-items-center justify-content-end pe-4 social-icon">
                            <NavLink style={{backgroundColor:'#00BCD4'}} to="https://www.facebook.com/share/Gb5AwyWRLSWEqtYE/" className="btn btn-light border rounded-circle nav-fill me-3" target='_blank'><i className="fab fa-facebook-f"></i></NavLink>
                            <NavLink style={{backgroundColor:'#00BCD4'}} to="https://www.instagram.com/explore/locations/1780938745473345/harmony-health-physiotherapy-center/recent/" target='_blank' className="btn btn-light border rounded-circle nav-fill me-3"><i className="fab fa-instagram"></i></NavLink>
                            <NavLink style={{backgroundColor:'#00BCD4'}} to="https://wa.me/919898288499" className="btn btn-light border rounded-circle nav-fill me-0" target='_blank'><i className="fa-brands fa-whatsapp"></i></NavLink>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid sticky-top p-0">
                <nav className="navbar navbar-expand-lg navbar-light bg-white ps-3">
                    <NavLink className="navbar-brand" to={"/"}>
                        <img src={logo} alt="Harmony Health Physiotherapy Center" className='w-100' height={'60px'} />
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto d-flex gap-1">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/service">Services</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/founders">Founders</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact-us">Contact Us</NavLink>
                            </li>
                            <li className="nav-item me-3">
                                <button onClick={()=>navigate('/contact-us')} className="btn-appointment">Book Appointment</button>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Header