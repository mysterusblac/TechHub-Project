"use client"
import React from 'react';
import { HiOutlineUserCircle, HiOutlineEyeDropper, HiOutlineBanknotes } from "react-icons/hi2";
import { CiFilter } from "react-icons/ci";
import { GrStorage, GrCurrency } from "react-icons/gr";
import { BsHouseAdd } from "react-icons/bs";
import { FaRegFileAlt } from "react-icons/fa";  


export default function Sidebar({dashboardIcons, ProcessesIcons, onChangeTab, selectedSection }) {
  const returnIcon = (icon, isSelectedTab) => {
    switch(icon) {
      case 'Patients': 
        return <HiOutlineUserCircle className={isSelectedTab ? 'selected-icons-class icons-class' : 'icons-class'} />
      case 'HR':
        return <GrStorage className={isSelectedTab ? 'selected-icons-class icons-class' : 'icons-class'} />
      case 'Labs':
        return <CiFilter className={isSelectedTab ? 'selected-icons-class icons-class' : 'icons-class'} />
      case 'Pharma':
        return <BsHouseAdd className={isSelectedTab ? 'selected-icons-class icons-class' : 'icons-class'} />
      case 'Registration':
        return <GrCurrency className={isSelectedTab ? 'selected-icons-class icons-class' : 'icons-class'} />
      case 'Consultation':
        return <FaRegFileAlt className={isSelectedTab ? 'selected-icons-class icons-class' : 'icons-class'} />
      case 'Tests & Reports':
        return <HiOutlineEyeDropper className={isSelectedTab ? 'selected-icons-class icons-class' : 'icons-class'} />
      case 'Billing':
        return <HiOutlineBanknotes  />
      default:
        return null;
    }
  }

  const renderDashboardIcons = (icons) => {
    
   return icons.map((icon, index) => {
    const isSelectedTab = selectedSection === icon;
    return (
      <div key={icon} onClick={() => onChangeTab(icon)} className={`flex  flex-col  justify-center items-center text-center px-4 py-2 ${index === dashboardIcons.length - 1 ? '' : 'border-b-[1px] border-b-[#e4e8e9]'} mb-1 ${isSelectedTab ? 'bg-[#166535]' : 'bg-[#f6fafb]'} w-full`}>
        {returnIcon(icon, isSelectedTab)}
        <p className={`${isSelectedTab ? 'text-[#ffffff]' : 'text-[#727871]'} text-[12px] font-bold`}>{icon}</p>
      </div>
    )
   })
  }

  const renderDashboardSection = (header, icons) => {
    return (
      <div className="mb-4">
        <p className='text-[10px] font-bold text-[#727871] mb-1'>{header}</p>
        <div className='flex  flex-col  justify-center items-center text-center py-2 border-b-[1px] border-b-[#e4e8e9] bg-[#f6fafb] rounded-md'>
          {renderDashboardIcons(icons)}
        </div>
      </div>
    )
  }
  
  return (
  <div className='sidebar-container'>
    {renderDashboardSection('Dashboard', dashboardIcons)}
    {renderDashboardSection('Processes', ProcessesIcons)}
  </div>
  )
}
