import React, { useState } from 'react';
import { Nav, Navbar, Button } from 'react-bootstrap';
import {
  FaTachometerAlt, FaCar, FaTools, FaBars, FaChevronLeft, FaClipboardCheck, FaExclamationTriangle,
  FaBell, FaWrench, FaAddressBook, FaBuilding, FaChevronDown, FaGasPump, FaCogs,
  FaMapMarkerAlt, FaFileAlt, FaPlug, FaChartBar
} from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [vehiclesOpen, setVehiclesOpen] = useState(false);

  return (
    <div style={{ display: 'flex', height: '100vh', backgroundColor: '#f8f9fa' }}>
      {/* Sidebar */}
      <div
        style={{
          width: collapsed ? '80px' : '260px', // Increased width for better visibility
          transition: 'width 0.3s ease-in-out',
          backgroundColor: "#2f4e7d",
          color: '#fff',
          display: 'flex',
          flexDirection: 'column',
          padding: '10px',
          boxShadow: '2px 0 5px rgba(91, 79, 216, 0.2)',
          overflowY: 'auto',
        }}
      >
        {/* Toggle Button */}
        <Button
          variant="outline-light"
          onClick={() => setCollapsed(!collapsed)}
          className="d-flex align-items-center justify-content-center"
          style={{ marginBottom: '10px', width: '100%' }}
        >
          {collapsed ? <FaBars /> : <FaChevronLeft />}
        </Button>

        {/* Navigation */}
        <Nav defaultActiveKey="#dashboard" className="flex-column mt-2">
          <Nav.Item className="d-flex align-items-center py-2">
            <FaTachometerAlt className="me-2" />
            {!collapsed && <Nav.Link href="dashboard" className="text-white p-0">Dashboard</Nav.Link>}
          </Nav.Item>

          {/* Vehicles Dropdown */}
          <Nav.Item
            className="d-flex align-items-center py-2"
            style={{ cursor: 'pointer' }}
            onClick={() => setVehiclesOpen(!vehiclesOpen)}
          >
            <FaCar className="me-2" />
            {!collapsed && (
              <>
                <span className="flex-grow-1">Vehicles</span>
                <FaChevronDown style={{ transition: 'transform 0.3s', transform: vehiclesOpen ? 'rotate(180deg)' : 'rotate(0deg)' }} />
              </>
            )}
          </Nav.Item>

          {vehiclesOpen && !collapsed && (
            <div style={{ paddingLeft: '20px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              <Nav.Item className="py-1">
                <Nav.Link href="#vehicles-list" className="text-white p-0" style={{ display: 'block' }}>🚗 Vehicles List</Nav.Link>
              </Nav.Item>
              <Nav.Item className="py-1">
                <Nav.Link href="#vehicles-assignments" className="text-white p-0" style={{ display: 'block' }}>📌 Assignments</Nav.Link>
              </Nav.Item>
              <Nav.Item className="py-1">
                <Nav.Link href="#meter-history" className="text-white p-0" style={{ display: 'block' }}>📏 Meter History</Nav.Link>
              </Nav.Item>
              <Nav.Item className="py-1">
                <Nav.Link href="#expense-history" className="text-white p-0" style={{ display: 'block' }}>💰 Expense History</Nav.Link>
              </Nav.Item>
              <Nav.Item className="py-1">
                <Nav.Link href="#replacement-analysis" className="text-white p-0" style={{ display: 'block' }}>🔄 Replacement Analysis</Nav.Link>
              </Nav.Item>
            </div>
          )}

          <Nav.Item className="d-flex align-items-center py-2">
            <FaTools className="me-2" />
            {!collapsed && <Nav.Link href="#maintenance" className="text-white p-0">Maintenance</Nav.Link>}
          </Nav.Item>

          <Nav.Item className="d-flex align-items-center py-2">
            <FaClipboardCheck className="me-2" />
            {!collapsed && <Nav.Link href="#inspections" className="text-white p-0">Inspections</Nav.Link>}
          </Nav.Item>

          <Nav.Item className="d-flex align-items-center py-2">
            <FaExclamationTriangle className="me-2" />
            {!collapsed && <Nav.Link href="#issues" className="text-white p-0">Issues</Nav.Link>}
          </Nav.Item>

          <Nav.Item className="d-flex align-items-center py-2">
            <FaBell className="me-2" />
            {!collapsed && <Nav.Link href="#reminders" className="text-white p-0">Reminders</Nav.Link>}
          </Nav.Item>

          <Nav.Item className="d-flex align-items-center py-2">
            <FaWrench className="me-2" />
            {!collapsed && <Nav.Link href="#service" className="text-white p-0">Service</Nav.Link>}
          </Nav.Item>

          <Nav.Item className="d-flex align-items-center py-2">
            <FaAddressBook className="me-2" />
            {!collapsed && <Nav.Link href="#contacts" className="text-white p-0">Contacts</Nav.Link>}
          </Nav.Item>

          <Nav.Item className="d-flex align-items-center py-2">
            <FaBuilding className="me-2" />
            {!collapsed && <Nav.Link href="#vendors" className="text-white p-0">Vendors</Nav.Link>}
          </Nav.Item>

          {/* New Items */}
          <Nav.Item className="d-flex align-items-center py-2">
            <FaGasPump className="me-2" />
            {!collapsed && <Nav.Link href="#fuel-energy" className="text-white p-0">Fuel & Energy</Nav.Link>}
          </Nav.Item>

          <Nav.Item className="d-flex align-items-center py-2">
            <FaCogs className="me-2" />
            {!collapsed && <Nav.Link href="#parts" className="text-white p-0">Parts</Nav.Link>}
          </Nav.Item>

          <Nav.Item className="d-flex align-items-center py-2">
            <FaMapMarkerAlt className="me-2" />
            {!collapsed && <Nav.Link href="#places" className="text-white p-0">Places</Nav.Link>}
          </Nav.Item>

          <Nav.Item className="d-flex align-items-center py-2">
            <FaFileAlt className="me-2" />
            {!collapsed && <Nav.Link href="#documents" className="text-white p-0">Documents</Nav.Link>}
          </Nav.Item>

          <Nav.Item className="d-flex align-items-center py-2">
            <FaPlug className="me-2" />
            {!collapsed && <Nav.Link href="#integrations" className="text-white p-0">Integrations</Nav.Link>}
          </Nav.Item>

          <Nav.Item className="d-flex align-items-center py-2">
            <FaChartBar className="me-2" />
            {!collapsed && <Nav.Link href="#reports" className="text-white p-0">Reports</Nav.Link>}
          </Nav.Item>
        </Nav>
      </div>

      {/* Main Content */}
      <div
        style={{
          marginLeft: collapsed ? '80px' : '260px',
          padding: '20px',
          width: '100%',
          transition: 'margin-left 0.3s ease-in-out',
        }}
      >       
      </div>
    </div>
  );
}

export default Sidebar;
