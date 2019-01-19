import {combineReducers} from 'redux';

import {STATUS_CHANGE, OPEN_EDITOR_MODAL, CLOSE_EDITOR_MODAL} from './action_types';

const enabled = (state = false, action) => {
    switch (action.type) {
    case STATUS_CHANGE:
        return action.data;

    default:
        return state;
    }
};

const rootModalVisible = (state = false, action) => {
    switch (action.type) {
    case OPEN_EDITOR_MODAL:
        return true;
    case CLOSE_EDITOR_MODAL:
        return false;
    default:
        return state;
    }
};

export default combineReducers({
    enabled,
    rootModalVisible,
});

