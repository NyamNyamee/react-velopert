import React from 'react';
import PhoneInfo from './PhoneInfo';

const PhoneInfoList = ({ information }) => {
    const phoneList = information.map(info => <PhoneInfo info={info} key={info.id} />);
    console.log(phoneList);
    return (
        <div>
            {phoneList}
        </div>
    );
};

export default PhoneInfoList;