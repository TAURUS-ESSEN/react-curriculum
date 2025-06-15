import { useState } from 'react'
import SetPersonalDetails from './components/SetPersonalDetails.jsx'
import ShowPersonalDetails from './components/ShowPersonalDetails.jsx'
import SetAbout from './components/SetAbout.jsx'
import ShowAbout from './components/ShowAbout.jsx'
import SetEducation from './components/SetEducation.jsx'
import ShowEducation from './components/ShowEducation.jsx'
import SetSkills from './components/SetSkills.jsx'
import ShowSkills from './components/ShowSkills.jsx'
import SetExperience from './components/SetExperience.jsx'
import ShowExperience from './components/ShowExperience.jsx'
import Styles from './components/Styles.jsx'
import Icon from '@mdi/react';
import { mdilEyeOff, mdilEye } from '@mdi/light-js';
import { mdiSchool, mdiBriefcaseVariant } from '@mdi/js';

export function App() {
  const [gridStyle, setGridStyle] = useState('flex-column');
  const [activeFont, setActiveFont] = useState('font1');
  const [color, setColor] = useState('#0e374e');

  const [personalDetails, setPersonalDetails] = useState ({
    name: 'Eugen aus Essen',
    email: 'eugen@gmail.com',
    phone:'+49 160-15-115-XX',
    address:'Germany, Essen',
  })

  const [education, setEducation] = useState([{
    schoolName: 'University of Totally Real Knowledge',
    title: 'B.Sc. in Procrastination Studies',
    startDateOfStudy: '09/2007' ,
    endDateOfStudy: '04/2011' ,
    location: 'Münster, Germany' ,
    visible: 1,
  },
  {
    schoolName: 'Institute of Advanced Googling',
    title: 'M.Sc. in Stack Overflow Navigation',
    startDateOfStudy: '10/2012' ,
    endDateOfStudy: '05/2015' ,
    location: 'Internetville' ,
    visible: 1,
  },
  ])

  const [experience, setExperience] = useState([{
    firmName: 'Coffee & Code Inc.',
    title: 'Junior Bug Creator',
    startDateOfWork: '01/2011' ,
    endDateOfWork: '05/2013' ,
    location: 'Ukraine, Kiev' ,
    visible: 1,
  },
  {
    firmName: 'Ctrl+Z Solutions',
    title: 'Full-Stack Overthinker',
    startDateOfWork: '06/2013' ,
    endDateOfWork: 'present' ,
    location: 'Basement, Mom’s House' ,
    visible: 1,
  },
  ])

  const [skills, setSkills] = useState ('JS, React, PHP, CSS, MySQL, Photoshop');
  const [about, setAbout] = useState ('Passionate and detail-oriented software developer with experience in web technologies and a strong foundation in JavaScript, HTML, and CSS. Skilled in building responsive applications, solving complex problems, and learning new tools quickly. Committed to writing clean and efficient code.');
  
  const [blocks, setBlocks] = useState ({education: {show:1, edit:0}, experience: {show:1, edit:0}});
  const [showContent, setShowContent] = useState(1)    
  const [editIndex, setEditIndex] = useState({eduIndex: null, expIndex: null});   
  
  const setter = { education: setEducation, experience: setExperience};
  const lists = {education, experience};

  function addNewEducation() {
    setBlocks(prev => ({ ...prev, education: { ...prev.education, show: 0} }))
    setEducation([...education, { schoolName: '', title: '', startDateOfStudy: '', endDateOfStudy:'', location: '', visible : 1 }])
    }

  function addNewExperience() {
    setBlocks(prev => ({ ...prev, experience: {...prev.experience, show: 0} }))
    setExperience([...experience, { firmName: '', title: '', startDateOfWork: '', endDateOfWork:'', location: '', visible : 1 }])
  }

  function updateLastItem(updatedItem, type) {
    const newArr = [...lists[type]];
    newArr[newArr.length-1] = updatedItem;
    setter[type](newArr);
  }

  function updateCurrentItem(updatedItem, index, type) {
    const newArr = [...lists[type]];
    newArr[index] = updatedItem;
    setter[type](newArr);
  }

  function changeVisibility(index, type) {
    const newArr = [...lists[type]];
    newArr[index].visible = newArr[index].visible === 1 ? 0 : 1;
    setter[type](newArr);
  }

  function deleteEducationItem({ index } = {}) {
    const newArr = [...education];
    if (typeof index === 'number') {
    newArr.splice(index, 1);
    } else {
      newArr.pop();
    }
    setEducation(newArr);
    setBlocks(prev => ({ ...prev, education: { ...prev.education, show: 1, edit: 0 } }));
    setEditIndex(prev => ({ ...prev, eduIndex: null }));
  }

  function deleteExperienceItem({index} = {}) {
    const newArr = [...experience];
    if (typeof index === 'number') {
      newArr.splice(index, 1);
    } else {
      newArr.pop();
    }
    setExperience(newArr);
    setBlocks(prev => ({ ...prev, experience: { ...prev.experience, show: 1, edit: 0} }));
    setEditIndex(prev => ({...prev, expIndex: null}));
  }  


  return (
    <>
      <div className = "wrapper" >
        <div className='dataFields'>
          <button className='buttonStyle1' onClick={() => setShowContent(1)}>Constructor</button>
          <button className='buttonStyle1' onClick={() => setShowContent(0)}>Design</button>
        </div>
        
        {showContent === 0 && (
        <div className='stylesBlock'>
          <Styles setActiveFont={setActiveFont} setGridStyle={setGridStyle} color={color} setColor={setColor}/>
        </div>
        )}

        {showContent === 1 && (
        <div className="dataFieldsContent">
          <SetPersonalDetails  personalDetails={personalDetails} setPersonalDetails = {setPersonalDetails} color={color} setColor = {setColor} />
          <SetAbout about={about} setAbout = {setAbout} />
          <div className='block'>
            <details>
              <summary>
                <span className='summary-title'>
                  <Icon path={mdiSchool} size={1} style={{ verticalAlign: "middle", marginBottom: "4px", marginRight: "15px"}} />
                  Education
                </span> 
                <span className="arrow">▼</span>
              </summary>
              
              {blocks.education.show === 1 && (
              <>
                {education.map((value, index) => {
                  return (
                  <div key={index} className='educationList'>
                    <div>
                      <button className ='buttonStyle2' onClick={() => {setEditIndex(prev=>({...prev, eduIndex: index})); setBlocks(prev => ({ ...prev, education: { ...prev.education,show: 0, edit: 1} }));}} >
                        {value.schoolName}
                      </button>
                    </div>
                    <div>
                      <button onClick={ () => changeVisibility(index, 'education')} className='buttonVisible'>
                        {value.visible === 1 ? <Icon path={mdilEye} size={1} /> : <Icon path={mdilEyeOff} size={1} />}
                      </button>
                    </div>
                  </div>
                )
                })} 
                <button className='buttonStyle1' onClick={addNewEducation}>Add new Education</button>
              </>
              )}
        
        {blocks.education.show === 0 && blocks.education.edit === 0 && (
        <SetEducation education={education[education.length - 1]} setEducation={updateLastItem}
          onSave={() => setBlocks(prev => ({ ...prev, education: { ...prev.education, show: 1} }))}
          onCancel={() => {
            const newArr = [...education];
            newArr.pop();
            setEducation(newArr);
            setBlocks(prev => ({ ...prev, education: {...prev.education, show: 1} }));
        }}
        onDelete={() => deleteEducationItem()}
    /> )}

        {blocks.education.show === 0 && blocks.education.edit === 1 && (
          <SetEducation
            education={education[editIndex.eduIndex]}  
            setEducation={(updatedItem) => updateCurrentItem(updatedItem, editIndex.eduIndex, 'education')}
            onSave={() => {
              setBlocks(prev => ({ ...prev, education: {...prev.education, show: 1, edit: 0} }));
              setEditIndex(null);
            }}
            onCancel={() => {
              setBlocks(prev => ({ ...prev, education: {...prev.education, show: 1, edit: 0} }));
              setEditIndex(prev => ({...prev, eduIndex: null}));
            }}
            onDelete={() => deleteEducationItem({ index: editIndex.eduIndex })}

          />
        )}</details>
      </div>

        <SetSkills skills={skills} setSkills = {setSkills} />
        <div className="block">
          <details>
            <summary>
              <span className='summary-title'>
                <Icon path={mdiBriefcaseVariant} size={1} style={{ verticalAlign: "middle", marginBottom: "4px", marginRight: "15px"}}/>
                Experience
                </span> 
                <span className="arrow">▼</span>
            </summary>
          {blocks.experience.show === 1 && (
            <>
            {experience.map((value, index) => {
              return (
              <div key={index} className='educationList'>
                <div>
                  <button onClick={() => {setEditIndex(prev => ({...prev, expIndex: index})); setBlocks(prev => ({ ...prev, experience: {...prev.experience, show: 0, edit: 1} }));}}  className ='buttonStyle2'>
                    {value.firmName}
                  </button>
                </div>
                <div>
                <button onClick={ () => changeVisibility(index, 'experience')}  className='buttonVisible'> 
                  {value.visible === 1 ? <Icon path={mdilEye} size={1} /> : <Icon path={mdilEyeOff} size={1} />}
                </button>
                </div>
              </div>
              )
            })} 
      
            <button className='buttonStyle1' onClick={addNewExperience}>Add new Experience</button>
          </>
        )}
        
        {blocks.experience.show === 0 && blocks.experience.edit === 0 && (
        <SetExperience experience={experience[experience.length - 1]} setExperience={updateLastItem}
          onSave={() => setBlocks(prev => ({ ...prev, experience: {...prev.experience, show: 1} }))}
          onCancel={() => {
            const newArr = [...experience];
            newArr.pop();
            setExperience(newArr);
            setBlocks(prev => ({ ...prev, experience: {...prev.experience, show: 1} }));
          }}
          onDelete={() => deleteExperienceItem({ index: editIndex.expIndex })}
    /> )}

        {blocks.experience.show === 0 && blocks.experience.edit === 1 && (
          <SetExperience
            experience={experience[editIndex.expIndex]}  
            setExperience={(updatedItem) => updateCurrentItem(updatedItem, editIndex.expIndex, 'experience')}
            onSave={() => {
              setBlocks(prev => ({ ...prev, experience: {...prev.experience, show: 1, edit: 0} }));
              setEditIndex(prev => ({...prev, expIndex: null}));
            }}
            onCancel={() => {
              setBlocks(prev => ({ ...prev, experience: { ...prev.experience, show: 1, edit: 0} }));
              setEditIndex(prev => ({...prev, expIndex: null}));
            }}
            onDelete={() => deleteExperienceItem({ index: editIndex.expIndex })}
          />
        )}
        </details>
      </div>
    </div> )}
{/*       OUTPUT AREA       */}
        <div className={`cvResult ${activeFont} ${gridStyle}`}>
          <div className='personalDetails' style={{backgroundColor:color}}>
            <ShowPersonalDetails personalDetails={personalDetails}/>
          </div>
          <div>
            {about && <ShowAbout about={about}/>}
            {education.some(obj => obj.visible === 1) && (<ShowEducation education={education}/>)}
            {skills && <ShowSkills skills={skills}/>}
            {experience.some(obj => obj.visible === 1) && (<ShowExperience experience={experience}/>)}
          </div>
        </div>
      </div>
    </>
  )
}
