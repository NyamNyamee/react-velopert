import React, { useState, useEffect, Fragment } from 'react';

const PhoneInfo = ({ info, onRemove, onUpdate }) => {
    const [editing, setEditing] = useState(false);
    const [editName, setEditName] = useState("");
    const [editPhone, setEditPhone] = useState("");

    const { id, name, phone } = info;

    const style = {
        border: "1px solid grey",
        padding: "3px",
        margin: "5px",
    }

    const handleRemove = () => {
        // id값을 넘겨 제거
        onRemove(id);
    }

    const handleToggleEdit = () => {
        // confirm 클릭 시
        if (editing) {
            onUpdate(id, { name: editName, phone: editPhone });
        } else {  // update 클릭 시
            setEditName(name);
            setEditPhone(phone);
        }

        // update 상태 변경
        setEditing(!editing);
    }

    const handleInputChange = (e) => {
        if (e.target.name === "editName") {
            setEditName(e.target.value);
        } else if (e.target.name === "editPhone") {
            setEditPhone(e.target.value);
        }
    }

    useEffect(() => {
        console.log('useEffect');
    }, []);

    return (
        <div style={style}>
            {
                editing ?
                    (
                        <Fragment>
                            <div><input type="text" name="editName" value={editName} placeholder="name" onChange={handleInputChange} required="required" /></div>
                            <div><input type="number" name="editPhone" value={editPhone} placeholder="phone" onChange={handleInputChange} required="required" /></div>
                        </Fragment>
                    ) : (
                        <Fragment>
                            <div>name: {name}</div>
                            <div>phone: {phone}</div>
                        </Fragment>
                    )
            }

            <button onClick={handleToggleEdit}>{editing ? "confirm" : "update"}</button>
            <button onClick={handleRemove}>delete</button>
        </div>
    );
};

export default PhoneInfo;