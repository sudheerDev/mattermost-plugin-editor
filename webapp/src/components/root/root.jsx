import React from 'react';
import PropTypes from 'prop-types';
import Editor from '../Editor';

class Root extends React.PureComponent {
    preventProp = (e) => {
        e.stopPropagation();
        e.preventDefault();
    }

    submitPost = (e) => {
        this.props.close();
        setTimeout(() => {
            this.props.submitPost(e);
        }, 0);
    }

    render() {
        if (!this.props.visible) {
            return null;
        }

        const style = getStyle(this.props.theme);

        return (
            <div
                style={style.backdrop}
                onClick={this.props.close}
            >
                <div style={style.modal} onClick={this.preventProp}>
                    <div className="editor-header">
                        <button type="button" className="close" onClick={this.props.close}>
                            <span aria-hidden="true">×</span>
                            <span className="sr-only">Close</span>
                        </button>
                        <h4 className="modal-title"><span>Advanced Editor</span></h4>
                    </div>
                    <Editor theme={this.props.theme} style={style.editor}/>
                    <button type="button" className="btn btn-primary save-button pull-right" onClick={this.submitPost}><span>Post</span></button>
                </div>
            </div>
        );
    }
};

Root.propTypes = {
    visible: PropTypes.bool.isRequired,
    close: PropTypes.func.isRequired,
    theme: PropTypes.object.isRequired,
};

const getStyle = (theme) => ({
    backdrop: {
        position: 'absolute',
        display: 'flex',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.50)',
        zIndex: 2000,
        alignItems: 'center',
        justifyContent: 'center',
    },
    modal: {
        height: '65%',
        width: '900px',
        color: theme.centerChannelColor,
        backgroundColor: theme.centerChannelBg,
    },
    editor: {
        height: 'calc(100% - 110px)',
    }
});

export default Root;
