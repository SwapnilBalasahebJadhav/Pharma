import React from "react";
import "../../assets/Dashboard.css"
// import torrent1 from '../../assets/images/torrent1.jpeg'
import torrent2 from '../../assets/images/torrent2.jpeg'
// import torrent3 from '../../assets/images/torrent3.jpeg'
import { useNavigate } from "react-router-dom";
export default function Dashboard() {
    const navigate = useNavigate()
    const openForms = (vals) => {
        if(vals == 'OPD'){
            navigate('/OPDForm')  
        }
        else if(vals == 'BMD'){
            navigate('/bmdForm')  
        }
        else if(vals == 'RX'){
            navigate('/rxTracker')  
        }
        else if(vals == 'Poster'){
            navigate('/poster')  
        }
        else if(vals == 'POB'){
            navigate('/pob')  
        }
        else if(vals == 'Report'){
            navigate('/reports')  
        }
    }
    return (
        <>
            <div className="dashboardBody">
                <img src={torrent2} style={{height:'90px', width:'170px'}}/>
                <h3 className="headingTitle">Dashboard</h3>
                <div className="cardBody container-fluid">
                    <div className="row cardRow ">
                        <div className="col-6 col-md-4 col-lg-4 p-3">
                            <div className="cards opdCamp" onClick={() => openForms('OPD')}>
                                <h2>OPD<br/>Camp</h2>
                            </div>
                        </div>
                        <div className="col-6 col-md-4 col-lg-4 p-3 ">
                            <div className="cards BMDCamp" onClick={() => openForms('BMD')}>
                                <h2>BMD<br/>Camp</h2>
                            </div>
                        </div>
                        <div className="col-6 col-md-4 col-lg-4 p-3 ">
                            <div className="cards RXTracker" onClick={() => openForms('RX')}>
                                <h2>RX<br/>Tracker</h2>
                            </div>
                        </div>
                        <div className="col-6 col-md-4 col-lg-4 p-3 ">
                            <div className="cards Posters" onClick={() => openForms('Poster')}>
                                <h2>Posters</h2>
                            </div>
                        </div>
                        <div className="col-6 col-md-4 col-lg-4 p-3 ">
                            <div className="cards POB" onClick={() => openForms('POB')}>
                                <h2>POB</h2>
                            </div>
                        </div>
                        <div className="col-6 col-md-4 col-lg-4 p-3" onClick={() => openForms('Report')}>
                            <div className="cards Reports">
                                <h2>Reports</h2>
                            </div>
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