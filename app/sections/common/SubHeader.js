
import { HiOutlineUserGroup } from "react-icons/hi2";

export default function SubHeader({ header }) {
    return (
        <div className="sub-header-container">
            <div className="sub-header-text">
                <HiOutlineUserGroup />
                <h1 className="pl-2">{header}</h1>
            </div>
        </div>
    )
}