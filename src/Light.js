import React from 'react';
import styled from 'styled-components';

const LightStyles = styled.div`
    height: 200px;
    width: 200px;
    border: 1px solid black;
    border-radius: 50%;
    background: #ffffff;
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    &.on{
        background: #FFF68F;
    }
`;

const Light = (props) => {
    return (
        <div>
            <h2>Light</h2>
            <LightStyles className={props.on? 'on': ''}>
                {props.on? "On" : "Off"}
            </LightStyles>
        </div>
    );
}

export default Light;
