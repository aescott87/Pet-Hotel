import React, {Component} from 'react';

class Dashboard extends Component {

    state = {
        name: '',
        color: '',
        breed: ''
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
            <h3>Add Pet</h3>
            <form>
                <input onChange={this.handleChange('name')} />
                <input onChange={this.handleChange('color')} />
                <input onChange={this.handleChange('breed')} />
                <select id="owner">
                    {/* {this.props.store.owners.map((owner) => 
                    <option value={owner.name}>{owner.name}</option>)} */}
                </select>
                <button>Submit</button>
            </form>
            <h3>History</h3>
            <table>
                <thead>
                    <tr>
                        <th>Owner</th>
                        <th>Pet</th>
                        <th>Breed</th>
                        <th>Color</th>
                        <th>Checked in</th>
                        <th>Actions</th>
                    </tr>
                </thead>
            </table>
            </>
        )
    }
}

export default Dashboard;