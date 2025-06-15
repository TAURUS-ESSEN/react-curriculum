import Icon from '@mdi/react';
import { mdiDelete } from '@mdi/js';

export default function SetExperience ({ experience, setExperience, onSave, onCancel, onDelete}) {
    function handleChange(field) {
        return (event) => setExperience({...experience, [field]: event.target.value }, 'experience')
    }
    return (
    <div className="educationForm">
        <input type="text" value={experience.firmName} onChange ={handleChange('firmName')} placeholder='Company name'/>
        <input type="text" value={experience.title} onChange ={handleChange('title')} placeholder='Position'/>
         <div className='flex-rowLeft flex-between'>
            <input type="text" value={experience.startDateOfWork} onChange ={handleChange('startDateOfWork')} placeholder='Start from MM/YYYY'/>
            <input type="text" value={experience.endDateOfWork} onChange ={handleChange('endDateOfWork')} placeholder='End date MM/YYYY'/> 
        </div>       
        <input type="text" value={experience.location} onChange ={handleChange('location')} placeholder='Location'/>    
            <div className="buttonsBlock">
                <div>
                    <button className="buttonDelete" onClick={onDelete}>
                        <Icon path={mdiDelete} size={1} color="white"/>
                    </button>
                </div>
                <div>
                    <button className="buttonStyle1" onClick={onCancel}>Cancel</button> 
                    <button className="buttonStyle1" onClick={onSave}>Save</button>
                </div> 
            </div>
    </div>
    )
} 