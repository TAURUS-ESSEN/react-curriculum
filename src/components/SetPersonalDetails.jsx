export default function SetPersonalDetails ({ personalDetails, setPersonalDetails}) {
    function handleChange(field) {
        return (e) => setPersonalDetails({ ...personalDetails, [field]: e.target.value });
    }
    return (
        <div className="block">
            <input type="text" value={personalDetails.name} onChange={handleChange('name')} placeholder='Enter your full name'/>
            <input type="email" value={personalDetails.email} onChange={handleChange('email')} placeholder='Enter your email'/>
            <input type="phone" value={personalDetails.phone} onChange={handleChange('phone')} placeholder='Enter your number'/>
            <input type="text" value={personalDetails.address} onChange={handleChange('address')} placeholder='Enter your location'/>
        </div>
    )
}