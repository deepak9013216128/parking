import React from 'react';

import './society-liveStatus.style.css';

const SocietyLiveStatus = ({name,phoneNo,vechileNo,isResident}) =>(
    <tr className='list-items'>
        <td className='list-item'><span className='residentName'>{name}</span></td>
        <td className='list-item'><span className='item'>{isResident?"Resident":"Visitor"}</span></td>
        <td className='list-item'><span className='item'>{phoneNo}</span></td>
        <td className='list-item'><span className='item'>{vechileNo}</span></td>
    </tr>
)
export default SocietyLiveStatus;