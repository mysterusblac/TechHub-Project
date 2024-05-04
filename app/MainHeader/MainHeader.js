"use client"
import React, { useState } from 'react';
import HeaderSearchBar from './HeaderSearchBar';
import HeaderIcon from './HeaderIcon';

export default function Dash({ dashboardIcons }) {
    const [selectedFruit, setSelectedFruit] = useState('');

    const handleFruitChange = (event) => {
      setSelectedFruit(event.target.value);
    };
  return (
    <div className='dashboard-main-header-container'>
      <div />
      <HeaderSearchBar dashboardIcons={dashboardIcons} />
      <HeaderIcon />
    </div>
  )
}
