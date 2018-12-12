import Substate from 'substate';

const state = {
    count: 0,
    isMultiple: false,
    integer: 7,
}

const appState = new Substate({
    state,
});

export default appState;