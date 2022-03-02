import map from "./map.jpg";
import reserve from "./reserve.jpg";
import handshake from  "./handshake.jpg";
import useLocalStorage from "use-local-storage";
import { useFormik } from "formik";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
function Registration() {
    let [Users, setUsers]= useState([])
    let [result, setResult] = useLocalStorage("Registration","");
    const formik = useFormik(
        {
            initialValues : {
                name: "",
                email:"",
                password: "",
            },
            onSubmit(values) {
                let obj = {
                    name: formik.values.name,
                    email: formik.values.email,
                    password: formik.values.password,
                }
                let newUser = [...Users, obj];
                setUsers(newUser)
                setResult(newUser)

            },
        });
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
                <div className="container">
                    <a className="navbar-brand" href="#">My<span>Book</span></a>
                        <div><ul className="navbar-nav mr-auto">
                            <li className="nav-item active"><a href="#" className="nav-link">Home</a></li>
                            <li className="nav-item "><a href="#" className="nav-link">About</a></li>
                            <li className="nav-item "><a href="#" className="nav-link">Services</a></li>
                            <li className="nav-item "><a href="#" className="nav-link">Members</a></li>
                            <li className="nav-item "><a href="#" className="nav-link">History</a></li>
                            <li className="nav-item "><a href="#" className="nav-link">Help</a></li>
                            <li className="nav-item "><a href="#" className="nav-link">User</a></li>
                        </ul>
                        </div>
                </div>
            </nav>
            <section className="ftco-section ftco-no-pt bg-light">
                <div className="container">
                    <div className="row no-gutters mt-5">
                        <div className="col col-12 d-flex align-items-center">
                        <section className="container w-350 ftco-animate bg-primary">
                            <form onSubmit={formik.handleSubmit} noValidate  >
                                <div className="form-group">
                                    <p>Email</p>
                                    <input type="email" name="email" 
                                    id="email"  placeholder="Email@gmail.com"
                                    value={formik.values.email}
                                    onChange={formik.handleChange} />
                                </div>
                                <div className="form-group">
                                    <p>UserName</p>
                                    <input type="text" name="name" id="name" 
                                    placeholder="User Name" 
                                    value={formik.values.name}
                                    onChange={formik.handleChange}/>
                                </div>
                                <div className="form-group">
                                    <p>Password</p>
                                    <input type="password" name="password" id="password" placeholder="password" 
                                    value={formik.values.password}
                                    onChange={formik.handleChange}/>
                                </div> <br />
                                <div className="from-group text-center">
                                    <input type="submit"
                                    className="btn btn-success py-3 px-4" />
                                </div>
                            </form>
                        </section>
                        <div className="col-9 d-flex align-items-center ">
                                <div className="services-wrap rounded-right w-100">
                                <h3 className="heading-section mb-4 text-center">Better Way to Rent Your Perfect Cars</h3>
                                <div className="row d-flex mb-4">
                                    <div className="col-md-4 d-flex align-self-stretch ftco-animate ml-2">
                                    <div className="services w-100 text-center">
                                        <div className="icon d-flex align-items-center justify-content-center ">
                                            <span><i><img src={map}/></i></span></div>
                                        <div className="text w-100">
                                        <h3 className="heading mb-2">Chat</h3>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="col-md-4 d-flex align-self-stretch ftco-animate">
                                    <div className="services w-100 text-center">
                                        <div className="icon d-flex align-items-center justify-content-center">
                                            <span><i><img src={handshake}/></i></span></div>
                                        <div className="text w-100">
                                        <h3 className="heading mb-2">Connect</h3>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="col-md-4 d-flex align-self-stretch ftco-animate">
                                    <div className="services w-100 text-center">
                                        <div className="icon d-flex align-items-center justify-content-center">
                                            <span><i><img src={reserve} /></i></span></div>
                                        <div className="text w-100">
                                        <h3 className="heading mb-2">Explore</h3>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
        </div>
    )
}
export default Registration;