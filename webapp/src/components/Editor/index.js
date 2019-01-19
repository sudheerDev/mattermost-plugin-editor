import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getCurrentChannel} from 'mattermost-redux/selectors/entities/channels';

import {setGlobalItem} from 'actions';
import {getPostDraft} from 'selectors';
import {StoragePrefixes} from '../../constants';

import Editor from './Editor';

const mapStateToProps = (state) => {
    const currentChannel = getCurrentChannel(state) || {};
    const draft = getPostDraft(state, StoragePrefixes.DRAFT, currentChannel.id);

    return {
        draft,
        channelId: currentChannel.id,
    };
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
    setDraft: setGlobalItem,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Editor);
