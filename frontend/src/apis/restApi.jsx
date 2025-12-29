import axios from "axios";

const backendUrl = process.env.REACT_APP_BACK_API;

console.log('backendUrl',backendUrl)
export async function loginUser(formData) {
  try {
    const response = await axios.post(
      `${backendUrl}/api/loginUser`,
      formData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  } catch (err) {
    console.error("Login error:", err.response?.data || err.message);
    throw err;
  }
}

export async function saveOPD(formData) {
  try {
    const response = await axios.post(
      `${backendUrl}/api/saveOPD`,
      formData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    console.log("Save OPD response:", response.data);
    return response.data;
  } catch (err) {
    console.error("Save OPD error:", err.response?.data || err.message);
    throw err;
  }
}

export async function saveBMDCamp(formData) {
  try {
    const response = await axios.post(
      `${backendUrl}/api/saveBMDCamp`,
      formData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    console.log("Save OPD response:", response.data);
    return response.data;
  } catch (err) {
    console.error("Save OPD error:", err.response?.data || err.message);
    throw err;
  }
}

export async function saveRX(formData) {
  try {
    const response = await axios.post(
      `${backendUrl}/api/saveRX`,
      formData
    );

    return response.data;
  } catch (err) {
    console.error("Save RX error:", err.response?.data || err.message);
    throw err;
  }
}

export async function saveBirthday(formData) {
  try {
    const response = await axios.post(
      `${backendUrl}/api/saveBirthday`,
      formData
    );
    return response.data;
  } catch (err) {
    console.error("Save Birthday error:", err.response?.data || err.message);
    throw err;
  }
}
export async function saveThankyou(formData) {
  try {
    const response = await axios.post(
      `${backendUrl}/api/saveThankyou`,
      formData
    );
    return response.data;
  } catch (err) {
    console.error("Save Birthday error:", err.response?.data || err.message);
    throw err;
  }
}

export async function savePOB(formData) {
  try {
    const response = await axios.post(
      `${backendUrl}/api/savePOB`,
      formData
    );
    return response.data;
  } catch (err) {
    console.error("Save poster error:", err.response?.data || err.message);
    throw err;
  }
}
export async function downloadReportExcel(data) {
  try {
    const response = await axios.post(
      `${backendUrl}/api/downloadReportExcel`,
      data,
      { responseType: "blob" }
    );
    return response;
  } catch (err) {
    console.error("Excel download error:", err.response?.data || err.message);
    throw err;
  }
}
