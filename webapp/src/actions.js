import {getConfig} from 'mattermost-redux/selectors/entities/general';

import PluginId from './plugin_id';
import {STATUS_CHANGE, OPEN_EDITOR_MODAL, CLOSE_EDITOR_MODAL, EDITOR_OPEN, EDITOR_CLOSE} from './action_types';
import {StorageTypes} from './constants';

export const openRootModal = () => (dispatch) => {
    dispatch({
        type: OPEN_EDITOR_MODAL,
    });
    dispatch({
        type: EDITOR_OPEN,
    });
};

export const closeRootModal = () => (dispatch) => {
    dispatch({
        type: CLOSE_EDITOR_MODAL,
    });
    dispatch({
        type: EDITOR_CLOSE,
    });
};

export const channelHeaderButtonAction = openRootModal;

// TODO: Move this into mattermost-redux or mattermost-webapp.
export const getPluginServerRoute = (state) => {
    const config = getConfig(state);

    let basePath = '/';
    if (config && config.SiteURL) {
        basePath = new URL(config.SiteURL).pathname;

        if (basePath && basePath[basePath.length - 1] === '/') {
            basePath = basePath.substr(0, basePath.length - 1);
        }
    }

    return basePath + '/plugins/' + PluginId;
};

export const getStatus = () => async (dispatch, getState) => {
    fetch(getPluginServerRoute(getState()) + '/status').then((r) => r.json()).then((r) => {
        dispatch({
            type: STATUS_CHANGE,
            data: r.enabled,
        });
    });
};

export function setGlobalItem(name, value) {
    return async (dispatch, getState) => {
        dispatch({
            type: StorageTypes.SET_GLOBAL_ITEM,
            data: {name, value, timestamp: new Date()},
        }, getState);
        return {data: true};
    };
}
