import { useState } from "react";
import { FiSearch } from "react-icons/fi";     

export default function HeaderSearchBar({ dashboardIcons }) {
    const [selectedCategory, setSelectedCategory] = useState('');

    const handleSelectedCategoryChange = () => {

    }

    const renderOptions = () => {
        return dashboardIcons.map((icon) => {
            return (
                <option value={icon}>{icon}</option>
            )
        })
    }

    const renderAddNewButton = () => {
        return (
            <button className="header-add-new-button">
                + Add New
            </button>
        )
    }

    return (
        <div className="header-search-container">
            <div className="header-search-bar-container">
                <select value={selectedCategory} onChange={handleSelectedCategoryChange} className="text-white bg-gray-800 p-2 rounded">
                    {renderOptions()}
                </select>
                <input placeholder="Search" />
                <div className="header-search-bar-search-icon">
                    <FiSearch />
                </div>
            </div>
            {renderAddNewButton()}
        </div>
    )
}