import React, { useRef, useState } from 'react';

const PhoneForm = ({ onCreate }) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    let submitButton = useRef(null);

    const inputChangeHandler = (e) => {
        switch (e.target.name) {
            case 'name':
                setName(e.target.value);
                break;
            case 'phone':
                setPhone(e.target.value);
                break;
            default:
                break;
        }
    }

    const buttonSubmitHandler = (e) => {
        e.preventDefault();
        onCreate({
            name,
            phone,
        });

        setName('');
        setPhone('');
        submitButton.current.focus();
    }

    return (
        <>
            <form onSubmit={buttonSubmitHandler}>
                <input type="text" name='name' placeholder='name' onChange={inputChangeHandler} value={name} ref={submitButton} />
                <input type="number" name='phone' placeholder='phone' onChange={inputChangeHandler} value={phone} />
                <button type="submit" >submit</button>
            </form>
        </>
    );
};

export default PhoneForm;