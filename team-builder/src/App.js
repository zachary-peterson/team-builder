import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Form from './Form';
import Member from './Member'
import './App.css';

const initialTeamRoster = [
  {
    name: 'Gabe',
    email: 'gabriel@lambdaschool.com',
    role: 'Project Lead'
  },
  {
    name: 'Zach',
    email: 'zachary-peterson@lambdastudents.com',
    role: 'Front End Developer'
  },
]

const initialForm = {
  name: '',
  email: '',
  role: ''
}

const StyledHeader = styled.div`
  margin: 0 auto;
  background-color: black;
  color: white;
  font-size: 2.5rem;
`

const MemberObjs = styled.div`
  display: flex;
  flex-flow: row wrap;
  background-color: white;
  margin-top: 2.5%;
  border: 2.5px solid black;
  border-bottom: 0;
`

const Container = styled.div`
  text-align: center;
  margin-top: 0;
  background-color: #ec3944;

  header {
    background-color: black;
    margin-top: 0;
    color: white;
    font-size: 2.5rem;
  }
`

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

    setTeamMembers([...teamMembers, newTeamMember]);
    setFormValues(initialForm);
  }

  
  return (
    <Container className="App">
      <header>
        <h1>Lambda Dev Team</h1>
      </header>
        <div>
          <Form 
          values={formValues}
          update={formUpdate}
          submit={formSubmit} 
          />
        </div>
        <MemberObjs>
          {
            teamMembers.map(member => {
              
                return (
                <Member key={member.name} details={member}/>
              )
            }
          )}
        </MemberObjs>
    </Container>
)



}

export default App;