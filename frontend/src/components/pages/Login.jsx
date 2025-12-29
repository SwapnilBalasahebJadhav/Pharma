import React, {useState} from "react";
import "../../assets/Dashboard.css"
import torrent2 from '../../assets/images/torrent2.jpeg'
import { FaUser, FaKey } from "react-icons/fa";
import {loginUser} from '../../apis/restApi'
import { useNavigate } from "react-router-dom";
import loginImg from '../../assets/images/loginImg.jpeg'

export default function Login() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    userName: "",
    password: ""
  });
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

   const handleSubmit = async (e) =>{
      e.preventDefault();
      try{
          const response = await loginUser(formData)
          sessionStorage.setItem('token',response.token)
          sessionStorage.setItem('email',response.user.email)
          if (response.token) {
            navigate("/dashboard");
          }
      }
      catch(error){
        alert('Invalid user pass')
        console.log("Eroor during login",error)
      }
   }
    return (
        <>
            <div className="dashboardBody">
                <img alt={``} src={torrent2} style={{height:'90px', width:'170px'}}/>
                <form onSubmit={handleSubmit}>
                <div className="cardBody container-fluid">
                    <div className="row form-row p-4">
                          <div className="col-12 col-md-6 form-col mt-4">
                              <label
                                className="form-label"
                                style={{ fontFamily: "sans-serif", color: "blue", marginLeft: "15px" }}
                              >
                                User Name:
                              </label>
                            
                              <div style={{ position: "relative" }}>
                                <FaUser
                                  style={{ position: "absolute", left: "10px", top: "50%", transform: "translateY(-50%)", color: "#000",
                                  }}
                                />
                                <input type="text" value={formData.userName} onChange={handleChange} className="form-input" name="userName" placeholder="Enter Your Username Here" style={{ paddingLeft: "35px" }}/>
                              </div>
                            </div>
                            
                            <div className="col-12 col-md-6 form-col mt-4">
                              <label
                                className="form-label"
                                style={{ fontFamily: "sans-serif", color: "blue", marginLeft: "15px" }}
                              >
                                Password:
                              </label>
                            
                              <div style={{ position: "relative" }}>
                                <FaKey
                                  style={{ position: "absolute", left: "10px", top: "50%", transform: "translateY(-50%)", color: "#000", }}
                                />
                                <input type="password" value={formData.password} onChange={handleChange} className="form-input" name="password" placeholder="Enter Your Password Here" style={{ paddingLeft: "35px" }}
                                />
                              </div>
                            </div>        
                            <img src={loginImg} className="mt-3 ml-3"   style={{height:'140px', width:'90%'}}  />      
                            <div className="col-12  mt-5">
                                <button className="form-button" type="submit" >Submit</button>
                            </div>
                            
                        </div>
                    <div className="mt-md-3 mt-lg-3">
                    <span style={{color:'#0303a3', fontWeight:'bold', fontSize:'22px'}}>SCHELCAL</span> <span style={{color:'orange', fontWeight:'bold', fontSize:'22px'}}>HD</span> <span style={{color:'#0303a3', fontWeight:'bold', fontSize:'22px',marginLeft:'7px'}}>SCHELCAL</span> <span style={{color:'orange', fontWeight:'bold', fontSize:'22px'}}>XT</span> 
                    </div>
                    
                </div>
                </form>
            </div>


        </>
    )
}