export default function ShowSkills ({skills}) {
    return (
        <div className="educationForm">
            <h2 className="header">Skills</h2>
        <div className='skillsList'>
            {skills.split(",").map((value, index) => {
                return <div className='skill' key={index}>{value}</div>
            })}
        </div>
        </div> )
}