import React from 'react';
import App from './App';
import styled from 'styled-components';

const StyledForm = styled.form`
    text-align: center;
    background-color: white;
    margin: 2% auto;
    width: 75%;
    border: 5px solid black;

    h2 {
        font-family: Monospace;
        margin-top: 0;
        font-size: 3rem;
        line-height: 5;
        border-bottom: 10px double black;
    }
    
    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 2%;
    }

    button  {
        margin: 2.5% auto;
        padding: 1% 3%; 
        background-color: black;
        color: white; 
        font-size: 1.25rem;

        &:hover {
            background-color: #171717;
            text-transform: uppercase;
        }
    }

    input {
        margin: 1.5%;
        width: 200px;
        text-align: center;
    }

    .dis  {
        text-align: right;
        margin: 2.5% 4%;
        color: crimson;
        font-size: 1.75rem;
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

            <label htmlFor='nameInput'><strong>Name:</strong></label>
            <input
                id='nameInput'
                maxLength='25'
                name='name'
                onChange={onChange}
                placeholder='Enter Team Member Name'
                type='text'
                value={values.name}
            />

            <label htmlFor='emailInput'><strong>Email Address:</strong></label>
            <input
                id='emailInput'
                maxLength='50'
                name='email'
                onChange={onChange}
                placeholder='Enter Team Member Email'
                type='text'
                value={values.email}
            />

            <label><strong>Team Role:</strong></label>
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

        <p className='dis'><em>* All fields required</em></p>

        </StyledForm>
    )
}

export default Form