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
  margin: 2.5% auto 2%;
  border: 5px solid black;
  width: 95%;
  text-align: center;

  @media(max-width: 768px){
    flex-direction: column;
    margin: 2% auto;

  }

`

const Container = styled.div`
  text-align: center;
  margin-top: 0;
  background-color: #ec3944;

  header {
    background-color: black;
    padding: 0.01%;
    color: white;
    font-size: 2.5rem;
    line-height: 0.1;
    font-family: Monospace;

    h1 {
      font-size: 6rem;
    }

    h2 {
      text-decoration: underline;
      padding-bottom: 2.5px;
    }
  }

  footer {
    background-color: black;
    color: white;
    padding: 1% 0;
    font-family: Monospace;
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
        <h1>Build Week</h1>
        <h2>Team Builder</h2>
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
        <footer><strong>Web33</strong></footer>
    </Container>
)



}

export default App;