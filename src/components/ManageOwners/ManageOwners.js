import React, {Component} from 'react';

class ManageOwners extends Component {

    state = {
        owner: '',
    }

    handleChange = (input) => (event) => {
        this.setState({
            [input]: event.target.value,
        })
    }

    handleSubmit = (event) => {
        event.preventTargetDefault();
    }

    render(){
        return(
            <>
            <h3>Add Owner</h3>
            <form>
                <input onChange={this.handleChange('owner')} />
                <button>Submit</button>
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
            </table>
            </>
        )
    }
}

export default ManageOwners;
