

import HR from "./sections/hr/HR";
const dashboardIcons = ['Patients', 'HR', 'Labs', 'Pharma'];
const ProcessesIcons = ['Registration', 'Consultation', 'Tests & Reports', 'Billing'];

export default function DashboardContent({ selectedSection }) {
    const renderSelectedSection = () => {
        switch(selectedSection) {
            case 'Patients':
                return <div> Patients</div>
            case 'HR':
                return <HR />
            default:
                return null;
        }
    }
    return (
        <div className="dashboard-inner-container">
            {renderSelectedSection()}
        </div>
    )
}