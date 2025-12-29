import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Dashboard from "./components/pages/Dashboard";
import OPDForm from "./components/pages/OPDForm";
import BMDForm from "./components/pages/BMDForm";
import RxTracker from "./components/pages/RxTracker";
import Poster from "./components/pages/Poster";
import POB from "./components/pages/POB";
import BirthdayCard from "./components/pages/BirthdayCard";
import ThankYouCard from "./components/pages/ThankYouCard";
import Reports from "./components/pages/Reports";
import OPDCampReport from "./components/pages/OPDCampReport";
import BmdCampReport from "./components/pages/BmdCampReport";
import RXTrackerReport from "./components/pages/RXTrackerReport";
import PostersReport from "./components/pages/PostersReport";
import POBReport from "./components/pages/POBReport";
import Login from "./components/pages/Login";
import { Navigate } from "react-router-dom";

import "./assets/base.css";

const ProtectedRoute = ({ children }) => {
  const token = sessionStorage.getItem("token");
  const user = sessionStorage.getItem("user");

  if (!token) {
    return <Navigate to="/" replace />;
  }

  return children;
};

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Route */}

        <Route path="/" element={<Login />} />

        {/* Protected Routes */}
        <Route path="/dashboard" element={ <ProtectedRoute>   <Dashboard /> </ProtectedRoute> }/>

        <Route path="/opdForm" element={<ProtectedRoute><OPDForm /></ProtectedRoute>} />
        <Route path="/bmdForm" element={<ProtectedRoute><BMDForm /></ProtectedRoute>} />
        <Route path="/rxTracker" element={<ProtectedRoute><RxTracker /></ProtectedRoute>} />
        <Route path="/poster" element={<ProtectedRoute><Poster /></ProtectedRoute>} />
        <Route path="/pob" element={<ProtectedRoute><POB /></ProtectedRoute>} />
        <Route path="/birthday" element={<ProtectedRoute><BirthdayCard /></ProtectedRoute>} />
        <Route path="/thankYouCard" element={<ProtectedRoute><ThankYouCard /></ProtectedRoute>} />
        <Route path="/reports" element={<ProtectedRoute><Reports /></ProtectedRoute>} />

        <Route path="/OPDCampReport" element={<ProtectedRoute><OPDCampReport /></ProtectedRoute>} />
        <Route path="/BmdCampReport" element={<ProtectedRoute><BmdCampReport /></ProtectedRoute>} />
        <Route path="/RXTrackerReport" element={<ProtectedRoute><RXTrackerReport /></ProtectedRoute>} />
        <Route path="/PostersReport" element={<ProtectedRoute><PostersReport /></ProtectedRoute>} />
        <Route path="/POBReport" element={<ProtectedRoute><POBReport /></ProtectedRoute>} />
      </Routes>
    </Router>
  );
}

export default App;
