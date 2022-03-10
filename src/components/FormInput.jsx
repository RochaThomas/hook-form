import React, {useState} from "react";
import FormData from "./FormData";

const FormInput = props => {
    const [firstName, setFirstName] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastName, setLastName] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if (e.target.value.length < 1){
            setFirstNameError("");
        }
        else if (e.target.value.length < 2){
            setFirstNameError("First name must be at least 2 characters");
        }
        else {
            setFirstNameError("");
        }
    }

    const handleLastName = (e) => {
        setLastName(e.target.value);
        if (e.target.value.length < 1){
            setLastNameError("");
        }
        else if (e.target.value.length < 2){
            setLastNameError("Last name must be at least 2 characters");
        }
        else {
            setLastNameError("");
        }
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        if (e.target.value.length < 1){
            setEmailError("");
        }
        else if (e.target.value.length < 5){
            setEmailError("Email must be at least 5 characters");
        }
        else {
            setEmailError("");
        }
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
        if (e.target.value.length < 1){
            setPasswordError("");
        }
        else if (e.target.value.length < 8){
            setPasswordError("Password must be at least 8 characters");
        }
        else {
            setPasswordError("");
        }
    }

    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        if (e.target.value.length < 1){
            setConfirmPasswordError("");
        }
        else if (e.target.value !== password){
            console.log(password);
            setConfirmPasswordError("Passwords do not match");
        }
        else if (e.target.value === password){
            setConfirmPasswordError("");
        }
    }

    return (
        <div className="inputAndData">
            <form className="inputForm">
                <div className="inputDiv">
                    <label htmlFor="firstName">First Name: </label>
                    <input type="text" name="firstName" id="firstName" onChange={ handleFirstName } value={ firstName }/>
                </div>
                    {
                        firstNameError ?
                        <p> {firstNameError} </p> :
                        ''
                    }
                <div className="inputDiv">
                    <label htmlFor="lastName">Last Name: </label>
                    <input type="text" name="lastName" id="lastName" onChange={ handleLastName } value={ lastName }/>
                </div>
                    {
                        lastNameError 
                        ? <p> {lastNameError} </p> 
                        : ''
                    }
                <div className="inputDiv">
                    <label htmlFor="email">Email Address: </label>
                    <input type="text" name="email" id="email" onChange={ handleEmail } value={ email }/>
                </div>
                    {
                        emailError ?
                        <p> {emailError} </p> :
                        ''
                    }
                <div className="inputDiv">
                    <label htmlFor="password">Password: </label>
                    <input type="password" name="password" id="password" onChange={ handlePassword } value={ password }/>
                </div>
                    {
                        passwordError ?
                        <p> {passwordError} </p> :
                        ''
                    }
                <div className="inputDiv">
                    <label htmlFor="confirmPassword">Confirm Password: </label>
                    <input type="password" name="confirmPassword" id="confirmPassword" onChange={ handleConfirmPassword } value={ confirmPassword }/>
                </div>
                    {
                        confirmPasswordError ?
                        <p> {confirmPasswordError} </p> :
                        ''
                    }
            </form>
            <FormData firstName={firstName} lastName={lastName} email={email} password={password} confirmPassword={confirmPassword}/>
        </div>
    );
}

export default FormInput;