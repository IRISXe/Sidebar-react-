import React from "react";
import ServiceHistory from "../components/Services/ServiceHistory";
import WorkOrder from "../components/Services/WorkOrder";
import ServiceTasks from "../components/Services/ServiceTasks";
import ServicePrograms from "../components/Services/ServicePrograms";

function ServicesPage() {
  return (
    <div>
      <h1>Services Management</h1>
      <ServiceHistory />
      <WorkOrder />
      <ServiceTasks />
      <ServicePrograms />
    </div>
  );
}

export default ServicesPage;
