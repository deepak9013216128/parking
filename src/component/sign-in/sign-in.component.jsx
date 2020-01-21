import React from 'react';

import './sign-in.style.css';

import FormInput from '../form-input/form-input.component';

import CustomButton from '../custom-button/custom-button.component';

import {SignInWithGoogle} from '../../firebase/firebase.utils';

import {auth, createUserProfileDocument} from '../../firebase/firebase.utils';

class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        // this.setState({email:'',password:''})
        const {email,password} = this.state;
        console.log(email,password)
        try{
            const {user} = await auth.signInWithEmailAndPassword(email,password)
            await createUserProfileDocument(user)
            this.setState({
                email: '',
                password: ''
            })
        }
        catch(error){
            console.error(error)
        }
    }

    handleChange = (event) => {
        const {value,name} = event.target;
        this.setState({[name]: value})
    }

    render(){
        return (
            <div className='sign-in' >
                <h2>I already have a account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit} >
                    <FormInput 
                        name='email'
                        type='email' 
                        value={this.state.email} 
                        handleChange={this.handleChange}
                        label='email'
                        required 
                    />
                    <FormInput 
                        name='password' 
                        type='password'
                        value={this.state.password}
                        handleChange={this.handleChange} 
                        label='password' 
                        required 
                    />
                    <div className='buttons'>
                        <CustomButton type='submit' >Sign In</CustomButton>
                        <CustomButton type='submit' onClick={SignInWithGoogle} isGoogleSignIn>
                          Sign In With Google
                        </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;