import React, { Component } from 'react';
import './FileZone.css';

class FileZone extends Component {

    state = {
        textareaValue: '',
    };

    getHtml = () => (
        this.state.textareaValue ? this.state.textareaValue.split(' ').map((item, key) => (
                <span
                    key={key}
                    id={key}
                >
                    {item}&nbsp;
                </span>
            )
        ) : ""
    );

    textareaChange = e => {
        this.setState({ textareaValue: e.target.value })
    };

    render() {
        const { textareaValue } = this.state;
        return (
            <div id="file-zone">
                <div id="file">
                    <textarea spellCheck={false} value={textareaValue} onChange={this.textareaChange} className="textarea" />
                    <div className="text-view">
                        {this.getHtml()}
                    </div>
                </div>
            </div>
        );
    }
}

export default FileZone;
