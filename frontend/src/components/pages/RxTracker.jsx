import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { CiCirclePlus } from "react-icons/ci";
import {saveRX} from '../../apis/restApi'
export default function RxTracker() {
    const [brands, setBrands] = useState(["", ""]);
    const [rxPhoto, setRxPhoto] = useState(null);

    const addBrand = () => {
        setBrands([...brands, ""]);
    };

    const handleBrandChange = (index, value) => {
        const updatedBrands = [...brands];
        updatedBrands[index] = value;
        setBrands(updatedBrands);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!e.target.drName.value) {
            return alert("Please fill Doctor Name");
        }
        const formData = new FormData();
        formData.append("drName", e.target.drName.value);
        formData.append("createdBy", sessionStorage.getItem("email"));
        formData.append("brands", JSON.stringify(brands));
        console.log('rxPhoto',rxPhoto)
        if (rxPhoto) {
            formData.append("rxPhoto", rxPhoto);
        }
        try {
            const response = await saveRX(formData)
            alert("RX data saved successfully");
            e.target.reset();
            setBrands(["", ""]);
            setRxPhoto(null);
        } catch (error) {
            console.error(error);
            alert("Error saving RX data");
        }
    };

    return (
        <div className="formBody">
            <form onSubmit={handleSubmit}>
                <div>
                    <IoIosArrowBack
                        className="iconBack"
                        onClick={() => window.history.back()}
                    />
                    <h1 className="formHeading" style={{color:'rgb(153, 95, 45)'}}>RX Tracker</h1>
                </div>

                <div className="container-fluid">
                    <div className="row form-row">
                        {/* Doctor Name */}
                        <div className="col-12 col-md-6 mt-3">
                            <label className="form-label">Dr Name:</label>
                            <input type="text" className="form-input" name="drName" />
                        </div>

                        {/* Dynamic Brands */}
                        {brands.map((brand, index) => (
                            <div key={index} className="col-12 col-md-6 mt-3">
                                <label className="form-label">
                                    Brand {index + 1}:
                                </label>
                                <input
                                    type="text"
                                    className="form-input"
                                    value={brand}
                                    onChange={(e) =>
                                        handleBrandChange(index, e.target.value)
                                    }
                                />
                            </div>
                        ))}

                        {/* Add Brand */}
                        <div className="col-12 col-md-6 mt-3">
                            <div className="addBrand" onClick={addBrand}>
                                <span>
                                    Add Brand{" "}
                                    <CiCirclePlus style={{ fontSize: "20px" }} />
                                </span>
                            </div>
                        </div>

                        {/* Upload RX Photo */}
                        <div className="col-12 col-md-6 mt-3">
                            <label className="addPhoto">
                                Upload Rx Photo
                                <input
                                    type="file"
                                    accept="image/*"
                                    hidden
                                    onChange={(e) => setRxPhoto(e.target.files[0])}
                                />
                            </label>
                        </div>

                        {/* Submit */}
                        <div className="col-12 mt-3">
                            <button className="form-button" type="submit">
                                Submit
                            </button>
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
