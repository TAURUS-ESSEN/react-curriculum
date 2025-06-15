import Icon from '@mdi/react';
import { mdiDelete } from '@mdi/js';

export default function SetEducation ({ education, setEducation, onSave, onCancel, onDelete}) {
    function handleChange(field) {
        return (event) => setEducation({ ...education, [field]: event.target.value }, 'education')
    }
    return (      
        <div className="educationForm">
            <input type="text" value={education.schoolName} onChange ={handleChange('schoolName')} placeholder='Name of institution'/>
            <input type="text" value={education.title} onChange ={handleChange('title')} placeholder='Degree obtained'/>
            <div className='flex-rowLeft flex-between'>
                <input type="text" value={education.startDateOfStudy} onChange ={handleChange('startDateOfStudy')} placeholder='Start from MM/YYYY'/>
                <input type="text" value={education.endDateOfStudy} onChange ={handleChange('endDateOfStudy')} placeholder='End date MM/YYYY'/>
            </div>        
            <input type="text" value={education.location} onChange ={handleChange('location')} placeholder='Location'/>    
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