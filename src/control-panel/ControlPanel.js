import React, { Component } from 'react';
import './ControlPanel.css';

class ControlPanel extends Component {

    activeWord = null;

    isSelected = () => !!window.getSelection().toString();

    setStyle = (property) => {
        if(this.activeWord && this.isSelected()) {
            this.activeWord.classList.contains(property) ?
                this.activeWord.classList.remove(property)
                :
                this.activeWord.classList.add(property);
        }
    };

    componentDidMount() {
        document.addEventListener('dblclick', event => {
            this.activeWord = event.target.id ? event.target : null;
        });
    }

    render() {
        return (
            <div id="control-panel">
                <div id="format-actions">
                    <button
                        onClick={() => this.setStyle('fontWeight')}
                        className="format-action"
                        type="button"
                    >
                        <b>B</b>
                    </button>
                    <button
                        onClick={() => this.setStyle('fontStyle')}
                        className="format-action"
                        type="button"
                    >
                        <i>I</i>
                    </button>
                    <button
                        onClick={() => this.setStyle('textDecoration')}
                        className="format-action"
                        type="button"
                    >
                        <u>U</u>
                    </button>
                </div>
            </div>
        );
    }
}

export default ControlPanel;
