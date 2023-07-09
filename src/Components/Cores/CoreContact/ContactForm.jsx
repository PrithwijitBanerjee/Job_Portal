import React, { useState } from 'react'
import { postUserContact } from '../../../Redux/ContactSlice';
import {toast} from 'react-toastify'
const ContactForm = () => {
   
    const [user,setUser]=useState({
        name:'',
        subject:'',
        email:'',
        mobile:'',
        message:''
    });
    const [error,setError]=useState({});
    //On Submit Validation...
    const validation=()=>{
        const error={};
        if(user?.name==='')
        {
            error.name='Name is Required';
        }
        if(user?.subject==='')
        {
            error.subject='Subject is Required';
        }
        if(user?.email==='')
        {
            error.email='Email Id is Required';
        }
        if(user?.mobile?.length===0)
        {
            error.mobile='Mobile Number is Required';
        }
        if(user?.message==='')
        {
            error.message='Message is Required';
        }

        return error;
    }

    //On Change Validation...
    const postUserData=e=>{
        let name=e.target.name;
        let value=e.target.value;
        setUser({...user,[name]:value});
        if(name==='name')
        {
            if(value.length===0)
            {
                setUser({...user,name:''});
                setError({...error,name:'@Name is Required'});
            }
            else{
                setUser({...user,name:value});
                setError({...error,name:''});
            }
        }
        if(name==='subject')
        {
            if(value.length===0)
            {
                setUser({...user,subject:''});
                setError({...error,subject:'@Subject is Required'});
            }
            else{
                setUser({...user,subject:value});
                setError({...error,subject:''});
            }
        }
        if(name==='email')
        {
            if(value.length===0)
            {
                setUser({...user,email:''});
                setError({...error,email:'@Email Id is Required'});
            }
            else{
                setUser({...user,email:value});
                setError({...error,email:''});
            }
        }
        if(name==='mobile')
        {
            if(value.length===0)
            {
                setUser({...user,mobile:''});
                setError({...error,mobile:'@Mobile Number is Required'});
            }
            else{
                setUser({...user,mobile:value});
                setError({...error,mobile:''});
            }
        }
        if(name==='message')
        {
            if(value.length===0)
            {
                setUser({...user,message:''});
                setError({...error,message:'@Message is Required'});
            }
            else{
                setUser({...user,message:value});
                setError({...error,message:''});
            }
        }
    }

    const handleSubmit=async e=>{
        e.preventDefault();
        const errorList=validation();
        setError(errorList);
        if(Object?.keys(errorList)?.length<1)
        {
               //Api starts...
                await postUserContact(user);
               //Api ends...
                toast.success('Thank You for Contact with Us',{
                    theme:'colored'
                });
        }
        else{
            toast.error('Plz fill the form properly!!!',{
                theme:'colored'
            });
        }
    }
    return (
        <>
            <section id="Get-in-Touch">
                <div className="container text-center position-absolute">
                    <div className="Get-in-Touch-box">
                        <h3 className="text-left">Get in Touch</h3>
                        <div className="vertical-space-5" />
                        <p className="text-left">Lorem ipsum tempus amet conubia adipiscing fermentum viverra gravida sodales luctus
                            nulla</p>
                        <div className="vertical-space-40" />
                        <form>
                            <div className="row">
                                <div className=" col-lg-6 col-md-12">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Full name" required autoComplete='on' name='name' value={user?.name} onChange={postUserData}/>
                                        <span className="text-danger">{error?.name}</span>
                                    </div>
                                </div>
                                <div className=" col-lg-6 col-md-12">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Subject" required autoComplete='on' name='subject' value={user?.subject} onChange={postUserData}/>
                                        <span className="text-danger">{error?.subject}</span>

                                    </div>
                                </div>
                                <div className=" col-lg-6 col-md-12">
                                    <div className="form-group">
                                        <input type="email" className="form-control" placeholder="Email address" required autoComplete='on' name='email' value={user?.email} onChange={postUserData}/>
                                        <span className="text-danger">{error?.email}</span>
                                    </div>
                                </div>
                                <div className=" col-lg-6 col-md-12">
                                    <div className="form-group">
                                        <input type="tel" className="form-control" placeholder="Phone number" required autoComplete='on' name='mobile' value={user?.mobile} onChange={postUserData}/>
                                        <span className="text-danger">{error?.mobile}</span>
                                    </div>
                                </div>
                                <div className=" col-lg-12 col-md-12">
                                    <div className="form-group">
                                        <textarea className="form-control" placeholder="Messege" rows={3} required defaultValue={""} name='message' value={user?.message} onChange={postUserData}/>
                                        <span className="text-danger">{error?.message}</span>
                                    </div>
                                </div>
                            </div>
                            <button type="submit" className="Send" onClick={handleSubmit}>Send</button>
                            <button type="reset" className="button button-rounded  close">×</button>
                        </form>
                    </div>
                </div>
            </section>

        </>
    )
}

export default ContactForm