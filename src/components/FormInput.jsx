import React, {useState} from "react";
import FormData from "./FormData";

const FormInput = props => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    return (
        <div className="inputAndData">
            <form className="inputForm">
                <div className="inputDiv">
                    <label htmlFor="firstName">First Name: </label>
                    <input type="text" name="firstName" id="firstName" onChange={ (e) => setFirstName(e.target.value) } value={ firstName }/>
                </div>
                <div className="inputDiv">
                    <label htmlFor="lastName">Last Name: </label>
                    <input type="text" name="lastName" id="lastName" onChange={ (e) => setLastName(e.target.value) } value={ lastName }/>
                </div>
                <div className="inputDiv">
                    <label htmlFor="email">Email Address: </label>
                    <input type="text" name="email" id="email" onChange={ (e) => setEmail(e.target.value) } value={ email }/>
                </div>
                <div className="inputDiv">
                    <label htmlFor="password">Password: </label>
                    <input type="password" name="password" id="password" onChange={ (e) => setPassword(e.target.value) } value={ password }/>
                </div>
                <div className="inputDiv">
                    <label htmlFor="confirmPassword">Confirm Password: </label>
                    <input type="password" name="confirmPassword" id="confirmPassword" onChange={ (e) => setConfirmPassword(e.target.value) } value={ confirmPassword }/>
                </div>
            </form>
            <FormData firstName={firstName} lastName={lastName} email={email} password={password} confirmPassword={confirmPassword}/>
        </div>
    );
}

export default FormInput;