import React from 'react';

import './society-resident.style.css';

const SocietyResident = ({id,residentName,phoneNo,vechileNo}) =>(
    <tr className='list-items'>
        <td className='list-item'><span className='residentName'>{residentName}</span></td>
        <td className='list-item'><span className='phoneNo'>{phoneNo}</span></td>
        <td className='list-item'><span className='vechileNo'>{vechileNo}</span></td>
    </tr>
)
export default SocietyResident;