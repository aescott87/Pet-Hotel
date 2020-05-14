import React, { Component } from "react";
import {connect} from 'react-redux'
class ManageOwners extends Component {
  componentDidMount() {
    this.props.dispatch({ type: "GET_OWNER_SAGA" });
    console.log(this.props.reduxStore)
  }

  state = {
    name: "",
  };

  handleChange = (input) => (event) => {
    this.setState({
      [input]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.dispatch({type:"POST_OWNER",payload: this.state})
  };

  handleDelete = (owner) => {
    this.props.dispatch({type: 'DELETE_OWNER', payload: owner})
  }

  render() {
      if(this.props.reduxStore.ownerReducer){
          console.log(this.props.reduxStore.ownerReducer)
        return (
            <>
              <h3>Add Owner</h3>
              <form>
                <input onChange={this.handleChange("name")} />
                <button onClick={this.handleSubmit}>Submit</button>
              </form>
              <h3>Owners</h3>
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Number of Pets</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.reduxStore.ownerReducer.map((owner, i) => {
                    return (
                      <tr key={owner.id}>
                        <th>{owner.name}</th>
                        <th>{owner.count}</th>
                        <th><button onClick={() => this.handleDelete(owner)}>Delete</button></th>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </>
          );
          
      }
      else{
          return(
              <h1>Wait</h1>
          )
      }

  }
}
const putReduxStateOnProps = reduxStore => ({
    reduxStore
  });

export default connect(putReduxStateOnProps)(ManageOwners);
