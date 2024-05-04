"use client";
import { useState } from 'react';
import MainHeader from './MainHeader/MainHeader';
import Sidebar from './Sidebar';
import DashboardContent from './DashboardContent';

const dashboardIcons = ['Patients', 'HR', 'Labs', 'Pharma'];
const ProcessesIcons = ['Registration', 'Consultation', 'Tests & Reports', 'Billing'];

export default function Dashboard() {
  const [selectedSection, setSelectedSection] = useState(dashboardIcons[1])
  return (
    <div className='dashboard-main-container'>
      <MainHeader dashboardIcons={dashboardIcons} />
      <div className="dashboard-content-container">
        <Sidebar dashboardIcons={dashboardIcons} ProcessesIcons={ProcessesIcons} selectedSection={selectedSection} onChangeTab={(sectionName) => setSelectedSection(sectionName)} />
        <DashboardContent selectedSection={selectedSection} />
      </div>
    </div>
  )
}