import { HiMiniUserGroup } from "react-icons/hi2";
import { FaRegChartBar } from "react-icons/fa6";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { GrCurrency } from "react-icons/gr";

const subBlocksData = [
    {text: 'Consultant Count', total: 900, count: 90, subText: 'Today/Period', backgroundColor: '#faedcb' },
    {text: 'Consultations', total: 25, count: 11, subText: 'Today/Period', backgroundColor: '#e1e7fd' },
    {text: 'Labs', total: 560, count: 25, subText: 'Today/Period', backgroundColor: '#dbfde4'  },
    {text: 'DietPlans', total: 250, count: 25, subText: 'Today/Period', backgroundColor: '#f3e7fb' }
]
export default function SubBlocks() {

    const renderIcon = (text) => {
        switch(text) {
            case 'Consultant Count':
                return <HiMiniUserGroup />;
            case 'Consultations':
                return <FaRegChartBar />;
            case 'Labs':
                return <GrCurrency />;
            case 'DietPlans':
                return <FaMoneyCheckDollar />;
            default: 
                return null;
        }
    }

    const renderBlocks = () => {
        return subBlocksData.map((subBlock) => {
            return (
                <div className="block-container" style={{ borderLeftColor: subBlock.backgroundColor, borderLeftWidth: 3 }}>
                    <div>
                        <p className="subblock-header">{subBlock.text}</p>
                        <p className="sublock-count">{subBlock.count}/{subBlock.total}</p>
                        <p className="subblock-secondary-text">Today/Period</p>
                    </div>
                    <div className="subblock-icon-container" style={{ backgroundColor: subBlock.backgroundColor}}>
                        {renderIcon(subBlock.text)}
                    </div>
                </div>
            )
        })
    }
    return (
        <div className="subblocks-container">
            {renderBlocks()}
        </div>
    )
}