import React from 'react';

import SocietyResident from '../society-resident/society-resident.component';
import SocietyLiveStatus from '../society-liveStatus/society-liveStatus.component';

import './society-preview.style.css';

class SocietyPreview extends React.Component {
	constructor(props){
		super(props);
		this.state={
			toggle: false
		}
	}

	handleChange = () => (
		this.setState({toggle: !this.state.toggle})
	)

	render(){
		const {societyName,residents,liveStatus,totalParkingSpace,availableParkingSpace} = this.props;
		const {toggle} = this.state;
		return(
    <div className='society-preview'>
    	<div className='society-details' >
            <h1 className='societyName'>{societyName}</h1>
            <h1 className='society-detail'>Total Parking Space: {totalParkingSpace}</h1>
    		<h1 className='society-detail'>Available Parking Space: {availableParkingSpace}</h1>
    		<h1 className='society-detail' onClick={this.handleChange} >Resident</h1>
    		<h1 className='society-detail' onClick={this.handleChange} >Live Status</h1>
    	</div>
        <div className='preview'>
            <table className='list'>
                <thead className='list-title'>
                    <tr >
                        <th className='list-item'>{toggle?'Resident Name':'Name'}</th>
                        <th className='list-item'>{toggle?'Flat No.':'Is Resident'}</th>
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
                        	toggle ?(
                            residents
                            .map(({id, ...otherItemProps}) =>(
                                <SocietyResident key={id}{...otherItemProps} />
                            ))
                          ):(
                          	liveStatus.map(({id,...otherItemProps})=>(
                          		<SocietyLiveStatus key={id} {...otherItemProps} />))
                          )
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
  )
	}
}

export default SocietyPreview;