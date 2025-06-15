import Icon from '@mdi/react';
import { mdiBio } from '@mdi/js';

export default function SetAbout({about, setAbout}) {
    function handleChange(event) {
        setAbout(event.target.value);
    }
    return (
        <div className="block">
            <details>
                <summary>
                    <span className='summary-title'>
                        <Icon path={mdiBio} size={1}  style={{ verticalAlign: "middle", marginBottom: "4px", marginRight: "15px" }}/>
                        About Me 
                    </span> 
                    <span className="arrow">▼</span>
                </summary>
                <textarea maxLength="500" value={about} onChange={handleChange} />
            </details>
        </div> )
}