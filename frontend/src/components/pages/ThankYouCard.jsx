import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {saveThankyou} from "../../apis/restApi"
export default function ThankYouCard() {
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault();
        if( e.target.drName.value == ''){
            return alert("Please Fill All Fields")
        }
        const data = {
            drName: e.target.drName.value,
            createdBy: sessionStorage.getItem('email')
        };

        console.log('data',data)

        try {
            const response = await saveThankyou(data);
            alert("thankyou card data saved successfully");
            e.target.reset();
        } catch (error) {
            console.error(error);
            alert("Error saving thankyou card data");
        }
    };
    return (
        <>
            <div>
            <div className="headingDiv">
                    <IoIosArrowBack className="iconBack" style={{marginLeft:0}} onClick={() => window.history.back()}/>
                        <h1 className="ThankYouHeading">Thank You Card</h1>
                    </div>
            <div className="formBody">
                <form onSubmit={handleSubmit}>
                    <h4 className="mt-5" style={{fontFamily:'cursive'}}>Enter Doctor Details</h4>
                    <div className="container-fluid">
                        <div className="row form-row">
        
                            <div className="col-12 col-md-6 form-col mt-5">
                                <label className="form-label mt-3">Dr Name:</label>
                                <input type="text" className="form-input" name="drName" />
                            </div>
                        
                            <div className="col-12  mt-5">
                                <button className="form-button mt-3" type="submit" >Submit</button>
                            </div>
                            <div className="mt-5 mt-md-5 mt-lg-5">
                                <span style={{ color: '#0303a3', fontWeight: 'bold', fontSize: '22px' }}>SCHELCAL</span> <span style={{ color: 'orange', fontWeight: 'bold', fontSize: '22px' }}>HD</span> <span style={{ color: '#0303a3', fontWeight: 'bold', fontSize: '22px', marginLeft: '7px' }}>SCHELCAL</span> <span style={{ color: 'orange', fontWeight: 'bold', fontSize: '22px' }}>XT</span>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            </div>
          
        </>
    )
}