import React, {useState} from "react";
import { IoIosArrowBack } from "react-icons/io";
import {saveOPD} from "../../apis/restApi"

export default function OPDForm() {
const [rxGenerated, setRxGenerated] = useState("");

const handleSubmit = async (e) => {
  e.preventDefault();

  if (
    e.target.advaitNo.value.trim() === "" ||
    e.target.drName.value.trim() === "" ||
    e.target.place.value.trim() === "" ||
    e.target.noOfPetient.value === "" ||
    rxGenerated === ""
  ) {
    return alert("Please fill all required fields");
  }

  if (rxGenerated === "Yes" && e.target.noOfRxGenerated.value === "") {
    return alert("Please enter number of Rx generated");
  }

  const data = {
    advaitNo: e.target.advaitNo.value.trim(),
    drName: e.target.drName.value.trim(),
    place: e.target.place.value.trim(),
    noOfPetient: Number(e.target.noOfPetient.value),
    rxGenerated: rxGenerated,
    noOfRxGenerated:
      rxGenerated === "Yes"
        ? Number(e.target.noOfRxGenerated.value)
        : 0,
    createdBy: sessionStorage.getItem("email")
  };

  try {
    await saveOPD(data);
    alert("OPD data saved successfully");
    e.target.reset();
    setRxGenerated("");
  } catch (error) {
    alert("Error saving OPD data");
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
                    <h1 className="formHeading">OPD Camp</h1>
                </div>

                <div className="container-fluid">
                    <div className="row form-row">

                        <div className="col-12 col-md-6 mt-3">
                            <label className="form-label">Advait No:</label>
                            <input type="text" className="form-input" name="advaitNo" />
                        </div>

                        <div className="col-12 col-md-6 mt-3">
                            <label className="form-label">Dr Name:</label>
                            <input type="text" className="form-input" name="drName" />
                        </div>

                        <div className="col-12 col-md-6 mt-3">
                            <label className="form-label">Place:</label>
                            <input type="text" className="form-input" name="place" />
                        </div>

                        <div className="col-12 col-md-6 mt-3">
                            <label className="form-label">No of patient in camp:</label>
                            <input type="text" className="form-input" name="noOfPetient" />
                        </div>

                         <div className="col-12 col-md-6 mt-3">
                           <label className="form-label">Rx generated:</label>
                           <select
                             className="form-input"
                             value={rxGenerated}
                             onChange={(e) => setRxGenerated(e.target.value)}
                           >
                             <option value="">Select</option>
                             <option value="Yes">Yes</option>
                             <option value="No">No</option>
                           </select>
                         </div>

                        {rxGenerated === "Yes" && (
                            <div className="col-12 col-md-6 mt-3">
                              <label className="form-label">No of Rx generated:</label>
                              <input
                                type="number"
                                className="form-input"
                                name="noOfRxGenerated"
                                min="0"
                              />
                            </div>
                        )}
                        <div className="col-12 mt-3">
                            <button className="form-button" type="submit">
                                Submit
                            </button>
                        </div>
                        <div className="mt-2 mt-md-3 mt-lg-3">
                                <span style={{ color: '#0303a3', fontWeight: 'bold', fontSize: '22px' }}>SCHELCAL</span> <span style={{ color: 'orange', fontWeight: 'bold', fontSize: '22px' }}>HD</span> <span style={{ color: '#0303a3', fontWeight: 'bold', fontSize: '22px', marginLeft: '7px' }}>SCHELCAL</span> <span style={{ color: 'orange', fontWeight: 'bold', fontSize: '22px' }}>XT</span>
                            </div>
                    </div>
                </div>
            </form>
        </div>
    );
}
