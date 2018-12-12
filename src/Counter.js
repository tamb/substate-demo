import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const propTypes = {
    count: PropTypes.number.isRequired,
    clickHandler: PropTypes.func.isRequired,
};

const CounterStyles = styled.div`
    display: flex;
    flex-direction: column;
    align-content: space-between;
    justify-items: center;
    align-items: center;
    padding: 15px;

    div{
        font-size: 24px;
    }
    button{
        display: block;
        background: #11f3e8;
        padding: 8px 15px;
        border: 2px solid black;
        border-radius: 3px;
    }
`;

const Counter = (props) => {
 
    return (
        <CounterStyles>
            <div>
                {props.count}
            </div>
            <button onClick={()=>props.clickHandler()} type="button">+1</button>
        </CounterStyles>
    );
    
}

Counter.defaultProps = {
    count: 0,
};

Counter.propTypes = propTypes;


export default Counter;
