import Icon from '@mdi/react';
import { mdiEmailOutline } from '@mdi/js';
import { mdiMapMarker } from '@mdi/js';
import { mdiCellphone } from '@mdi/js';


export default function ShowPersonalDetails ({personalDetails}) {
    return (
        <>
            <h1>{personalDetails.name}</h1>
            <div className='details'>
                <div>
                    <Icon path={mdiEmailOutline} size={1} color="white" style={{ verticalAlign: "middle", marginRight: "8px" }} />
                    {personalDetails.email}
                </div>
                <div>
                    <Icon path={mdiCellphone} size={1} color="white" style={{ verticalAlign: "middle", marginRight: "8px" }} />
                    {personalDetails.phone}
                </div>
                <div>
                    <Icon path={mdiMapMarker} size={1} color="white" style={{ verticalAlign: "middle", marginRight: "8px" }}/>
                    {personalDetails.address}
                </div>
            </div>
        </> )
}