import React from 'react';

const PhoneInfo = ({ info }) => {
    const { id, name, phone } = info;
    console.log(info);
    const style = {
        border: "1px solid grey",
        padding: "3px",
        margin: "5px",
    }

    return (
        <div style={style}>
            <div>name: {name}</div>
            <div>phone: {phone}</div>
        </div>
    );
};

export default PhoneInfo;