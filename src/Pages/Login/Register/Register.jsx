import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../Shared/Loading/Loading';


const Register = () => {
    const [agree, setAgree] = useState(false);
    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    if (user) {
        console.log('user', user);  
    }
    if (loading || updating) {
        return <Loading></Loading>
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        // const agree = event.target.terms.checked;
    
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        console.log('Updated profile');
        navigate('/home');
    }

    const navigateLogin = () => {
        navigate('/login');
    }

    return (
        <div className="container w-50 mx-auto m-5">
            <h2 className="text-primary text-center"> Please Register</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <input type="text" className="form-control" name='name' id="exampleInputName1" placeholder="Your Name" required/>
                </div>
                <div className="mb-3">
                    <input type="email" className="form-control" name='email' id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email address" required/>
                </div>
                <div className="mb-3">
                    <input type="password" className="form-control" name='password' id="exampleInputPassword1" placeholder="Password" required/>
                </div>
                <div className="mb-3 form-check">
                    <input onClick={()=>setAgree(!agree)} type="checkbox" className="form-check-input" name='terms'  id="exampleCheck1" />
                    {/* <label className={agree ? "text-primary" : "text-danger"}htmlFor="exampleCheck1">Accept Genius Car Terms and Conditions</label> */}
                    <label className={`ps-2 ${agree ? '' : 'text-danger'}`}htmlFor="exampleCheck1">Accept Genius Car Terms and Conditions</label>
                </div>
                <button disabled={!agree} type="submit" className="btn btn-primary d-block mx-auto w-50 mb-3">Register</button>
                
            </form>
            <p>Already Have an Account ? <Link onClick={navigateLogin} to='/login' className='text-primary text-decoration-none'>Please Login</Link></p>
             <SocialLogin></SocialLogin>   
        </div>
    );
};

export default Register;