import React, { Component } from 'react';
import SimpleMDE from 'react-simplemde-editor';
import "simplemde/dist/simplemde.min.css";
import './editor.css';
import {StoragePrefixes} from '../../constants';
import toolbarOptions from './toolbarOptions';

class RootEditor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editorState: props.draft.message,
            isPreviewActive: false,
        };
    }

    handleChange = (message) => {
        this.setState({ editorState: message });
        const draft = {
            ...this.props.draft,
            message,
        };
        this.props.setDraft(StoragePrefixes.DRAFT + this.props.channelId, draft);
    };

    getIntance = (instance) => {
        this.instance = instance;
    }

    togglePreview = () => {
        this.instance.togglePreview();
        this.setState({
            isPreviewActive: !this.state.isPreviewActive,
        });
    }

    showTextArea = () => {
        if (this.instance.isPreviewActive()) {
            this.togglePreview();
            this.instance.undo();
            this.instance.redo();
        }
    }

    render() {
        const { editorState } = this.state;
        return (
            <React.Fragment>
                <div className="viewOptions">
                    {this.state.isPreviewActive && (
                        <React.Fragment>
                            <button type="button" className="btn btn-link" onClick={this.showTextArea}>Write</button>
                            <span>Preview</span>
                        </React.Fragment>
                    )}
                    {!this.state.isPreviewActive && (
                        <React.Fragment>
                            <span>Write</span>
                            <button type="button" className="btn btn-link" onClick={this.togglePreview}>Preview</button>
                        </React.Fragment>
                    )}
                </div>
                <SimpleMDE
                    getMdeInstance={this.getIntance}
                    onChange={this.handleChange}
                    value={this.state.editorState}
                    options={{
                        placeholder: "Type here...",
                        toolbar: toolbarOptions,
                        autofocus: true,
                    }}
                    className="editor"
                />
            </React.Fragment>
        );
    }
}

export default RootEditor;
