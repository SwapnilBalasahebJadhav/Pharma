import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import axios from "axios";
import {downloadReportExcel} from "../../apis/restApi"

export default function PostersReport() {
const downloadReport = async (vals) => {
  const data = { tableName: vals };

  try {
    const response = await downloadReportExcel(data);

    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `${vals}.xlsx`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

  } catch (error) {
    console.error(error);
    alert("Excel download failed");
  }
};


    return (
        <div className="formBody">
            <form >
                <div>
                    <IoIosArrowBack
                        className="iconBack"
                        onClick={() => window.history.back()}
                        style={{marginTop:'-130px'}}
                    />
                    <h3 className="ReportsHeading" style={{color:'rgba(49, 77, 202, 1)', fontFamily:'cursive'}}>Posters<br/>Reports Download</h3>
                </div>

                <div className="container-fluid">
                    <div className="row form-row">
                        <div className="col-12 col-md-6 mt-5">
                            <div className="reportCards reportCards3 mt-2" onClick={() => downloadReport('birthday_card')}>
                                <span className="">Download Birthday Card Reports</span>
                            </div>
                            <div className="reportCards reportCards3 mt-2" onClick={() => downloadReport('thankyou_card')}>
                                <span className="">Download Thank You Card Reports</span>
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
