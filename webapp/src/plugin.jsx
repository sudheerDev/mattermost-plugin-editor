import React from 'react';

import PluginId from './plugin_id';

import Root from './components/root';

import {
    channelHeaderButtonAction,
    getStatus,
} from './actions';
import reducer from './reducer';

export default class DemoPlugin {
    initialize(registry, store) {
        registry.registerCreatePostComponent(Root);

        registry.registerCreatePostButtonAction(
            () => store.dispatch(channelHeaderButtonAction()),
            'Editor',
        );

        registry.registerReducer(reducer);

        // Immediately fetch the current plugin status.
        store.dispatch(getStatus());
    }

    uninitialize() {
        //eslint-disable-next-line no-console
        console.log(PluginId + '::uninitialize()');
    }
}
