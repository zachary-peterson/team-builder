import React, { useState, useEffect } from 'react';
import Form from './Form';
import Member from './Member'
import './App.css';

const initialTeamRoster = [
  {
    name: 'Gabe',
    email: 'gabriel@lambdaschool.com',
    role: 'Project Lead'
  },
]

const initialForm = {
  name: '',
  email: '',
  role: ''
}

function App() {
  const [teamMembers, setTeamMembers] = useState(initialTeamRoster);
  const [formValues, setFormValues] = useState(initialForm);

  const formUpdate = (inputName, inputValue) => {
    setFormValues({ ...formValues, [inputName]: inputValue });
  }

  const formSubmit = () => {
    const newTeamMember = {
      name: formValues.name,
      email: formValues.email,
      role: formValues.role
    }

    if(!formValues.name || !formValues.email || formValues.role) return;

    setTeamMembers(newTeamMember);
  }

  console.log(teamMembers)
  
  return (
    <div className="App">
      <header className="header">
        <h1>Lambda Dev Team</h1>
      </header>
        <div>
          <Form 
          values={formValues}
          update={formUpdate}
          submit={formSubmit} 
          />
        </div>
        <div>
          {
            teamMembers.map(member => {
              
                return (
                <Member key={teamMembers.length + 1} details={member}/>
              )
            }
          )}
        </div>
    </div>
)



}

export default App;