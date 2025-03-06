import React, { useState } from "react";
import { Table, Button, Card, Form, Image, Dropdown, Pagination, Collapse, Row, Col } from "react-bootstrap";
import { DateRangePicker } from "react-date-range";
import { parse } from "date-fns";
import "react-date-range/dist/styles.css"; // Main style file
import "react-date-range/dist/theme/default.css"; // Theme CSS file

const serviceData = [
  {
    id: 1,
    vehicle: "2018 Toyota Prius",
    vehicleImage: "https://via.placeholder.com/50",
    mileage: "11,278 mi",
    date: "12/01/2024 7:34pm",
    serviceTasks: ["Engine Oil & Filter Replacement", "Engine Air Filter Replacement"],
    cost: "$94.88",
    status: "completed",
    serviceProvider: "Quick Lube",
    notes: "Regular maintenance",
    attachments: ["invoice.pdf"],
  },
  {
    id: 2,
    vehicle: "2016 Ford F-150",
    vehicleImage: "https://via.placeholder.com/50",
    mileage: "40,115 mi",
    date: "08/18/2024 6:25pm",
    serviceTasks: ["Engine Oil & Filter Replacement", "Tire Rotation"],
    cost: "$70.99",
    status: "completed",
    serviceProvider: "Tire Center",
    notes: "Tires rotated and balanced",
    attachments: [],
  },
  {
    id: 3,
    vehicle: "2014 Chevrolet Express Cargo",
    vehicleImage: "https://via.placeholder.com/50",
    mileage: "134,358 mi",
    date: "02/03/2025",
    serviceTasks: ["Pending"],
    cost: "TBD",
    status: "pending",
    serviceProvider: "N/A",
    notes: "Awaiting parts",
    attachments: [],
  },
];

function ServiceHistory() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [sortColumn, setSortColumn] = useState("date");
  const [sortOrder, setSortOrder] = useState("desc");
  const [expandedRow, setExpandedRow] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedServices, setSelectedServices] = useState([]);
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const itemsPerPage = 5;

  // Handle sorting
  const handleSort = (column) => {
    const order = sortColumn === column && sortOrder === "asc" ? "desc" : "asc";
    setSortColumn(column);
    setSortOrder(order);
  };

  // Sorting logic
  const sortedServices = [...serviceData].sort((a, b) => {
    if (sortColumn === "date") {
      return sortOrder === "asc"
        ? new Date(a.date) - new Date(b.date)
        : new Date(b.date) - new Date(a.date);
    } else if (sortColumn === "cost") {
      return sortOrder === "asc"
        ? parseFloat(a.cost.replace("$", "")) - parseFloat(b.cost.replace("$", ""))
        : parseFloat(b.cost.replace("$", "")) - parseFloat(a.cost.replace("$", ""));
    }
    return 0;
  });

  // Filtering logic
  const filteredServices = sortedServices.filter((service) => {
    const matchesSearch =
      service.vehicle.toLowerCase().includes(search.toLowerCase()) ||
      service.serviceTasks.some((task) => task.toLowerCase().includes(search.toLowerCase()));

    const matchesFilter = filter === "all" || service.status === filter;
    const serviceDate = new Date(service.date);
    const matchesDateRange =
      serviceDate >= dateRange[0].startDate && serviceDate <= dateRange[0].endDate;
    return matchesSearch && matchesFilter && matchesDateRange;
  });

  // Pagination logic
  const paginatedServices = filteredServices.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  // Handle bulk selection
  const handleBulkSelection = (e, service) => {
    if (e.target.checked) {
      setSelectedServices([...selectedServices, service.id]);
    } else {
      setSelectedServices(selectedServices.filter((id) => id !== service.id));
    }
  };

  return (
    <div className="container py-3">
      {/* Top Navigation */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4 className="fw-bold">🚗 Service History</h4>
        <div className="d-flex gap-2">
          <Button variant="outline-secondary" disabled={selectedServices.length === 0}>
            Export Selected
          </Button>
          <Button variant="primary">+ Add Service Entry</Button>
        </div>
      </div>

      {/* Search & Filters */}
      <Row className="mb-3">
        <Col md={4}>
          <Form.Control
            type="text"
            placeholder="🔍 Search by vehicle or service..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="p-2"
          />
        </Col>
        <Col md={4}>
          <DateRangePicker
            ranges={dateRange}
            onChange={(ranges) => setDateRange([ranges.selection])}
          />
        </Col>
        <Col md={4} className="d-flex gap-2">
          <Button variant={filter === "all" ? "primary" : "outline-secondary"} onClick={() => setFilter("all")}>
            All
          </Button>
          <Button variant={filter === "completed" ? "primary" : "outline-secondary"} onClick={() => setFilter("completed")}>
            ✅ Completed
          </Button>
          <Button variant={filter === "pending" ? "primary" : "outline-secondary"} onClick={() => setFilter("pending")}>
            ⏳ Pending
          </Button>
        </Col>
      </Row>

      {/* Table */}
      <Card className="shadow-lg">
        <div className="table-responsive">
          <Table className="table-borderless align-middle">
            <thead className="border-bottom bg-light sticky-top">
              <tr>
                <th>
                  <Form.Check
                    type="checkbox"
                    checked={selectedServices.length === filteredServices.length}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSelectedServices(filteredServices.map((service) => service.id));
                      } else {
                        setSelectedServices([]);
                      }
                    }}
                  />
                </th>
                <th>Vehicle</th>
                <th onClick={() => handleSort("date")} style={{ cursor: "pointer" }}>
                  Actual Completion Date {sortColumn === "date" && (sortOrder === "asc" ? "▲" : "▼")}
                </th>
                <th>Meter</th>
                <th>Service Tasks</th>
                <th onClick={() => handleSort("cost")} style={{ cursor: "pointer" }}>
                  Total {sortColumn === "cost" && (sortOrder === "asc" ? "▲" : "▼")}
                </th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {paginatedServices.length > 0 ? (
                paginatedServices.map((service) => (
                  <React.Fragment key={service.id}>
                    <tr className="border-bottom">
                      <td>
                        <Form.Check
                          type="checkbox"
                          checked={selectedServices.includes(service.id)}
                          onChange={(e) => handleBulkSelection(e, service)}
                        />
                      </td>
                      <td className="d-flex align-items-center">
                        <span className={`status-dot me-2 ${service.status}`} />
                        <Image src={service.vehicleImage} rounded width="40" height="40" className="me-2" />
                        <div>
                          <a href="#" className="text-decoration-none fw-bold">
                            {service.vehicle}
                          </a>
                        </div>
                      </td>
                      <td className="text-muted">{service.date}</td>
                      <td>{service.mileage}</td>
                      <td>
                        <Button
                          variant="link"
                          className="p-0"
                          onClick={() => setExpandedRow(expandedRow === service.id ? null : service.id)}
                        >
                          {service.serviceTasks.length} tasks ⬇
                        </Button>
                        <Collapse in={expandedRow === service.id}>
                          <div className="mt-2 text-muted">
                            {service.serviceTasks.map((task, index) => (
                              <div key={index}>- {task}</div>
                            ))}
                          </div>
                        </Collapse>
                      </td>
                      <td className="fw-bold">{service.cost}</td>
                      <td>
                        <Dropdown>
                          <Dropdown.Toggle variant="outline-secondary" size="sm">
                            ⚙️
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            <Dropdown.Item href="#">Edit</Dropdown.Item>
                            <Dropdown.Item href="#">Delete</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </td>
                    </tr>
                  </React.Fragment>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="text-center text-muted py-3">
                    No matching records found
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
        </div>
      </Card>

      {/* Pagination */}
      <Pagination className="mt-3 d-flex justify-content-center">
        <Pagination.Prev
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        />
        <Pagination.Item>{currentPage}</Pagination.Item>
        <Pagination.Next
          onClick={() => setCurrentPage((prev) => prev + 1)}
          disabled={currentPage * itemsPerPage >= filteredServices.length}
        />
      </Pagination>
    </div>
  );
}

export default ServiceHistory;