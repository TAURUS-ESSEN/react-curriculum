export default function ShowAbout ({about}) {
    return (
        <div className="aboutOutput">
            <h2 className="header">About me</h2>
                <p className="about">{about}</p>
        </div> 
    )
}