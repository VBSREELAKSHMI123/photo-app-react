import React from 'react'
import NavBar from './NavBar'

const AddPhoto = () => {
  return (
    <div>
        <NavBar/>
        <div className="container">
            <center><h1><b>UPLOAD IMAGE</b></h1></center>
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">UPLOAD IMAGE</label>
                            <input type="file" name="" id="" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">ID</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">DATE</label>
                            <input type="date" name="" id="" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">CATEGORY</label>
                            <select name="" id="" className="form-control">
                                <option value="travel">travel</option>
                                <option value="occassion">occassion</option>
                                <option value="friends"friends></option>
                                <option value="love">love</option>
                                <br />
                            </select>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-12 col-xl-12 col-xxl-12">
                            <center><button className="btn btn-success">UPLOAD</button></center>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddPhoto