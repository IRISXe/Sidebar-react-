export const fetchServiceHistory = async () => {
    return [
      { id: 1, service: "Oil Change", date: "2024-03-01", status: "Completed" },
      { id: 2, service: "Brake Check", date: "2024-02-15", status: "Pending" },
    ];
  };
  
  export const fetchWorkOrders = async () => {
    return [
      { id: 1, task: "Engine Repair", assignedTo: "John Doe", status: "In Progress" },
      { id: 2, task: "Battery Replacement", assignedTo: "Jane Smith", status: "Completed" },
    ];
  };
  
  export const fetchServiceTasks = async () => {
    return [
      { id: 1, name: "Check Fluids", status: "Completed" },
      { id: 2, name: "Rotate Tires", status: "Pending" },
    ];
  };
  
  export const fetchServicePrograms = async () => {
    return [
      { id: 1, name: "Monthly Maintenance", frequency: "Every Month" },
      { id: 2, name: "Annual Inspection", frequency: "Once a Year" },
    ];
  };
  