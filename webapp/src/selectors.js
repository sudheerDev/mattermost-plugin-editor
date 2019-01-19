import PluginId from './plugin_id';

const getPluginState = (state) => state['plugins-' + PluginId] || {};

export const isEnabled = (state) => getPluginState(state).enabled;

export const isRootModalVisible = (state) => getPluginState(state).rootModalVisible;

export function getPostDraft(state, prefixId, suffixId) {
    const defaultDraft = {message: '', fileInfos: [], uploadsInProgress: []};
    const draft = makeGetGlobalItem(prefixId + suffixId, defaultDraft)(state);

    if (
        typeof draft.message !== 'undefined' &&
        typeof draft.uploadsInProgress !== 'undefined' &&
        typeof draft.fileInfos !== 'undefined'
    ) {
        return draft;
    }

    return defaultDraft;
}

export const makeGetGlobalItem = (name, defaultValue) => {
    return (state) => {
        return getGlobalItem(state, name, defaultValue);
    };
};

export const getGlobalItem = (state, name, defaultValue) => {
    const storage = state && state.storage && state.storage.storage;

    return getItemFromStorage(storage, name, defaultValue);
};

export const getItemFromStorage = (storage, name, defaultValue) => {
    if (storage &&
        typeof storage[name] !== 'undefined' &&
        storage[name] !== null &&
        typeof storage[name].value !== 'undefined' &&
        storage[name].value !== null) {
        return storage[name].value;
    }

    return defaultValue;
};
