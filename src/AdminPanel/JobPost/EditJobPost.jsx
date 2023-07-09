import React, { useState,useEffect} from 'react'
import {toast} from 'react-toastify'
import { useSelector,useDispatch } from 'react-redux';
import { fetchSingleJobPost,editJobApi} from '../../Redux/JobPostSlice';
import jobPost from '../../Images/job-post.png'
import { useParams } from 'react-router-dom';
const EditJobPost = () => {
    const {id}=useParams();
    const dispatch=useDispatch();
    const {single_job_post_data}=useSelector(state=>state?.job_posts);
    const [user, setUser] = useState({
        jobTitle: '',
        companyName: '',
        logo: '',
        location: '',
        document: '',
        shortDesc: '',
        longDesc: '',
        jobNature: '',
        salaryRange: ''
    });
    
    useEffect(()=>{

        //Async Operation...
        dispatch(fetchSingleJobPost(id));
        setUser(single_job_post_data);
    },[dispatch]);
    const [error, setError] = useState({});
    //On Submit Validation...
    const validation = () => {
        const error = {};
        if (user.jobTitleitle === '') {
            error.title = 'Job Title is required';
        }
        if (user.companyName === '') {
            error.company = 'Company Name is required';
        }
        if (user.location === '') {
            error.location = 'Location is required';
        }
        if (user.shortDesc === '') {
            error.shortDesc = 'Short Description is required';
        }
        if (user.longDesc === '') {
            error.longDesc = 'Long Description is required';
        }
        if (user.jobNature === '') {
            error.jobNature = 'Job Nature is required';
        }
        if (user.salaryRange === '') {
            error.salaryRange = 'Salary Range is required';
        }
        return error;
    }
    //On Change Validation...
    const postUserData = e => {
        let name = e.target.name;
        let value = e.target.value;
        setUser({ ...user, [name]: value });
        if (name === 'jobTitle') {
            if (value.length === 0) {
                setError({ ...error, jobTitle: '@Job Title is Required' });
                setUser({ ...user, jobTitle: '' });
            }
            else {
                setError({ ...error, jobTitle: '' });
                setUser({ ...user, jobTitle: value })
            }
        }
        if (name === 'companyName') {
            if (value.length === 0) {
                setError({ ...error, companyName: '@Company Name is Required' });
                setUser({ ...user, companyName: '' });
            }
            else {
                setError({ ...error, companyName: '' });
                setUser({ ...user, companyName: value });
            }
        }
        if (name === 'location') {
            if (value.length === 0) {
                setError({ ...error, location: '@Company Location is Required' });
                setUser({ ...user, location: '' });
            }
            else {
                setError({ ...error, location: '' });
                setUser({ ...user, location: value });
            }
        }
        if (name === 'shortDesc') {
            if (value.length === 0) {
                setError({ ...error, shortDesc: '@Short Description is Required' });
                setUser({ ...user, shortDesc: '' });
            }
            else {
                setError({ ...error, shortDesc: '' });
                setUser({ ...user, shortDesc: value });
            }
        }
        if (name === 'longDesc') {
            if (value.length === 0) {
                setError({ ...error, longDesc: '@Long Description is Required' });
                setUser({ ...user, longDesc: '' });
            }
            else {
                setError({ ...error, longDesc: '' });
                setUser({ ...user, longDesc: value });
            }
        }
        if (name === 'jobNature') {
            if (value.length === 0) {
                setError({ ...error, jobNature: '@Job Nature is Required' });
                setUser({ ...user, jobNature: '' });
            }
            else {
                setError({ ...error, jobNature: '' });
                setUser({ ...user, jobNature: value });
            }
        }
        if (name === 'salaryRange') {
            if (value.length === 0) {
                setError({ ...error, salaryRange: '@Salary Range is Required' });
                setUser({ ...user, salaryRange: '' });
            }
            else {
                setError({ ...error, salaryRange: '' });
                setUser({ ...user, salaryRange: value });
            }
        }

    }
    const handleEdit= async e => {
        e.preventDefault();
        const errorList = validation();
        if (Object.keys(errorList).length < 1) {
            //Api call start... 
            const res = await editJobApi(id,user);
            toast.success('The Job has been edited successfully!!!', {
                theme: 'colored'
            });
            return res;
            //Api call end...
        }
        else {
            toast.error('Plz Fill the Application Form Correctly!!!!', {
                theme: 'colored'
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
                        <h3 className="font-color-black margin-right" style={{ color: 'orange' }}>Edit Job Post Form</h3>
                    </div>
                    <div className="vertical-space-60" />
                    <div className="job-post-box">
                        <form>
                            <div className="form-group">
                                <label htmlFor="exampleInputJobtitle">Job title</label>
                                <input type="text" className="form-control" id="exampleInputJobtitle" placeholder="Enter your job title" required autoComplete='on' name='jobTitle' onChange={postUserData} value={user?.jobTitle} />
                                <span className='text-danger'>{error?.jobTitle}</span>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="exampleInputCompany">Company</label>
                                        <input type="text" className="form-control" id="exampleInputCompany" placeholder="Full name of company" required autoComplete='on' value={user?.companyName} onChange={postUserData} name='companyName' />
                                        <span className='text-danger'>{error?.companyName}</span>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="exampleInputLoction">Loction</label>
                                        <input type="text" className="form-control" id="exampleInputLoction" placeholder="Company Address" required autoComplete='on' value={user?.location} name='location' onChange={postUserData} />
                                        <span className='text-danger'>{error?.location}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <div className="form-group ">
                                        <label>Company Logo</label>
                                        <div className="box text-center">
                                            <input type="file" name="logo" id="file-5" className="inputfile inputfile-4" data-multiple-caption="{count} files selected" multiple autoComplete='on' required onChange={postUserData} />
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
                                        <label>Document</label>
                                        <div className="box text-center">
                                            <input type="file" name="document" id="file-7" className="inputfile1 inputfile-4" data-multiple-caption="{count} files selected" multiple autoComplete='on' required onChange={postUserData} />
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
                            <div className="form-group">
                                <label htmlFor="exampleInputShortDescription">Short Description</label>
                                <textarea className="form-control small" id="exampleInputShortDescription" placeholder="Write short description" rows={3} required defaultValue={""} autoComplete='on' aria-required value={user?.shortDesc} name='shortDesc' onChange={postUserData} />
                                <span className='text-danger'>{error?.shortDesc}</span>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputLongDescription">Write full description</label>
                                <textarea className="form-control large" id="exampleInputLongDescription" placeholder="Write short description" rows={3} required defaultValue={""} value={user?.longDesc} name='longDesc' onChange={postUserData} />
                                <span className='text-danger'>{error?.longDesc}</span>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 col-md-12">
                                    <div className="form-group mybtn" id="Job-Nature">
                                        <label>Job Nature</label>
                                        <div className="row">
                                            <div className="col-lg-4 col-md-4">
                                                <div className="form-group">
                                                    <label htmlFor="sel1">Job Nature:</label>
                                                    <select className="form-control" id="sel1" name="jobNature" onChange={postUserData} value={user?.jobNature}>
                                                        <option value='Full Time'>Full Time</option>
                                                        <option value='Part Time'>Part Time</option>
                                                        <option value='Freelancing'>Freelancing</option>
                                                    </select>
                                                    <span className='text-danger'>{error?.jobNature}</span>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-12">
                                                <div className="form-group">
                                                    <label htmlFor="sel1">Salary Range:</label>
                                                    <select className="form-control" id="sel1" name="salaryRange" onChange={postUserData}>
                                                        <option value='5,000 - 10,000'>5,000 - 10,000</option>
                                                        <option value='3,000 - 5,000'>3,000 - 5,000</option>
                                                        <option value='2,000 - 1,000'>2,000 - 1,000</option>
                                                        <option value='7,000 - 10,000'>7,000 - 10,000</option>
                                                    </select>
                                                    <span className='text-danger'>{error?.salaryRange}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Agree with term and conditions</label>
                                    <div className="form-check">
                                        <input type="checkbox" className="form-check-input " id="exampleCheck1" required autoComplete='on' aria-required />
                                        <label className="form-check-label text-left" htmlFor="exampleCheck1">Lorem ipsum tempus amet
                                            conubia adipiscing fermentum viverra gravida, mollis suspendisse pretium dictumst
                                            inceptos mattis euismod lorem nulla magna duis nostra sodales luctus nulla</label>
                                    </div>
                                </div>
                                <button type="submit" className="btn Post-Job-Offer" onClick={handleEdit}>Edit Job Offer</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

        </>
    )
}

export default EditJobPost