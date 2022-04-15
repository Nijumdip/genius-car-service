import React from 'react';
import { Button } from 'react-bootstrap';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate();
    let errorElement;

    if (loading || loading1) {
        return <Loading></Loading>
    }
    
    if (error || error1) {
        errorElement =<div><p className='text-danger'>Error: {error?.message} {error1?.message} </p></div>
    }

    if (user || user1) {
        navigate('/home');
    }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{height:'2px'}} className='bg-primary w-50'></div>
                <p className='mt-2 p-3'>or</p>
                <div style={{ height: '2px' }} className='bg-primary w-50'></div>
            </div>
            {errorElement}
            <div>
                <Button onClick={()=>signInWithGoogle()}
                    className='w-50 m-2 d-block mx-auto' variant="info">
                    <img style={{width:'30px'}} src="https://cdn3.iconfinder.com/data/icons/inside/PNG/256x256/icontexto-inside-google.png" alt="" />
                    <span className='px-3'>Google Sign In</span>
                </Button>
                <Button className='w-50 m-2 d-block mx-auto' variant="primary">
                    <img style={{width:'30px'}} src="https://cdn.pixabay.com/photo/2019/04/17/17/40/facebook-4134867_1280.png" alt="" />
                    <span className='px-3'>Facebook Sign In</span>
                </Button>
                <Button
                    onClick={()=>signInWithGithub()}
                    className='w-50 m-2 d-block mx-auto' variant="secondary">
                    <img style={{width:'30px'}} src="https://octodex.github.com/images/Professortocat_v2.png" alt="" />
                    <span className='px-3'>Github Sign In</span>
                    {/*  
                    https://github.githubassets.com/images/modules/logos_page/Octocat.png
                */}
                </Button>
            </div>
        </div>
    );
};

export default SocialLogin;