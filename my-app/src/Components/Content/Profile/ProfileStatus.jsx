import React from "react";

export default class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status,
    };

    activateEditMode = () => {
        this.setState({
            editMode: true,
        });

    };

    deactivateEditMode = () => {
        this.setState({
            editMode: false,
        });
        this.props.updateStatus(this.state.status);
    };

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value,
        })
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            });
        }
    }

    render() {
        if (!this.state.editMode) {
            return (
                <p onClick={this.activateEditMode}>{this.props.status || "-------"}</p>
            )
        } else {
            return (
                <div>
                    <input autoFocus={true} onBlur={(e) => {
                        this.deactivateEditMode(e)
                    }} type="text" value={this.state.status}
                    onChange={this.onStatusChange}/>
                </div>
            )
        }
    };
}
