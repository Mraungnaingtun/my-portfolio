import React,{useState} from 'react'
import './qualification.css'
import certificate_2017 from '../../assets/2017_ICPC.pdf'
import certificate_2018 from '../../assets/2018_ICPC.pdf'

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1)

    const toggleTab=(index)=>{
        setToggleState(index)
    }

    return (
        <section className="qualification section" id="qualification">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">
                My personal journey
            </span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className={
                        toggleState === 1 ? 
                        "qualification__button qualification__active button--flex" :
                        "qualification__button button--flex"
                    }
                    onClick={()=>toggleTab(1)}
                    >
                        <i className="uil uil-graduation-cap qualification__icon"></i>Education
                    </div>

                    <div className={
                        toggleState === 2 ? 
                        "qualification__button qualification__active button--flex" :
                        "qualification__button button--flex"
                    }
                    onClick={()=>toggleTab(2)}
                    >
                        <i className="uil uil-briefcase-alt qualification__icon"></i>Experience
                    </div>
                </div>
                <div className="qualification__section">
                    <div className={
                        toggleState === 1 
                        ? "qualification__content qualification__content-active"
                        : "qualification__content"
                    }>
                        {/* ===========================B.C.Sc======================================= */}
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">B.C.Sc</h3>
                                <span className="qualification__subtitle">Computer University(Sittwe)</span>
                                <div className="qualificaton__calendar">
                                    <i className="uil uil-calender-alt"></i> 2015 - 2020
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                        {/* =============================Samsung Tech Institute 2016===================================== */}
                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Samsung Tech Institute(Android app training)</h3>
                                <span className="qualification__subtitle">UCSY</span>
                                <div className="qualificaton__calendar">
                                    <i className="uil uil-calender-alt"></i> 2016
                                </div>
                            </div>
                        </div>
                        {/* ==============================ICPC 2017==================================== */}
                        <div className="qualification__data">

                            <div>
                                <h3 className="qualification__title">ICPC Tenth Place</h3>
                                <span className="qualification__subtitle"><a download="" href={certificate_2017} >Certificate</a></span>
                                <div className="qualificaton__calendar">
                                    <i className="uil uil-calender-alt"></i> 2017 (UCSY)
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                        {/* ===============================ICPC 2018=================================== */}
                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">ICPC 2018</h3>
                                <span className="qualification__subtitle"><a download="" href={certificate_2018}>Certificate</a></span>
                                <div className="qualificaton__calendar">
                                    <i className="uil uil-calender-alt"></i> 2018 (UCSY)
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* *********************************************************************************************** */}
                    <div className={
                        toggleState === 2
                        ? "qualification__content qualification__content-active"
                        : "qualification__content"
                    }>
                        <div>No Work Experience</div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Qualification