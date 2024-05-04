import { TiBell } from "react-icons/ti"; 
import { CgProfile } from "react-icons/cg"

export default function HeaderIcon() {
    return(
        <div className="header-icons-container">
            <div className="header-icon-container">
                <div className="header-red-dot" />
                <TiBell className="header-icon" />
            </div>
            <div className="header-icon-container">
                <CgProfile className="header-icon" />
            </div>
        </div>
    )
}