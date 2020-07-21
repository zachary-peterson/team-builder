import React from 'react';

function Form(props){
    const {values, update, submit} = props;

    const onChange = event => {
        const {name, value} = event.target;
        update(name, value);
    }

    const onSubmit = event => {
        event.preventDefault();
        submit(event.data);
    }
    
    return (
        <form className='form container' onSubmit={onSubmit}>
        
        <div className='form-group submit'>
            <h2>Add to your Team</h2>
            <button disabled={!values.name || !values.email || !values.role} >submit</button>
        </div>
        
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

        </form>
    )
}

export default Form