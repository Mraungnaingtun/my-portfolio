import React from 'react'

const Backend = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">Backend Developer</h3>
            <div className="skills__box">
                <div className="skills__group">
                    {/* =================Node.js============================== */}
                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>
                        <h3 className="skills__name">Node.js</h3>
                        <span className="skills__level">
                            Intermedi
                        </span>
                    </div>
                    {/* =================Express.js============================== */}
                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>
                        <h3 className="skills__name">Express.js</h3>
                        <span className="skills__level">
                            Intermediate
                        </span>
                    </div>
                    {/* =================Java============================== */}
                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>
                        <h3 className="skills__name">Java</h3>
                        <span className="skills__level">
                            Intermediate
                        </span>
                    </div>
                </div>
                {/* =============== skill group===================== */}
                <div className="skills__group">
                    {/* ================MongoDB=============================== */}
                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>
                        <h3 className="skills__name">MongoDB</h3>
                        <span className="skills__level">
                            Intermediate
                        </span>
                    </div>
                    {/* ==================MySQL============================= */}
                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>
                        <h3 className="skills__name">MySQL</h3>
                        <span className="skills__level">
                            Intermediate
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Backend