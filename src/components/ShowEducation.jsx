export default function ShowEducation({education}) {
    return (
        <div className="educationForm">
            <h2 className="header">Education</h2>
            {education.map((value, index) => {
                if (value.visible === 1) {
                    return <div key={index} className="educationListOutput">
                    <div className="width30"> {value.startDateOfStudy} - {value.endDateOfStudy} <br /> {value.location}</div>
                    <div> <b>{value.schoolName} </b> <br /> {value.title} </div>
                    </div> 
                }
                return null;
            })}
        </div>)
}