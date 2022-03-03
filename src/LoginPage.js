
import 'bootstrap/dist/css/bootstrap.min.css';
import useLocalStorage from "use-local-storage";
import { useFormik } from "formik";
import { useState } from "react";
const LoginPage = () => {
    let [loggedVar, setLoggedVar] = useState("Please Login")
    let [details, setDetails] = useState([]);
    let [result, setResult] =useLocalStorage("Login","");
    const show = () => {

    }
    const formik = useFormik(
        {
            initialValues : {
                email:"",
                password: "",
            },
            onSubmit(values) {
                let obj = {
                    email: formik.values.email,
                    password: formik.values.password,
                }
                let reg = JSON.parse(localStorage.getItem("Registration"));
                for(let i=0; i< reg.length ; i++){
                    if(obj.email == reg[i].email && obj.password == reg[i].password){
                        let newresult = [ obj];
                        localStorage.setItem("LoggedIn",parseInt(1))
                        alert("Loggedin")
                        setLoggedVar("LoggedIn")
                        setDetails(newresult);
                        setResult(newresult);
                    }
                }

            },
        });

    return(
        <div>
            <section className="login">
            <div className="container-fluid">
                <div className="row">
                <div className="col-sm-6 text-black">

                    <div className="px-5 ms-xl-4">
                    <i className="fas fa-crow fa-2x me-3 pt-5 mt-xl-4"></i>
                    <span className="h1 fw-bold mb-0">Login Page</span>
                    </div>

                    <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">

                    <form onSubmit={formik.handleSubmit} noValidate  >

                        <h3 className="fw-normal mb-3 pb-3">Enter </h3>

                        <div className="form-outline mb-4">
                        <input type="email" id="email" name="email" className="form-control form-control-lg" placeholder="Email" 
                        value={formik.values.email}
                        onChange={formik.handleChange}/>
                        </div>

                        <div className="form-outline mb-4">
                        <input type="password" id="password" name="password" className="form-control form-control-lg" placeholder="Password" 
                        value={formik.values.password}
                        onChange={formik.handleChange}/>
                        </div>
   
                        <div className="from-group text-center">
                                    <input type="submit"
                                    className="btn btn-success py-3 px-4" />
                        </div>
                    </form>

                    </div>

                </div>
                <div className="col-sm-6 px-0 d-none d-sm-block">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img3.webp" alt="Login image" className="w-100 h-90" 
                    />
                </div>
                </div>
            </div>
        </section>
        </div>
    )
}
export default LoginPage;