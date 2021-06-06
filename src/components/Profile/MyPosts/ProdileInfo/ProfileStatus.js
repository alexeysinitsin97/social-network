import React from "react";
class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status,
  };
  activetedEdit = () => {
    this.setState({
      editMode: true,
    });
  };
  deactivetedEdit = () => {
    this.setState({
      editMode: false,
    });
  };
  changeStatus = (e) => {
    this.setState({
      status: e.currentTarget.value,
    });
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status != this.props.status) {
      this.setState({ status: this.props.status });
    }
  }
  render() {
    return (
      <div>
        {this.state.editMode ? (
          <input
            onChange={this.changeStatus}
            autoFocus={true}
            value={this.state.status}
            onBlur={() => {
              this.deactivetedEdit();
              this.props.updateProfileStatus(this.state.status);
            }}
          />
        ) : (
          <span onDoubleClick={this.activetedEdit}>
            {this.props.status || "empty status"}
          </span>
        )}
      </div>
    );
  }
}
export default ProfileStatus;
