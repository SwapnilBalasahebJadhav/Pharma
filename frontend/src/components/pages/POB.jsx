import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import {savePOB} from "../../apis/restApi"
export default function POB() {
    const handleSubmit = async (e) => {
        e.preventDefault();
        if(e.target.chemistName.value == '' || e.target.chemistPlace.value == '' || e.target.associatedDrName.value == '' || e.target.associatedDrCode.value == '' || e.target.brand1.value == '' || e.target.brandquantity.value == ''){
            return alert("Please Fill All Fields")
        }
        const data = {
            chemistName: e.target.chemistName.value,
            chemistPlace: e.target.chemistPlace.value,
            associatedDrName: e.target.associatedDrName.value,
            associatedDrCode: e.target.associatedDrCode.value,
            brand1: e.target.brand1.value,
            brandquantity: e.target.brandquantity.value,
            createdBy:sessionStorage.getItem('email')
        };

        console.log('data',data)
        try {
            const response = await savePOB(data);
            alert("POB card data saved successfully");
            e.target.reset();
        } catch (error) {
            console.error(error);
            alert("Error saving POB card data");
        }
    };
    return (
        <>
            <div className="formBody">
                <form onSubmit={handleSubmit}>  
                    <div>
                    <IoIosArrowBack className="iconBack" onClick={() => window.history.back()}/>
                        <h1 className="formHeading" style={{color:'rgb(28, 54, 110)'}}>POB</h1>
                    </div>
                    <div className="container-fluid">
                        <div className="row form-row">
                            <div className="col-12 col-md-6 form-col mt-3">
                                <label className="form-label">Chemist Name:</label>
                                <input type="text" className="form-input" name="chemistName" />
                            </div>
                            <div className="col-12 col-md-6 form-col mt-3">
                                <label className="form-label">Chemist Place:</label>
                                <input type="text" className="form-input" name="chemistPlace" />
                            </div>
                            <div className="col-12 col-md-6 form-col mt-3">
                                <label className="form-label">Associated Dr Name:</label>
                                <input type="text" className="form-input" name="associatedDrName" />
                            </div>
                            <div className="col-12 col-md-6 form-col mt-3">
                                <label className="form-label">Associated Dr Code:</label>
                                <input type="text" className="form-input" name="associatedDrCode" />
                            </div>
                            <div className="col-12 col-md-6 form-col mt-3">
                                <label className="form-label">Brand 1:</label>
                                <input type="text" className="form-input" name="brand1" />
                            </div>
                            <div className="col-12 col-md-6 form-col mt-3">
                                <label className="form-label">Brand Quantity(Units/Strips):</label>
                                <input type="text" className="form-input" name="brandquantity" />
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
        </>
    )
}