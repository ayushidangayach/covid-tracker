import React from 'react';
import Select from 'react-select';
import $ from 'jquery';

function SearchBar(props) {

    const onChangeHandler = (e) => {
        let stateval = e.value
        $('.activePath').removeClass('activePath');
        if (stateval.trim() !== '') {
            props.searchedState(stateval);
            $(`.indianMap path[title="${stateval}"]`).addClass('activePath');
            console.log(`.indianMap path[title="${stateval}"]`);
            $("link[rel*='icon']").attr("href", "logo.png");
        } else {
            alert('Please enter a city.');
        }
    }

    return (
        <Select
            name="form-field-name"
            options={props.allStates}
            className="TextInput border-none"
            placeholder="Search by State"
            onChange={e => onChangeHandler(e)}
        />
    );
}

export default SearchBar;