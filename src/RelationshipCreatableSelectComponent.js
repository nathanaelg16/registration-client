import React from "react";
import CreatableSelect from "react-select/creatable/dist/react-select.esm";

class RelationshipCreatableSelectComponent extends React.Component {
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

    handleChange = (val) => {
        console.log(val.value);
        const event = {
            target: {
                name: this.props.name,
                value: val.value,
            },
        };

        this.props.onChange(event);
    };

    render() {
        return (
            <CreatableSelect name={this.props.name}
                             isClearable
                             onChange={this.handleChange}
                             options={this.relations}
            />
        );
    }
}

export default RelationshipCreatableSelectComponent;