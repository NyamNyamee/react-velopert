import React from 'react';
import PhoneInfo from './PhoneInfo';

const PhoneInfoList = ({ information, onRemove, onUpdate }) => {
    const phoneList = information.map(info => <PhoneInfo info={info} key={info.id} onRemove={onRemove} onUpdate={onUpdate} />);
    
    return (
        <div>
            {phoneList}
        </div>
    );
};

export default PhoneInfoList;