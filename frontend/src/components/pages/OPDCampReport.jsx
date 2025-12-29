import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import {downloadReportExcel} from "../../apis/restApi"
export default function OPDCampReport() {

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
                    <h3 className="ReportsHeading" style={{color:'rgba(43, 173, 178, 1)', fontFamily:'cursive'}}>OPD Camp <br/>Reports Download</h3>
                </div>

                <div className="container-fluid">
                    <div className="row form-row">

                       
                        <div className="col-12 col-md-6 mt-5">
                            <div className="reportCards reportCards3" onClick={() => downloadReport('opdcamp')}>
                                <span className="">Download Reports</span>
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
