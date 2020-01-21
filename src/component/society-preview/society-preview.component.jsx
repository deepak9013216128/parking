import React from 'react';
import SocietyResident from '../society-resident/society-resident.component';
import './society-preview.style.css';

const SocietyPreview = ({societyName,residents})=>(
    <div className='society-preview'>
        <h1 className='societyName'>{societyName}</h1>
        <div className='preview'>
            <table className='list'>
                <thead className='list-title'>
                    <tr >
                        <th className='list-item'>Resident Name</th>
                        <th className='list-item'>Flat No.</th>
                        <th className='list-item'>Phone No</th>
                        <th className='list-item'>Vechile No. plate</th>
                    </tr>
                </thead>
            </table>
                <div className="society-resident">
                    <div className='society-footer'>
                        <table className='list'>
                            <tbody>
                            {
                                residents
                                .map(({id, ...otherItemProps}) =>(
                                    <SocietyResident key={id}{...otherItemProps} />
                                ))
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
        </div>
    </div>
)
export default SocietyPreview;