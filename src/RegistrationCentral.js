import React from 'react';
import logo from './logo.png';
import './RegistrationCentral.css';
import {Form, Col, Button} from 'react-bootstrap';
import CreatableSelect from 'react-select/creatable';

class CreatableSelectComponent extends React.Component {
    relations = [
        {value: "mother", label: "Father"},
        {value: "father", label: "Mother"},
        {value: "stepmother", label: "Stepmother"},
        {value: "stepfather", label: "Stepfather"},
        {value: "grandmother", label: "Grandmother"},
        {value: "grandfather", label: "Grandfather"},
        {value: "aunt", label: "Aunt"},
        {value: "uncle", label: "Uncle"},
        {value: "sister", label: "Sister"},
        {value: "brother", label: "Brother"},
        {value: "foster mother", label: "Foster mother"},
        {value: "foster father", label: "Foster father"},
        {value: "host mother", label: "Host mother"},
        {value: "host father", label: "Host father"},
        {value: "parent", label: "Guardian"},
        {value: "nanny", label: "Nanny"},
    ];

    handleChange = (newValue, actionMeta) => {
        console.group('Value Changed');
        console.log(newValue);
        console.log(`action: ${actionMeta.action}`);
        console.groupEnd();
    };

    handleInputChange = (inputValue, actionMeta) => {
        console.group('Input Changed');
        console.log(inputValue);
        console.log(`action: ${actionMeta.action}`);
        console.groupEnd();
    };

    render() {
        return (
            <CreatableSelect
                isClearable
                onChange={this.handleChange}
                onInputChange={this.handleInputChange}
                options={this.relations}
            />
        );
    }
}

class StateSelectionBox extends React.Component {

    handleChange = (val) => {
        this.props.onChange(val);
    };

    render() {
        const states = [
            'Choose...', 'AK', 'AL', 'AR', 'AS', 'AZ', 'CA', 'CO', 'CT', 'DC', 'DE', 'FL', 'GA', 'GU', 'HI', 'IA', 'ID', 'IL',
            'IN', 'KS', 'KY', 'LA', 'MA', 'MD', 'ME', 'MI', 'MN', 'MO', 'MP', 'MS', 'MT', 'NC', 'ND', 'NE', 'NH', 'NJ', 'NM',
            'NV', 'NY', 'OH', 'OK', 'OR', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UM', 'UT', 'VA', 'VI', 'VT', 'WA', 'WI',
            'WV', 'WY'];
        const stateOptions = [];
        states.forEach((state) => stateOptions.push(<option key={state}>{state}</option>));
        return (
            <Form.Control as="select" value={this.props.value} onChange={this.handleChange}>
                {stateOptions}
            </Form.Control>
        );
    }
}

class ParentForm extends React.Component {
    handleChange = (event) => {
        const target = event.target;
        this.props.onChange(this.props.index, target.name, target.value);
    };

    handleSDASelection = () => {
      //todo implement
    };

    render() {
        const citizen = this.props.form.americanCitizen == null ? 'Choose...' : this.props.form.americanCitizen ? "Yes" : "No";

        return (
            <Form>
                <h2 id={this.props.index}>Parent/Guardian Information</h2>
                <Form.Label>Relationship to child</Form.Label>
                <CreatableSelectComponent/>
                <Form.Group controlId="parentName">
                    <Form.Row>
                        <Form.Group as={Col} controlId="parentFirstName">
                            <Form.Label>First name</Form.Label>
                            <Form.Control name="firstName" onChange={this.handleChange} value={this.props.form.firstName} placeholder="First name"/>
                        </Form.Group>
                        <Form.Group as={Col} controlId="parentMiddleName">
                            <Form.Label>Middle name</Form.Label>
                            <Form.Control name="middleName" onChange={this.handleChange} value={this.props.form.middleName} placeholder="Middle name"/>
                        </Form.Group>
                        <Form.Group as={Col} controlId="parentLastName">
                            <Form.Label>Last name</Form.Label>
                            <Form.Control name="lastName" onChange={this.handleChange} value={this.props.form.lastName} placeholder="Last name"/>
                        </Form.Group>
                    </Form.Row>
                </Form.Group>
                <Form.Group controlId="parentInfo">
                    <Form.Row>
                        <Form.Group as={Col} controlId="parentAddress1">
                            <Form.Label>Address</Form.Label>
                            <Form.Control name="homeAddressLine1" onChange={this.handleChange} value={this.props.form.homeAddress.addressLine1} placeholder="Address line 1"/>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} controlId="parentAddress2">
                            <Form.Label>Address 2</Form.Label>
                            <Form.Control name="homeAddressLine2" onChange={this.handleChange} value={this.props.form.homeAddress.addressLine2} placeholder="Address line 2"/>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} controlId="parentAddressCity">
                            <Form.Label>City</Form.Label>
                            <Form.Control name="homeAddressCity" onChange={this.handleChange} value={this.props.form.homeAddress.city} placeholder="City"/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="parentAddressState">
                            <Form.Label>State</Form.Label>
                            <StateSelectionBox name="homeAddressState" onChange={this.handleChange} value={this.props.form.homeAddress.state}/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="parentAddressZip">
                            <Form.Label>Zip</Form.Label>
                            <Form.Control name="homeAddressZip" onChange={this.handleChange} value={this.props.form.homeAddress.zipCode} placeholder="5-digit zip code"/>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} controlId="parentEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control name="email" onChange={this.handleChange} value={this.props.form.email} type="email" placeholder="E-mail address"/>
                        </Form.Group>
                        <Form.Group as={Col} controlId="parentHomeTelephone">
                            <Form.Label>Home Telephone Number</Form.Label>
                            <Form.Control name="homePhone" onChange={this.handleChange} value={this.props.form.homeTelephoneNumber} placeholder="(123) 456-7890"/>
                        </Form.Group>
                        <Form.Group as={Col} controlId="parentMobileTelephone">
                            <Form.Label>Mobile Telephone Number</Form.Label>
                            <Form.Control name="cellPhone" onChange={this.handleChange} value={this.props.form.mobileTelephoneNumber} placeholder="(123) 456-7890"/>
                        </Form.Group>
                        <Form.Group as={Col} controlId="parentWorkTelephone">
                            <Form.Label>Work Telephone Number</Form.Label>
                            <Form.Control name="workPhone" onChange={this.handleChange} value={this.props.form.workTelephoneNumber} placeholder="(123) 456-7890"/>
                        </Form.Group>
                    </Form.Row>
                </Form.Group>
                <Form.Group controlId="parentWorkInfo">
                    <Form.Row>
                        <Form.Group as={Col} controlId="parentEmployerName">
                            <Form.Label>Employer name</Form.Label>
                            <Form.Control onChange={this.handleChange} value={this.props.form.employerName} placeholder="Employer name"/>
                        </Form.Group>
                        <Form.Group as={Col} controlId="parentOccupation">
                            <Form.Label>Occupation</Form.Label>
                            <Form.Control onChange={this.handleChange} value={this.props.form.occupation} placeholder="Occupation"/>
                        </Form.Group>
                    </Form.Row>
                </Form.Group>
                <Form.Group controlId="parentMiscInfo">
                    <Form.Row>
                        <Form.Group as={Col} controlId="parentSocialSecurity">
                            <Form.Label>Social Security Number</Form.Label>
                            <Form.Control onChange={this.handleChange} value={this.props.form.ssn} placeholder="000-00-0000"/>
                        </Form.Group>
                        <Form.Group as={Col} controlId="parentMaritalStatus">
                            <Form.Label>Marital Status</Form.Label>
                            <Form.Control onChange={this.handleChange} value={this.props.form.maritalStatus} as="select">
                                <option>Choose...</option>
                                <option>Single</option>
                                <option>Separated</option>
                                <option>Married</option>
                                <option>Remarried</option>
                                <option>Divorced</option>
                                <option>Widower</option>
                            </Form.Control>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} controlId="parentEducationLevel">
                            <Form.Label>Education level</Form.Label>
                            <Form.Control as="select" onChange={this.handleChange} value={this.props.form.educationLevel.level}>
                                <option>Choose...</option>
                                <option>Attended high school</option>
                                <option>Attended college</option>
                                <option>Attended graduate school</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group as={Col} controlId="parentEducationLevelYears">
                            <Form.Label>Years attended</Form.Label>
                            <Form.Control onChange={this.handleChange} value={this.props.form.educationLevel.numYearsAttended} placeholder="2 years"/>
                        </Form.Group>
                    </Form.Row>
                </Form.Group>
                <h2>Church Affiliation</h2>
                <Form.Group controlId="parentChurchAffiliation">
                    <Form.Row>
                        <Form.Group as={Col} controlId="parentChurchName">
                            <Form.Label>Church name</Form.Label>
                            <Form.Control onChange={this.handleChange} value={this.props.form.churchAffiliation.name} placeholder="Church name"/>
                        </Form.Group>
                        <Form.Group as={Col} controlId="parentChurchDenomination">
                            <Form.Label>Church name</Form.Label>
                            <Form.Control onChange={this.handleChange} value={this.props.form.churchAffiliation.denomination} placeholder="Denomination"/>
                        </Form.Group>
                    </Form.Row>
                    <Form.Group controlId="parentChurchAddress">
                        <Form.Row>
                            <Form.Group as={Col} controlId="parentChurchAddress1">
                                <Form.Label>Address</Form.Label>
                                <Form.Control onChange={this.handleChange} value={this.props.form.churchAffiliation.address.addressLine1} placeholder="Address line 1"/>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="parentChurchAddress2">
                                <Form.Label>Address 2</Form.Label>
                                <Form.Control onChange={this.handleChange} value={this.props.form.churchAffiliation.address.addressLine2} placeholder="Address line 2"/>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="parentChurchAddressCity">
                                <Form.Label>City</Form.Label>
                                <Form.Control onChange={this.handleChange} value={this.props.form.churchAffiliation.address.city} placeholder="City"/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="parentChurchAddressState">
                                <Form.Label>State</Form.Label>
                                <StateSelectionBox onChange={this.handleChange} value={this.props.form.churchAffiliation.address.state}/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="parentChurchAddressZip">
                                <Form.Label>Zip</Form.Label>
                                <Form.Control onChange={this.handleChange} value={this.props.form.churchAffiliation.address.zipCode} placeholder="5-digit zip code"/>
                            </Form.Group>
                        </Form.Row>
                    </Form.Group>
                    <Form.Group controlId="parentChurchInfo">
                        <Form.Row>
                            <Form.Group as={Col} controlId="parentChurchPhoneNumber">
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control onChange={this.handleChange} value={this.props.form.churchAffiliation.telephoneNumber} placeholder="(123) 456-7890"/>
                            </Form.Group>
                            <Form.Group as={Col} controlId="parentChurchPastor">
                                <Form.Label>Pastor</Form.Label>
                                <Form.Control onChange={this.handleChange} value={this.props.form.churchAffiliation.pastor} placeholder="Name of pastor"/>
                            </Form.Group>
                        </Form.Row>
                    </Form.Group>
                    <Form.Row>
                        <Form.Group as={Col} controlId="parentSDAInfo">
                            <Form.Label>Are you Seventh-day Adventist?</Form.Label>
                            <Form.Control as="select" onChange={this.handleSDASelection} value="Choose...">
                                <option>Choose...</option>
                                <option>Yes</option>
                                <option>No</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group as={Col} controlId="parentSDAConference">
                            <Form.Label>If yes, which conference?</Form.Label>
                            <Form.Control onChange={this.handleChange} value={this.props.form.churchAffiliation.conference} placeholder="Conference"/>
                        </Form.Group>
                    </Form.Row>
                </Form.Group>
                <Form.Group controlId="parentMoreMiscInfo">
                    <Form.Row>
                        <Form.Group as={Col} controlId="parentUSCitizen">
                            <Form.Label>Are you an American citizen?</Form.Label>
                            <Form.Control as="select" onChange={this.handleChange} value={citizen}>
                                <option>Choose...</option>
                                <option>Yes</option>
                                <option>No</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group as={Col} controlId="parentUSCitizen">
                            <Form.Label>Country of Origin</Form.Label>
                            <Form.Control onChange={this.handleChange} value={this.props.form.citizenship} placeholder="Country"/>
                        </Form.Group>
                    </Form.Row>
                </Form.Group>
                <Form.Row>
                    <Form.Group as={Col} controlId="parentChristianSchoolMotives">
                        <Form.Label>Why do you want your child(ren) in an Adventist school?</Form.Label>
                        <Form.Control as="textarea" onChange={this.handleChange} value={this.props.form.motives} placeholder="Reason..."/>
                    </Form.Group>
                </Form.Row>
            </Form>
        );
    }
}

class ParentFormViewer extends React.Component {
    constructor() {
        super();
        this.state = {
            forms: [
                {
                    firstName: '',
                    lastName: '',
                    middleName: '',
                    dateOfBirth: '',
                    educationLevel: {
                        level: 'Choose...',
                        numYearsAttended: 0
                    },
                    email: '',
                    homeAddress: {
                        addressLine1: '',
                        addressLine2: '',
                        city: '',
                        state: 'NY',
                        zipCode: null,

                    },
                    employerName: '',
                    occupation: '',
                    homeTelephoneNumber: '',
                    mobileTelephoneNumber: '',
                    workTelephoneNumber: '',
                    ssn: '',
                    maritalStatus: 'Choose...',
                    churchAffiliation: {
                        name: '',
                        address: {
                            addressLine1: '',
                            addressLine2: '',
                            city: '',
                            state: 'NY',
                            zipCode: 10025
                        },
                        telephoneNumber: '',
                        pastor: '',
                        sabbathSchoolTeacher: '',
                        denomination: '',
                        conference: ''
                    },
                    americanCitizen: null,
                    citizenship: '',
                    relationship: '',
                    motives: ''
                },
            ],
        }
    }

    addParent = () => {
        const arr = this.state.forms.concat({
            firstName: '',
            lastName: '',
            middleName: '',
            dateOfBirth: '',
            educationLevel: {
                level: 'Choose...',
                numYearsAttended: 0
            },
            email: '',
            homeAddress: {
                addressLine1: '',
                addressLine2: '',
                city: '',
                state: 'NY',
                zipCode: null,

            },
            employerName: '',
            occupation: '',
            homeTelephoneNumber: '',
            mobileTelephoneNumber: '',
            workTelephoneNumber: '',
            ssn: '',
            maritalStatus: 'Choose...',
            churchAffiliation: {
                name: '',
                address: {
                    addressLine1: '',
                    addressLine2: '',
                    city: '',
                    state: 'NY',
                    zipCode: 10025
                },
                telephoneNumber: '',
                pastor: '',
                sabbathSchoolTeacher: '',
                denomination: '',
                conference: ''
            },
            americanCitizen: null,
            citizenship: '',
            relationship: '',
            motives: ''
        });

        this.setState({
            forms: arr,
        });
    };

    removeParent = () => {
        const arr = this.state.forms;
        arr.pop();
        this.setState({
            forms: arr,
        });
    };

    handleChange = (index, field, value) => {
        let arr = JSON.parse(JSON.stringify(this.state)).forms;
        switch (field) {
            case 'firstName':
                arr[index].firstName = value;
                break;
            case 'middleName':
                arr[index].middleName = value;
                break;
            case 'lastName':
                arr[index].lastName = value;
                break;
            case 'dateOfBirth':
                arr[index].dateOfBirth = value;
                break;
            case 'educationLevel':
                arr[index].educationLevel = value;
                break;
            default:
                break;
        }

        this.setState({
            forms: arr,
        });
    };

    submit = (e) => {
        e.preventDefault();

        const json = JSON.stringify(this.state.forms);
        console.log(json);
        fetch('http://192.168.1.183:8080/', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: json,
        }).then(response => console.log(response));
    };

    render() {
        const stateForms = this.state.forms;
        const displayForms = [];
        for (let i = 0; i < stateForms.length; i++) {
            displayForms[i] = <ParentForm form={stateForms[i]} onChange={this.handleChange} index={i} key={i}/>
        }

        return (
            <div>
                {displayForms}
                <Button variant="outline-secondary" onClick={this.addParent}>Add another parent</Button>
                <Button variant="outline-danger" onClick={this.removeParent}>Delete parent</Button>
                <br/>
                <br/>
                <br/>
                <Button variant="primary" onClick={this.submit}>Next</Button>
            </div>
        )
    }
}



class RegistrationCentral extends React.Component {
    render() {
        return (
            <div className="RegistrationCentral">
                <header className="RegistrationCentral-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1>Student Application</h1>
                </header>
                <body>
                <ParentFormViewer/>
                </body>
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
