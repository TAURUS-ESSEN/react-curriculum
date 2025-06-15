import Icon from '@mdi/react';
import { mdiOrderBoolAscendingVariant } from '@mdi/js';

export default function SetSkills({skills, setSkills}) {
    function handleChange(event) {
        return  setSkills(event.target.value);
    }
    return (
        <div className="block">
            <details>
                <summary>
                    <span className='summary-title'>
                        <Icon path={mdiOrderBoolAscendingVariant} size={1} style={{ verticalAlign: "middle", marginBottom: "4px", marginRight: "15px" }} />Skills
                    </span>
                    <span className="arrow">▼</span>
                </summary>
                <span className='flex-rowLeft'> List your skills, <b>separated by commas</b>.</span>
                <textarea type="text" value={skills} onChange={handleChange} />
            </details>
        </div> )
}