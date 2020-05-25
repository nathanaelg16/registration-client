import React from "react";
import {Button, Col, Form} from "react-bootstrap";
import RelationshipSelectionComponent from "./RelationshipCreatableSelectComponent";

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
            <Form.Control name={this.props.name} as="select" value={this.props.value} onChange={this.handleChange}>
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

    handleSelectControlChange = (event) => {
        const target = event.target;
        const index = target.options.selectedIndex;
        this.props.onChange(this.props.index, target.name, target.options[index].getAttribute('data-key'));
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
                <RelationshipSelectionComponent name="relationship" onChange={this.handleChange} value={this.props.form.relationship}/>
                <Form.Group controlId="parentNameAndDOB">
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
                        <Form.Group as={Col} controlId="parentDOB">
                            <Form.Label>Date of Birth</Form.Label>
                            <Form.Control type="date" name="dateOfBirth" onChange={this.handleChange} value={this.props.form.dateOfBirth} placeholder="01/01/1970"/>
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
                            <Form.Control name="employerName" onChange={this.handleChange} value={this.props.form.employerName} placeholder="Employer name"/>
                        </Form.Group>
                        <Form.Group as={Col} controlId="parentOccupation">
                            <Form.Label>Occupation</Form.Label>
                            <Form.Control name="occupation" onChange={this.handleChange} value={this.props.form.occupation} placeholder="Occupation"/>
                        </Form.Group>
                    </Form.Row>
                </Form.Group>
                <Form.Group controlId="parentMiscInfo">
                    <Form.Row>
                        <Form.Group as={Col} controlId="parentSocialSecurity">
                            <Form.Label>Social Security Number</Form.Label>
                            <Form.Control name="ssn" onChange={this.handleChange} value={this.props.form.ssn} placeholder="000-00-0000"/>
                        </Form.Group>
                        <Form.Group as={Col} controlId="parentMaritalStatus">
                            <Form.Label>Marital Status</Form.Label>
                            <Form.Control name="maritalStatus" onChange={this.handleSelectControlChange} as="select">
                                <option data-key="DEFAULT">Choose...</option>
                                <option data-key="SINGLE">Single</option>
                                <option data-key="SEPARATED">Separated</option>
                                <option data-key="MARRIED">Married</option>
                                <option data-key="REMARRIED">Remarried</option>
                                <option data-key="DIVORCED">Divorced</option>
                                <option data-key="WIDOWER">Widower</option>
                            </Form.Control>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} controlId="parentEducationLevel">
                            <Form.Label>Education level</Form.Label>
                            <Form.Control name="educationLevel" as="select" onChange={this.handleSelectControlChange}>
                                <option data-key="DEFAULT">Choose...</option>
                                <option data-key="HIGH_SCHOOL">Attended high school</option>
                                <option data-key="COLLEGE">Attended college</option>
                                <option data-key="GRADUATE">Attended graduate school</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group as={Col} controlId="parentEducationLevelYears">
                            <Form.Label>Years attended</Form.Label>
                            <Form.Control name="educationYearsAttended" onChange={this.handleChange} value={this.props.form.educationLevel.numYearsAttended} placeholder="2 years"/>
                        </Form.Group>
                    </Form.Row>
                </Form.Group>
                <h2>Church Affiliation</h2>
                <Form.Group controlId="parentChurchAffiliation">
                    <Form.Row>
                        <Form.Group as={Col} controlId="parentChurchName">
                            <Form.Label>Church name</Form.Label>
                            <Form.Control name="churchName" onChange={this.handleChange} value={this.props.form.churchAffiliation.name} placeholder="Church name"/>
                        </Form.Group>
                        <Form.Group as={Col} controlId="parentChurchDenomination">
                            <Form.Label>Denomination</Form.Label>
                            <Form.Control name="denomination" onChange={this.handleChange} value={this.props.form.churchAffiliation.denomination} placeholder="Denomination"/>
                        </Form.Group>
                    </Form.Row>
                    <Form.Group controlId="parentChurchAddress">
                        <Form.Row>
                            <Form.Group as={Col} controlId="parentChurchAddress1">
                                <Form.Label>Address</Form.Label>
                                <Form.Control name="churchAddressLine1" onChange={this.handleChange} value={this.props.form.churchAffiliation.address.addressLine1} placeholder="Address line 1"/>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="parentChurchAddress2">
                                <Form.Label>Address 2</Form.Label>
                                <Form.Control name="churchAddressLine2" onChange={this.handleChange} value={this.props.form.churchAffiliation.address.addressLine2} placeholder="Address line 2"/>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="parentChurchAddressCity">
                                <Form.Label>City</Form.Label>
                                <Form.Control name="churchAddressCity" onChange={this.handleChange} value={this.props.form.churchAffiliation.address.city} placeholder="City"/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="parentChurchAddressState">
                                <Form.Label>State</Form.Label>
                                <StateSelectionBox name="churchAddressState" onChange={this.handleChange} value={this.props.form.churchAffiliation.address.state}/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="parentChurchAddressZip">
                                <Form.Label>Zip</Form.Label>
                                <Form.Control name="churchAddressZip" onChange={this.handleChange} value={this.props.form.churchAffiliation.address.zipCode} placeholder="5-digit zip code"/>
                            </Form.Group>
                        </Form.Row>
                    </Form.Group>
                    <Form.Group controlId="parentChurchInfo">
                        <Form.Row>
                            <Form.Group as={Col} controlId="parentChurchPhoneNumber">
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control name="churchPhone" onChange={this.handleChange} value={this.props.form.churchAffiliation.telephoneNumber} placeholder="(123) 456-7890"/>
                            </Form.Group>
                            <Form.Group as={Col} controlId="parentChurchPastor">
                                <Form.Label>Pastor</Form.Label>
                                <Form.Control name="churchPastor" onChange={this.handleChange} value={this.props.form.churchAffiliation.pastor} placeholder="Name of pastor"/>
                            </Form.Group>
                        </Form.Row>
                    </Form.Group>
                    <Form.Row>
                        <Form.Group as={Col} controlId="parentSDAInfo">
                            <Form.Label>Are you Seventh-day Adventist?</Form.Label>
                            <Form.Control name="sda" as="select" onChange={this.handleSDASelection} value="Choose...">
                                <option>Choose...</option>
                                <option>Yes</option>
                                <option>No</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group as={Col} controlId="parentSDAConference">
                            <Form.Label>If yes, which conference?</Form.Label>
                            <Form.Control name="sdaConference" onChange={this.handleChange} value={this.props.form.churchAffiliation.conference} placeholder="Conference"/>
                        </Form.Group>
                    </Form.Row>
                </Form.Group>
                <Form.Group controlId="parentMoreMiscInfo">
                    <Form.Row>
                        <Form.Group as={Col} controlId="parentUSCitizen">
                            <Form.Label>Are you an American citizen?</Form.Label>
                            <Form.Control name="usCitizen" as="select" onChange={this.handleChange} value={citizen}>
                                <option>Choose...</option>
                                <option>Yes</option>
                                <option>No</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group as={Col} controlId="parentUSCitizen">
                            <Form.Label>Country of Origin</Form.Label>
                            <Form.Control name="citizenship" onChange={this.handleChange} value={this.props.form.citizenship} placeholder="Country"/>
                        </Form.Group>
                    </Form.Row>
                </Form.Group>
                <Form.Row>
                    <Form.Group as={Col} controlId="parentChristianSchoolMotives">
                        <Form.Label>Why do you want your child(ren) in an Adventist school?</Form.Label>
                        <Form.Control name="motive" as="textarea" onChange={this.handleChange} value={this.props.form.motives} placeholder="Reason..."/>
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
                        zipCode: '',

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
                            zipCode: ''
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
                zipCode: '',

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
                    zipCode: ''
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
            case 'homeAddressLine1':
                arr[index].homeAddress.addressLine1 = value;
                break;
            case 'homeAddressLine2':
                arr[index].homeAddress.addressLine2 = value;
                break;
            case 'homeAddressCity':
                arr[index].homeAddress.city = value;
                break;
            case 'homeAddressState':
                arr[index].homeAddress.state = value;
                break;
            case 'homeAddressZip':
                arr[index].homeAddress.zipCode = value;
                break;
            case 'email':
                arr[index].email = value;
                break;
            case 'homePhone':
                arr[index].homeTelephoneNumber = value;
                break;
            case 'cellPhone':
                arr[index].mobileTelephoneNumber = value;
                break;
            case 'workPhone':
                arr[index].workTelephoneNumber = value;
                break;
            case 'employerName':
                arr[index].employerName = value;
                break;
            case 'occupation':
                arr[index].occupation = value;
                break;
            case 'ssn':
                arr[index].ssn = value;
                break;
            case 'maritalStatus':
                arr[index].maritalStatus = value;
                break;
            case 'educationLevel':
                arr[index].educationLevel.level = value;
                break;
            case 'educationYearsAttended':
                arr[index].educationLevel.numYearsAttended = value;
                break;
            case 'churchName':
                arr[index].churchAffiliation.name = value;
                break;
            case 'denomination':
                arr[index].churchAffiliation.denomination = value;
                break;
            case 'churchAddressLine1':
                arr[index].churchAffiliation.address.addressLine1 = value;
                break;
            case 'churchAddressLine2':
                arr[index].churchAffiliation.address.addressLine2 = value;
                break;
            case 'churchAddressCity':
                arr[index].churchAffiliation.address.city = value;
                break;
            case 'churchAddressState':
                arr[index].churchAffiliation.address.state = value;
                break;
            case 'churchAddressZip':
                arr[index].churchAffiliation.address.zipCode = value;
                break;
            case 'churchPhone':
                arr[index].churchAffiliation.telephoneNumber = value;
                break;
            case 'churchPastor':
                arr[index].churchAffiliation.pastor = value;
                break;
            case 'sda':
                //todo handle
                break;
            case 'sdaConference':
                arr[index].churchAffiliation.conference = value;
                break;
            case 'usCitizen':
                arr[index].americanCitizen = value === 'Yes';
                break;
            case 'citizenship':
                arr[index].citizenship = value;
                break;
            case 'motive':
                arr[index].motives = value;
                break;
            case 'relationship':
                arr[index].relationship = value;
                break;
            default:
                alert("shouldn't happen" + field);
                console.log(field);
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

export default ParentFormViewer;