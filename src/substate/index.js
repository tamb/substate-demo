import Substate from 'substate';

const state = {
    count: 0,
    isMultiple: false,
    integer: 7,
}

const appState = new Substate({
    state,
});

export const AddToCounter = ()=>{
    const c = (appState.getProp('count') + 1);
    appState.emit('UPDATE_STATE', {count: c, isMultiple: (c%7 === 0? true: false)});
}

export default appState;

