import React from 'react';
import logo from './logo.png';
import './RegistrationCentral.css';
import ParentFormViewer from "./ParentFormViewer";

class RegistrationCentral extends React.Component {
    render() {
        return (
            <div className="RegistrationCentral">
                <header className="RegistrationCentral-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1>Student Application</h1>
                </header>
                <ParentFormViewer/>
            </div>
        );
    }
}

export default RegistrationCentral;

/*<Form>
    <Form.Group controlId="studentInfo">
        <h2>Student Information</h2>
        <Form.Label>Student name</Form.Label>
        <Form.Control type="plaintext" placeholder="First name"/>
        <Form.Control type="plaintext" placeholder="Middle name"/>
        <Form.Control type="plaintext" placeholder="Last name"/>
        <Form.Label>Current grade</Form.Label>
        <Form.Control type="plaintext" placeholder="Grade level"/>
        <Form.Label>Applying for grade</Form.Label>
        <Form.Control type="plaintext" placeholder="Grade level"/>
        <Form.Label>Starting date</Form.Label>
        <Form.Control type="plaintext" placeholder="Grade level"/>
    </Form.Group>
</Form>*/
