import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
export default function Poster() {
    const navigate = useNavigate()
    const openForms = (vals) => {
        if(vals === 'birthday'){
            navigate('/birthday')  
        }
        else if(vals === 'thankYou'){
            navigate('/thankYouCard')  
        }
       
    }


    return (
        <div className="formBody">
            <form >
                <div>
                    <IoIosArrowBack
                        className="iconBack"
                        onClick={() => window.history.back()}
                    />
                    <h1 className="formHeading" style={{color:'rgb(24, 94, 5)'}}>Posters</h1>
                </div>

                <div className="container-fluid">
                    <div className="row form-row">

                        <div className="col-12 col-md-6 mt-5">
                            <div className="posterCards posterCards1" onClick={() => openForms('birthday')}>
                                <span className="">Birthday Card</span>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 mt-5">
                            <div className="posterCards posterCards2">
                                <span className="">Brand Request Card</span>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 mt-5">
                            <div className="posterCards posterCards3">
                                <span className="">Chemist Availibility Card</span>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 mt-5">
                            <div className="posterCards posterCards4" onClick={() => openForms('thankYou')}>
                                <span className="">Thank You Card</span>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 mt-5">
                            <div className="posterCards posterCards5">
                                <span className="">Festival Card</span>
                            </div>
                        </div>

                      
                        <div className="mt-2 mt-md-3 mt-lg-3 brandFooter">
                                <span style={{ color: '#0303a3', fontWeight: 'bold', fontSize: '22px' }}>SCHELCAL</span> <span style={{ color: 'orange', fontWeight: 'bold', fontSize: '22px' }}>HD</span> <span style={{ color: '#0303a3', fontWeight: 'bold', fontSize: '22px', marginLeft: '7px' }}>SCHELCAL</span> <span style={{ color: 'orange', fontWeight: 'bold', fontSize: '22px' }}>XT</span>
                            </div>
                    </div>
                </div>
            </form>
        </div>
    );
}
