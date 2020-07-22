import React from 'react';
import App from './App';
import styled from 'styled-components';

const StyledForm = styled.form`
    text-align: center;
    background-color: white;
    margin: 2% auto;
    width: 75%;
    border: 5px solid black;
    
    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 2%;
    }

    button  {
        margin: 2.5% auto;    
    }

    input {
        margin: 1.5%;
    }

`


function Form(props){
    const {values, update, submit} = props;

    const onChange = event => {
        const {name, value} = event.target;
        update(name, value);
    }

    const onSubmit = event => {
        event.preventDefault();
        submit();
    }
    
    return (
        <StyledForm onSubmit={onSubmit}>
        
        <h2>Add to your Team</h2>
        
        <div className='form-group input'>
            <h3>Information:</h3>

            <label htmlFor='nameInput'>Name:</label>
            <input
                id='nameInput'
                maxLength='25'
                name='name'
                onChange={onChange}
                placeholder='Enter Team Member Name'
                type='text'
                value={values.name}
            />

            <label htmlFor='emailInput'>Email Address:</label>
            <input
                id='emailInput'
                maxLength='50'
                name='email'
                onChange={onChange}
                placeholder='Enter Team Member Email'
                type='text'
                value={values.email}
            />

            <label>Team Role:</label>
            <select name='role' value={values.role} onChange={onChange}>
                <option value='' disabled>Select your role</option>
                <option value='Web UI Developer'>Web UI Developer</option>
                <option value='Front End Developer'>Front End Developer</option>
                <option value='Front End Framework Developer'>Front End Framework Developer</option>
                <option value='Back End Developer'>Back End Developer</option>
                <option value='iOS Developer'>iOS Developer</option>
                <option value='Data Engineer'>Data Engineer</option>
                <option value='Project Lead'>Project Lead</option>
            </select>
        </div>

        <button disabled={!values.name || !values.email || !values.role} onSubmit={onSubmit}>Submit</button>

        </StyledForm>
    )
}

export default Form