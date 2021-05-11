import React, {useState} from 'react'
import axios from 'axios'
import { useHistory } from "react-router";

const initialFormValues = {
    credentials: {
        email: '',
        password: ''
        }
}



export default function Login () {

    const [formValues, setFormValues] = useState(initialFormValues)


    const handleChange = (e) => {
        setFormValues({ credentials: {
            ...formValues.credentials,
            [e.target.name]: e.target.value,
        }});
      };

      const history = useHistory()


      const login = (e) => {
        e.preventDefault();
        axios
          .post("https://maize-motors-data.herokuapp.com/users/login", formValues.credentials)
          .then((res) => {
            console.log(res);
            localStorage.setItem("token", JSON.stringify(res.data.payload));
            history.push("/protected");
          })
          .catch((err) => console.log(err));

          setFormValues({credentials: {
              email: '',
              password: ''
          }})
      };

    return (
    <div>
        <h2>Admin Login</h2>
        <form onSubmit={login}>
        <div id="form">
            <div class="forminput">
          <label htmlFor="username">Email:</label>
          <input 
            id="username"
            type="text"
            name="username"
            value={formValues.credentials.email}
            onChange={handleChange}
            ></input>
            </div>
          <br></br>
            <div class="forminput">
          <label>Password:</label>
          <input 
            id="password"
            type="password"
            name="password"
            value={formValues.credentials.password}
            onChange={handleChange}

            ></input>
            </div>
        </div>
          <br></br><br></br>
          <button className="loginbutton" type="submit">Submit</button>
        </form>
    </div>
    )
}