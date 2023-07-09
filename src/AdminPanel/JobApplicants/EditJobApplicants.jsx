import React,{useEffect, useState} from 'react'
import {toast} from 'react-toastify'
import { fetchSingleJobApplication,editJobApplication } from '../../Redux/JobApplicationSlice';
import { useParams } from 'react-router-dom';
import jobPost from '../../Images/job-post.png';
const EditJobApplicants = () => {
    const [error, setError] = useState({});
    const [user, setUser] = useState({
        name: '',
        email: '',
        address: '',
        mobile: '',
        secondary: '',
        hs: '',
        highestQuality: '',
        experience: '',
        jobLocation: '',
        cv:'',
        image:''
    });
    const {id}=useParams();
    const getSingleInfo=async()=>{
        const res=await fetchSingleJobApplication(id);
        setUser(res);
    }
    useEffect(()=>{
        getSingleInfo();
    },[]);
     //On Submit Validation...
     const validation = () => {
        const error = {};
        if (user.name === '') {
            error.name = 'Name is required';
        }
        if (user.email === '') {
            error.email = 'Email Id is required';
        }
        if (user.address === '') {
            error.address = 'Address is required';
        }
        if (user.mobile === '') {
            error.mobile = 'Mobile No.  is required';
        }
        if (user.secondary === '') {
            error.secondary = 'Secondary Marks is required';
        }
        if (user.hs === '') {
            error.hs = 'HS Marks  is required';
        }
        if (user.highestQuality === '') {
            error.highestQuality = 'highestQuality is required';
        }
        if (user.experience === '') {
            error.experience = 'experience is required';
        }
        if (user.jobLocation === '') {
            error.jobLocation = 'jobLocation is required';
        }
        if (user.cv === '') {
            error.cv = 'CV is required';
        }
        if (user.image === '') {
            error.image = 'Image is Required';
        }
        return error;
    }

    //On Change Validation...
    const postUserData = e => {
        let name = e.target.name;
        let value = e.target.value;
        setUser({ ...user, [name]: value });
        if (name === 'name') {
            if (value.length === 0) {
                setError({ ...error, name: '@Name is Required' });
                setUser({ ...user, name: '' });
            }
            else {
                setError({ ...error, name: '' });
                setUser({ ...user, name: value });
            }
        }
        if (name === 'email') {
            if (value.length === 0) {
                setError({ ...error, email: '@Email Id is Required' });
                setUser({ ...user, email: '' });
            }
            else {
                setError({ ...error, email: '' });
                setUser({ ...user, email: value });
            }
        }
        if (name === 'address') {
            if (value.length === 0) {
                setError({ ...error, address: '@Address is Required' });
                setUser({ ...user, address: '' });
            }
            else {
                setError({ ...error, address: '' });
                setUser({ ...user, address: value });
            }
        }
        if (name === 'mobile') {
            if (value.length === 0) {
                setError({ ...error, mobile: '@Mobile is Required' });
                setUser({ ...user, mobile: '' });
            }
            else {
                setError({ ...error, mobile: '' });
                setUser({ ...user, mobile: value });
            }
        }
        if (name === 'secondary') {
            if (value.length === 0) {
                setError({ ...error, secondary: '@Secondary Marks is Required' });
                setUser({ ...user, secondary: '' });
            }
            else {
                setError({ ...error, secondary: '' });
                setUser({ ...user, secondary: value });
            }
        }
        if (name === 'hs') {
            if (value.length === 0) {
                setError({ ...error, hs: '@HS Marks is Required' });
                setUser({ ...user, hs: '' });
            }
            else {
                setError({ ...error, hs: '' });
                setUser({ ...user, hs: value });
            }
        }
        if (name === 'highestQuality') {
            if (value.length === 0) {
                setError({ ...error, highestQuality: '@Highest Qualification is Required' });
                setUser({ ...user, highestQuality: '' });
            }
            else {
                setError({ ...error, highestQuality: '' });
                setUser({ ...user, highestQuality: value });
            }
        }
        if (name === 'experience') {
            if (value.length === 0) {
                setError({ ...error, experience: '@Experience field is Required' });
                setUser({ ...user, experience: '' });
            }
            else {
                setError({ ...error, experience: '' });
                setUser({ ...user, experience: value });
            }
        }
        if (name === 'jobLocation') {
            if (value.length === 0) {
                setError({ ...error, jobLocation: '@Job Location is Required' });
                setUser({ ...user, jobLocation: '' });
            }
            else {
                setError({ ...error, jobLocation: '' });
                setUser({ ...user, jobLocation: value });
            }
        }
        if (name === 'cv') {
            if (value.length === 0) {
                setError({ ...error, cv: '@cv is Required' });
                setUser({ ...user, cv: '' });
            }
            else {
                setError({ ...error, cv: '' });
                setUser({ ...user, cv: e?.target?.value});
            }
        }
        if (name === 'image') {
            if (value.length === 0) {
                setError({ ...error, image: '@Image is Required' });
                setUser({ ...user, image: '' });
            }
            else {
                setError({ ...error, image: '' });
                setUser({ ...user, image: e?.target?.value});
            }
        }
    }

    const handleSubmit = async e => {
        e.preventDefault();
        const errorList = validation();
        setError(errorList);
        if (Object.keys(errorList).length < 1) {
            // const formData = new FormData();
            // formData.append('name', user?.name);
            // formData.append('email', user?.email);
            // formData.append('address', user?.address);
            // formData.append('mobile', user?.mobile);
            // formData.append('secondary', user?.secondary);
            // formData.append('hs', user?.hs);
            // formData.append('experience', user?.experience);
            // formData.append('jobLocation', user?.jobLocation);
            // formData.append('highestQuality', user?.highestQuality);
            // formData.append('cv', cv);
            // formData.append('image',image);
            // console.log('formData:',formData);
            //Api call start ...
            // const config = {     
            //     headers: { 'content-type': 'multipart/form-data' }
            // }
            const res = await editJobApplication(id,user);
            toast.success('You have successfully edited your Application!!!!',{
                theme:'colored'
            });
            return res;
            //Api call end...
        }
        else{
            toast.error('Plz Fill the Application Form Correctly!!!!',{
                theme:'colored'
            });
        }
    }
    return (
        <>
            <section id="post_job">
                <div className="vertical-space-100" />
                <div className="vertical-space-101" />
                <div className="container" style={{ boxShadow: '30px 30px 50px', padding: '30px', marginBottom: '80px', marginLeft: '80px', borderRadius: '20px' }}>
                    <div className="list-box text-center" style={{ width: '600px' }}>
                        <h3 className="font-color-black margin-right" style={{ color: 'orange' }}>Edit Job Application Form</h3>
                    </div>
                    <div className="vertical-space-60" />
                    <div className="job-post-box">
                        <form>
                            <div className="form-group">
                                <label htmlFor="exampleInputJobtitle">Full Name</label>
                                <input type="text" className="form-control" id="exampleInputJobtitle" placeholder="Enter your Name" required autoComplete='on' onChange={postUserData} value={user?.name} name='name' />
                                <span className='text-danger'>{error?.name}</span>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="exampleInputCompany">Email Id</label>
                                        <input type="mail" className="form-control" id="exampleInputCompany" placeholder="Email ID" required autoComplete='on' onChange={postUserData} value={user?.email} name='email' />
                                        <span className='text-danger'>{error?.email}</span>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="exampleInputLoction">Residential Address</label>
                                        <input type="text" className="form-control" id="exampleInputLoction" placeholder="Residential Address" required onChange={postUserData} value={user?.address} name='address' />
                                        <span className='text-danger'>{error?.address}</span>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="exampleInputLoction">Contact Number</label>
                                        <input type="tel" className="form-control" id="exampleInputLoction" placeholder="Mobile No" required autoComplete='on' onChange={postUserData} value={user?.mobile} name='mobile' />
                                        <span className='text-danger'>{error?.mobile}</span>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="exampleInputLoction">X %</label>
                                        <input type="text" className="form-control" id="exampleInputLoction" placeholder="Enter Your xth percentage" required autoComplete='on' onChange={postUserData} value={user?.secondary} name='secondary' />
                                        <span className='text-danger'>{error?.secondary}</span>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="exampleInputLoction">XII %</label>
                                        <input type="text" className="form-control" id="exampleInputLoction" placeholder="Enter Your xth percentage" required autoComplete='on' onChange={postUserData} value={user?.hs} name='hs' />
                                        <span className='text-danger'>{error?.hs}</span>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="exampleInputLoction">Highest Qualification</label>
                                        <select className="form-control" id="sel1" name='highestQuality' onChange={postUserData}>
                                            <option value='Graduation'>Graduation</option>
                                            <option value='Post Graduation'>Post Graduation</option>
                                            <option value='Others'>Others</option>
                                        </select>
                                        <span className='text-danger'>{error?.highestQuality}</span>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="exampleInputLoction">Experience</label>
                                        <select className="form-control" id="sel1" name="experience" onChange={postUserData}>
                                            <option value='Less than 1 year'>Less than 1 year</option>
                                            <option value='1 to 2year'>1 to 2year</option>
                                            <option value='2 to 3year'>2 to 3year</option>
                                            <option value='3 to 4year'>3 to 4year</option>
                                            <option value='4 to 5year'>4 to 5year</option>
                                            <option value='More than 5 year'>More than 5 year</option>
                                        </select>
                                        <span className='text-danger'>{error?.experience}</span>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12">
                                    <div className="form-group mybtn" id="Job-Nature">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="sel1">Preffered Job Location:</label>
                                                    <select className="form-control" id="sel1" name="jobLocation" style={{ width: '470px' }} onChange={postUserData}>
                                                        <option value='Kolkata'>Kolkata</option>
                                                        <option value='Bangalore'>Bangalore</option>
                                                        <option value='Chennai'>Chennai</option>
                                                        <option value='Pune'>Pune</option>
                                                        <option value='Noida'>Noida</option>
                                                    </select>
                                                    <span className='text-danger'>{error?.jobLocation}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <div className="form-group ">
                                        <label>Upload Your CV Here</label>
                                        <div className="box text-center">
                                            <input type="file" name="cv" id="file-5" className="inputfile inputfile-4" multiple required autoComplete='on' onChange={postUserData} />
                                            <span className='text-danger'>{error?.cv}</span>
                                            <label htmlFor="file-5">
                                                <i>
                                                    <img src={jobPost} className="imtges" alt='' />
                                                </i>
                                                <span>Drop your file here, or <i className="font-color-orange">Browse</i></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="form-group">
                                        <label>Upload Your Current Pic</label>
                                        <div className="box text-center">
                                            <input type="file" name="image" id="file-7" className="inputfile1 inputfile-4" multiple onChange={postUserData} />
                                            <span className='text-danger'>{error?.image}</span>
                                            <label htmlFor="file-7">
                                                <i>
                                                    <img src={jobPost} className="imtges" alt='' />
                                                </i>
                                                <span>Drop your file here, or <i className="font-color-orange">Browse</i></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group">
                                    <label>Agree with term and conditions</label>
                                    <div className="form-check">
                                        <input type="checkbox" className="form-check-input " id="exampleCheck1" required autoComplete='on' />
                                        <label className="form-check-label text-left" htmlFor="exampleCheck1">Lorem ipsum tempus amet
                                            conubia adipiscing fermentum viverra gravida, mollis suspendisse pretium dictumst
                                            inceptos mattis euismod lorem nulla magna duis nostra sodales luctus nulla</label>
                                    </div>
                                </div>
                                <button type="submit" className="btn Post-Job-Offer" onClick={handleSubmit}>Edit Job Application</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

        </>
    )
}

export default EditJobApplicants