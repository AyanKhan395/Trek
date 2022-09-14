import React, {useState} from "react"
import "./login.css"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Login = ({ setLoginUser}) => {

    const history = useNavigate()

    const [ user, setUser] = useState({
        email:"",
        password:""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const login = () => {
        axios.post("http://localhost:9002/login", user)
        .then(res => {
            alert(res.data.message)
            setLoginUser(res.data.user)
            history("/")
        })
    }

    return (
        
        <div className="login" style={{alignItems: "center", textAlign: "center"}}>
            <h1 style={{marginBlock: "10px", fontSize: "40px"}}>Login</h1>
            <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email" style={{ marginBlock: "10px" }}></input>
            <input type="password" name="password" value={user.password} onChange={handleChange}  placeholder="Enter your Password" style={{ marginBlock: "10px" }}></input>
            <div className="button" onClick={login} style={{marginTop: "30px"}}>Login</div>
            <div style={{fontSize: "20px"}}>or</div>
            <div className="button" onClick={() => history("/register")}>Register</div>
            
        </div>
    )
}

export default Login