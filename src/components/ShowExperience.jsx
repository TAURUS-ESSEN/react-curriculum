export default function ShowExperience({experience}) {
    return (
        <div className="educationForm">
            <h2 className="header">Experience</h2>
        {/* <div className="experience"> */}
            {experience.map((value, index) => {
                if (value.visible === 1) {
                    return <div key={index} className="educationListOutput"> 
                    <div className="width30"> {value.startDateOfWork} - {value.endDateOfWork} <br />{value.location} </div>
                    <div> <b>{value.firmName}</b> <br /> {value.title}</div>
                    </div> 
                }
                return null;
            })}
        {/* </div> */}
        </div>)
}