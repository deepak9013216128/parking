import React from 'react';

import './society-resident.style.css';

const SocietyResident = ({id,residentName,flatNo,phoneNo,vechileNo}) =>(
    <tr className='list-items'>
        <td className='list-item'><span className='residentName'>{residentName}</span></td>
        <td className='list-item'><span className='item'>{flatNo}</span></td>
        <td className='list-item'><span className='item'>{phoneNo}</span></td>
        <td className='list-item'><span className='item'>{vechileNo}</span></td>
    </tr>
)
export default SocietyResident;