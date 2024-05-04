"use client";
import { TfiBackRight } from "react-icons/tfi"; 
import { GoArrowDown } from "react-icons/go"; 


export default function HRTable() {
    const tableData = {
        header: ['Name', 'Patient Count', 'Labs', 'Diet Plans'],
        rows: ['John Smith,12,3,6', 'Jane Doe,8,2,4', 'Mark Johnson,6,1,2', 'Mary Lee,10,4,8', 'David Chen,14,5,9']
    }
    
    const renderTableHeaderSection = () => {
        return tableData.header.map((header) => {
            return (
                <th>{header}</th>
            )
        })
    }

    const renderTableColumns = (renderTableColumns) => {
        return renderTableColumns.split(',').map((column) => (<td key={column}>{column}</td>))
    }

    const renderTableRows = () => {
        return tableData.rows.map((row) => (
            <tr key={row}>
                {renderTableColumns(row)}
            </tr>
        ))
    }
    return (
        <div className="table-container">
            <div className="table-header-container">
                <h4>Consultants</h4>
                <div className="table-header-icons-cotainer">
                    <div className="table-icon-container"><TfiBackRight /></div>
                    <div className="table-icon-container"><GoArrowDown /></div>
                </div>
            </div>
            <table>
                <thead>
                    <tr>
                        {renderTableHeaderSection()}
                    </tr>
                </thead>
                <tbody>
                    {renderTableRows()}
                </tbody>
            </table>
        </div>
    )
}