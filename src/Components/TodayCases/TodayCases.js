import React from 'react';

function TodayCases(props) {

    let [title, value, backgroundColorClass] = [props.title, props.value, props.backgroundColorClass]

    return (
        
        <div className={`mr-auto ${backgroundColorClass}`}>
            <h6><small>{title ? title : '...'}</small></h6>
            <h6><i className={`fa ${props.icon}`}></i></h6>
            <h6>{value ? value : '...'}</h6>
        </div>
    );
}

export default TodayCases;