import React, { useEffect, useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';

function Detail(props) {

    let [stateWiseApiData, setstateWiseApiData] = useState({});
    let [hoveredState, setHoveredState] = useState();
    let [filteredData, setFilteredData] = useState({});
    let [allStates, setAllStates] = useState({});

    useEffect(() => {
        setHoveredState(props.hoveredState);
    }, [props.hoveredState]);

    useEffect(() => {
        setstateWiseApiData(props.stateWiseApiData);
        if (hoveredState !== '' && Object.keys(stateWiseApiData).length !== 0) {
            
            if (stateWiseApiData[hoveredState]) {
                setFilteredData(stateWiseApiData[hoveredState].districtData);
            } else {
                setHoveredState('');
                alert('No such state found!');
            }
        }
    });

    useEffect(() => {
        setAllStates(props.allStates);
    }, [props.allStates])

    const searchedState = (searchedStateVal) => {
        setHoveredState(searchedStateVal);
    }

    return (
        <div className="row">
            <div className="col-md-12 mt-5">
                <SearchBar searchedState={searchedState} allStates={allStates} />
            </div>
            <div className="col-md-12 mt-5">
                <h4 className="text-center">{hoveredState}</h4>
                {
                    Object.keys(filteredData).length ?
                    <table className="table mt-3 small stateDataTable table-responsive">
                        <thead>
                            <tr>
                                <th>City</th>
                                <th>Confirmed</th>
                                <th>Active</th>
                                <th>Recovered</th>
                                <th>Deceased</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Object.keys(filteredData).map((city, i) => {
                                    return (
                                        <tr key={i}>
                                            <td>{city}</td>
                                            <td>{filteredData[city]['confirmed']}</td>
                                            <td>{filteredData[city]['active']}</td>
                                            <td>{filteredData[city]['recovered']}</td>
                                            <td>{filteredData[city]['deceased']}</td>
                                        </tr>
                                    )
                                })
                            }                            
                        </tbody>
                    </table>
                    :
                    ''
                }
                
            </div>
        </div>
    );
}

export default Detail;