import SubHeader from "../common/SubHeader";
import FilterComponent from "./FilterComponent";
import SubBlocks from './SubBlocks';
import HRTable from './HRTable'

export default function HR() {
    return(
        <div>
            <SubHeader header="Consultants" />
            <FilterComponent />
            <SubBlocks />
            <HRTable />
        </div>
    )
}