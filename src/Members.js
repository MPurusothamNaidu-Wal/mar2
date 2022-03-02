import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react";
const Members = () => {
    let [email, setEmail] = useState()
    let [name, setUsername] = useState();
    let [password, setPassword] = useState();
    let LoggedIn = parseInt(localStorage.getItem("LoggedIn"));
    useEffect(() => {
        if (LoggedIn) {
            let logUsername = JSON.parse(localStorage.getItem("Login"));
            let registerDetail = JSON.parse(localStorage.getItem("Registration"))
            for (let i = 0; i < registerDetail.length; i++) {
                if (logUsername[0].email == registerDetail[i].email) {
                    setEmail(registerDetail[i].email);
                    setUsername(registerDetail[i].name);
                    setPassword(registerDetail[i].password);
                    break;
                }
            }
        };
    }, []);
    if (LoggedIn) {
        return (
            <div className="member">
                <h2>Logged User Details</h2><br />
                <b>Email : </b>{email}<br />
                <b>Name : </b>{name}<br />
                <b>Password : </b>{password}<br />
            </div>
        )
    }
    else{
        return <div><h4>Please register and login</h4></div>
    }
};
export default Members;