import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import profile1 from '../assests/images/profile1.jpg'
import profile2 from '../assests/images/profile2_1.jpg'
import profile3 from '../assests/images/profile3.png'


const Founders = () => {
    const [desc,setDesc] = useState(null);
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [])
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
    <div className="container-fluid bg-breadcrumb">
            <div className="container text-center py-5" style={{maxWidth: '900px'}}>
                <h3 className="text-white display-3 mb-4 wow fadeInDown" data-wow-delay="0.1s">Founders</h3>
                <ol className="breadcrumb justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s">
                    <li className="breadcrumb-item"><NavLink to="/">Home</NavLink></li>
                    <li className="breadcrumb-item active">Founders</li>
                </ol>    
            </div>
        </div>
    <div className="container-fluid team py-5">
        <div className="container py-5">
          <div className="section-title mb-5 wow fadeInUp" data-wow-delay="0.1s">
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
            <h1 className="display-3 mb-4" data-aos="fade-up">Physiotherapy Services from Professional Therapist</h1>
          </div>
          <div className="row g-4 justify-content-center" data-aos="fade-up">
            {
              teams?.map(x => (
                <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.1s">
                  <div className="team-item rounded">
                    <div className="team-img rounded-top h-100">
                      <img src={x?.image} className="img-fluid rounded-top w-100" alt="" style={{height: '300px'}}/>
                    </div>
                    <div className="team-content border border-top-0 rounded-bottom p-4">
                      <h5 className='text-center'>{x?.name}</h5>
                      <p className="mb-0">{x?.Description}</p>
                      <div className='mt-3 mb-3'>
                      <NavLink className='text-decoration-none read-more' data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=>setDesc(x?.Description)}>Read more <i className="fa-solid fa-arrow-right"></i></NavLink>
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

export default Founders