import React, { useEffect, useState } from 'react';
import $ from 'jquery';

function Map(props) {

    let [svgPath, setSvgPath] = useState([]);

    useEffect(() => {
        if (props.svgPaths && props.svgPaths.length > 0) {
            setSvgPath(props.svgPaths);
        }
    }, []);

    const mapEnterHandler = (e) => {
        let title = e.target.getAttribute('title');
        props.hoveredState(title);
        $('.activePath').removeClass('activePath');
        e.target.classList.add('activePath');
        $('.searchBar').val('');
        $("link[rel*='icon']").attr("href", "favicon.ico");
    }

    return (
        <div>
            <svg
            version="1.1"
            id="svg2"
            height="695.70178"
            width="611.85999"
            style={{fill: "aliceblue", stroke: "deepskyblue", transform: "scale(0.75)"}}
            className="indianMap"
            >
            <defs
                id="defs42" />
            {
                svgPath.length ?
                svgPath.map(path => {
                    return (
                        <path 
                            id={path.id}
                            d={path.d}
                            title={path.title}
                            onClick={mapEnterHandler}
                            key={path.id}
                            />
                    )
                })
                :
                ''
            }
            </svg> 
        </div>
    );
}

export default Map;