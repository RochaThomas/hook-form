import React from "react";

const FormData = props => {
    return (
        <div className="dispData">
            <h3>Your Form Data</h3>
            <p>First Name: {props.firstName}</p>
            <p>Last Name: {props.lastName}</p>
            <p>Email Address: {props.email}</p>
            <p>Password: {props.password}</p>
            <p>Confirm Password: {props.confirmPassword}</p>
        </div>
    )
}

export default FormData;