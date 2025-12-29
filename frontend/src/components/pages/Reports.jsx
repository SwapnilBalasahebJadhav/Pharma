import React from "react";
import { IoIosArrowBack } from "react-icons/io";

import { useNavigate } from "react-router-dom";
export default function Reports() {
    const navigate = useNavigate()
    const openForms = (vals) => {
        if(vals == 'OPD'){
            navigate('/OPDCampReport')  
        }
        else if(vals == 'BMD'){
            navigate('/BmdCampReport')  
        }
        else if(vals == 'RX'){
            navigate('/RXTrackerReport')  
        }
        else if(vals == 'Poster'){
            navigate('/PostersReport')  
        }
        else if(vals == 'POB'){
            navigate('/POBReport')  
        }

    }
    return (
        <>
            <div className="dashboardBody">
                   <IoIosArrowBack
                                        className="iconBack mt-3"
                                        onClick={() => window.history.back()}
                                    />
                <h3 className="headingTitleReport">Reports</h3>
                <div className="cardBody container-fluid">
                    <div className="row cardRow ">
                        <div className="col-6 col-md-4 col-lg-4 p-3">
                            <div className="cards reportsDiv" onClick={() => openForms('OPD')}>
                                <h3>OPD<br/>Camp</h3>
                            </div>
                        </div>
                        <div className="col-6 col-md-4 col-lg-4 p-3 ">
                            <div className="cards reportsDiv" onClick={() => openForms('BMD')}>
                                <h3>BMD<br/>Camp</h3>
                            </div>
                        </div>
                        <div className="col-6 col-md-4 col-lg-4 p-3 ">
                            <div className="cards reportsDiv" onClick={() => openForms('RX')}>
                                <h3>RX<br/>Tracker</h3>
                            </div>
                        </div>
                        <div className="col-6 col-md-4 col-lg-4 p-3 ">
                            <div className="cards reportsDiv" onClick={() => openForms('Poster')}>
                                <h3>Posters</h3>
                            </div>
                        </div>
<div className="col-6 col-md-4 col-lg-4 p-3 hide-mobile">
    <div className="cards reportsDiv" onClick={() => openForms('POB')}>
        <h3>POB</h3>
    </div>
</div>

                    </div>
                     <div className="lastPOb p-3 hide-desktop">
    <div className="cards reportsDiv" onClick={() => openForms('POB')}>
        <h3>POB</h3>
    </div>
</div>
                    <div className="mt-md-3 mt-lg-3">
                    <span style={{color:'#0303a3', fontWeight:'bold', fontSize:'22px'}}>SCHELCAL</span> <span style={{color:'orange', fontWeight:'bold', fontSize:'22px'}}>HD</span> <span style={{color:'#0303a3', fontWeight:'bold', fontSize:'22px',marginLeft:'7px'}}>SCHELCAL</span> <span style={{color:'orange', fontWeight:'bold', fontSize:'22px'}}>XT</span> 
                    </div>
                    
                </div>
            </div>


        </>
    )
}