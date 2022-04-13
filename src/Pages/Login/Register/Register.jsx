import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        // console.log(event.target.email.value);
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
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
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Register</button>
                
            </form>
            <p>Already Have an Account ? <Link onClick={navigateLogin} to='/login' className='text-danger text-decoration-none'>Please Login</Link></p>
                
        </div>
    );
};

export default Register;