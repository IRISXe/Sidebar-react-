import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidebar";
import ServicesPage from "./pages/ServicesPage";
import ServiceHistory from "./components/Services/ServiceHistory";
import WorkOrder from "./components/Services/WorkOrder";
import ServiceTasks from "./components/Services/ServiceTasks";
import ServicePrograms from "./components/Services/ServicePrograms";
import { ServiceProvider } from "./context/ServiceContext";

function App() {
  return (
    <ServiceProvider>
      <Router>
        <div style={{ display: "flex" }}>
          {/* Sidebar */}
          <Sidebar />

          {/* Main Content */}
          <div style={{ flexGrow: 1, padding: "20px" }}>
            <Routes>
              <Route path="/" element={<ServicesPage />} />
              <Route path="/service-history" element={<ServiceHistory />} />
              <Route path="/work-order" element={<WorkOrder />} />
              <Route path="/service-tasks" element={<ServiceTasks />} />
              <Route path="/service-programs" element={<ServicePrograms />} />
            </Routes>
          </div>
        </div>
      </Router>
    </ServiceProvider>
  );
}

export default App;
