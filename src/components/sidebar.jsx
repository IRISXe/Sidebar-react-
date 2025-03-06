import React, { useState } from 'react';
import { Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {
  FaTachometerAlt, FaCar, FaTools, FaBars, FaChevronLeft, FaClipboardCheck, FaExclamationTriangle,
  FaBell, FaWrench, FaAddressBook, FaBuilding, FaChevronDown, FaGasPump, FaCogs,
  FaMapMarkerAlt, FaFileAlt, FaPlug, FaChartBar
} from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [vehiclesOpen, setVehiclesOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <div style={{ display: 'flex', height: '100vh', backgroundColor: '#f8f9fa' }}>
      {/* Sidebar */}
      <div
        style={{
          width: collapsed ? '80px' : '260px',
          transition: 'width 0.3s ease-in-out',
          backgroundColor: "#2f4e7d",
          color: '#fff',
          display: 'flex',
          flexDirection: 'column',
          padding: '10px',
          boxShadow: '2px 0 5px rgba(0, 0, 0, 0.1)',
          overflowY: 'auto',
        }}
      >
        {/* Toggle Button */}
        <Button
          variant="outline-light"
          onClick={() => setCollapsed(!collapsed)}
          className="d-flex align-items-center justify-content-center"
          style={{ marginBottom: '10px', width: '100%', padding: '10px' }}
        >
          {collapsed ? <FaBars /> : <FaChevronLeft />}
        </Button>

        {/* Navigation */}
        <Nav className="flex-column mt-2">
          <Nav.Item className="d-flex align-items-center py-2">
            <FaTachometerAlt className="me-2" />
            {!collapsed && <Link to="/dashboard" className="text-white p-0 nav-link">Dashboard</Link>}
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
            <div style={{ paddingLeft: '20px' }}>
              <Nav.Item className="py-1"><Link to="/vehicles" className="text-white p-0 nav-link">🚗 Vehicles List</Link></Nav.Item>
              <Nav.Item className="py-1"><Link to="/assignments" className="text-white p-0 nav-link">📌 Assignments</Link></Nav.Item>
              <Nav.Item className="py-1"><Link to="/meter-history" className="text-white p-0 nav-link">📏 Meter History</Link></Nav.Item>
              <Nav.Item className="py-1"><Link to="/expense-history" className="text-white p-0 nav-link">💰 Expense History</Link></Nav.Item>
              <Nav.Item className="py-1"><Link to="/replacement-analysis" className="text-white p-0 nav-link">🔄 Replacement Analysis</Link></Nav.Item>
            </div>
          )}

          <Nav.Item className="d-flex align-items-center py-2">
            <FaTools className="me-2" />
            {!collapsed && <Link to="/maintenance" className="text-white p-0 nav-link">Maintenance</Link>}
          </Nav.Item>

          <Nav.Item className="d-flex align-items-center py-2">
            <FaClipboardCheck className="me-2" />
            {!collapsed && <Link to="/inspections" className="text-white p-0 nav-link">Inspections</Link>}
          </Nav.Item>

          <Nav.Item className="d-flex align-items-center py-2">
            <FaExclamationTriangle className="me-2" />
            {!collapsed && <Link to="/issues" className="text-white p-0 nav-link">Issues</Link>}
          </Nav.Item>

          <Nav.Item className="d-flex align-items-center py-2">
            <FaBell className="me-2" />
            {!collapsed && <Link to="/reminders" className="text-white p-0 nav-link">Reminders</Link>}
          </Nav.Item>

          {/* Services Dropdown */}
          <Nav.Item
            className="d-flex align-items-center py-2"
            style={{ cursor: 'pointer' }}
            onClick={() => setServicesOpen(!servicesOpen)}
          >
            <FaWrench className="me-2" />
            {!collapsed && (
              <>
                <span className="flex-grow-1">Services</span>
                <FaChevronDown style={{ transition: 'transform 0.3s', transform: servicesOpen ? 'rotate(180deg)' : 'rotate(0deg)' }} />
              </>
            )}
          </Nav.Item>

          {servicesOpen && !collapsed && (
            <div style={{ paddingLeft: '20px' }}>
              <Nav.Item className="py-1"><Link to="/service-history" className="text-white p-0 nav-link">Service History</Link></Nav.Item>
              <Nav.Item className="py-1"><Link to="/work-order" className="text-white p-0 nav-link">Work Order</Link></Nav.Item>
              <Nav.Item className="py-1"><Link to="/service-tasks" className="text-white p-0 nav-link">Service Tasks</Link></Nav.Item>
              <Nav.Item className="py-1"><Link to="/service-programs" className="text-white p-0 nav-link">Service Programs</Link></Nav.Item>
            </div>
          )}
          <Nav.Item className="d-flex align-items-center py-2">
            <FaAddressBook className="me-2" />
            {!collapsed && <Link to="/contacts" className="text-white p-0 nav-link">contacts</Link>}
          </Nav.Item>
          <Nav.Item className="d-flex align-items-center py-2">
            <FaBuilding className="me-2" />
            {!collapsed && <Link to="/Vendors" className="text-white p-0 nav-link">vendors</Link>}
          </Nav.Item>
          <Nav.Item className="d-flex align-items-center py-2">
            <FaGasPump className="me-2" />
            {!collapsed && <Link to="/Fuel&Energy" className="text-white p-0 nav-link">Fuel&Energy</Link>}
          </Nav.Item>
          <Nav.Item className="d-flex align-items-center py-2">
            <FaCogs className="me-2" />
            {!collapsed && <Link to="/parts" className="text-white p-0 nav-link">Parts</Link>}
          </Nav.Item>
          <Nav.Item className="d-flex align-items-center py-2">
            <FaMapMarkerAlt className="me-2" />
            {!collapsed && <Link to="/places" className="text-white p-0 nav-link">Places</Link>}
          </Nav.Item>
          <Nav.Item className="d-flex align-items-center py-2">
            <FaFileAlt className="me-2" />
            {!collapsed && <Link to="/Documents" className="text-white p-0 nav-link">Documents</Link>}
          </Nav.Item>
          <Nav.Item className="d-flex align-items-center py-2">
            <FaPlug className="me-2" />
            {!collapsed && <Link to="/Integrations" className="text-white p-0 nav-link">Integrations</Link>}
          </Nav.Item>
          <Nav.Item className="d-flex align-items-center py-2">
            <FaChartBar className="me-2" />
            {!collapsed && <Link to="/Reports" className="text-white p-0 nav-link">Reports</Link>}
          </Nav.Item>
        </Nav>
      </div>

      {/* Main Content */}
      <div style={{ marginLeft: collapsed ? '80px' : '260px', padding: '20px', width: '100%', transition: 'margin-left 0.3s ease-in-out' }}>
        {/* This is where routed components will be displayed */}
      </div>
    </div>
  );
}

export default Sidebar;

