import React, {useState} from "react";
import { IoIosArrowBack } from "react-icons/io";
import {saveBirthday} from '../../apis/restApi'
export default function BirthdayCard() {
    const [photo, setPhoto] = useState(null);
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!e.target.drName.value) {
            return alert("Please fill Doctor Name");
        }

        const formData = new FormData();
        formData.append("drName", e.target.drName.value);
        formData.append("createdBy", sessionStorage.getItem("email"));
        console.log('photo',photo)
        if (photo) {
            formData.append("photo", photo);
        }

        try {
            const response = await saveBirthday(formData);
            alert("Birthday data saved successfully");
            e.target.reset();
        } catch (error) {
            console.error(error);
            alert("Error saving Birthday data");
        }
    };
    return (
        <>
            <div>
            <div className="headingDiv">
                    <IoIosArrowBack className="iconBack" style={{marginLeft:0}} onClick={() => window.history.back()}/>
                        <h1 className="BirthdayHeading">Birthday Card</h1>
                    </div>
            <div className="formBody">
                <form onSubmit={handleSubmit}>
                    <h4 className="mt-4" style={{fontFamily:'cursive'}}>Enter Doctor Details</h4>
                    <div className="container-fluid">
                        <div className="row form-row">
                           
                            <div className="col-12 col-md-6 form-col mt-3">
                                <label className="form-label">Dr Name:</label>
                                <input type="text" className="form-input" name="drName" />
                            </div>
                           
                            <div className="col-12 col-md-6 form-col mt-3">
                                <label className="form-label">Upload Photo</label>
                                <input type="file"  className="form-input
                                " style={{backgroundColor:'white'}} name="noOfRxGenerated" onChange={(e) => setPhoto(e.target.files[0])}/>
                            </div>
                            <div className="col-12  mt-3">
                                <button className="form-button" type="submit" >Submit</button>
                            </div>
                            <div className="mt-2 mt-md-3 mt-lg-3">
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