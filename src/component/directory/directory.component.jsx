import React from 'react';
import Society from '../society/society.component';
import './directory.style.css';

// import Data from './directory.data';
import {database} from '../../firebase/firebase.utils'


class Directory extends React.Component{
    constructor(){
        super();
        this.state={
            societies:null
        }
    }
    componentDidMount(){
        const societyRef = database().ref('society/');
        societyRef.on('value', (snapshot)=> {
          const data = snapshot.val()
          this.setState({societies:data})
        });
        
    }
    render(){
        if (!this.state.societies) {
            return (
                <div className="loader loading"></div>
            );
        }
        return (
            
            <div className='directory-menu'>
                {
                    this.state.societies.map(({id,...otherSocietyProps}) =>
                        <Society key={id} {...otherSocietyProps}/>    
                    )
                }
            </div>
        )
    }
}

export default Directory;