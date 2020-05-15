import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Table } from 'antd';

class Dashboard extends Component {

    state = {
        name: '',
        color: '',
        breed: '',
        owner_id: 0,
    }

    componentDidMount(){
        this.props.dispatch({type: 'GET_OWNER_SAGA'});
        this.props.dispatch({type: 'GET_HISTORY_SAGA'});
    }

    handleChange = (input) => (event) => {
        this.setState({
            [input]: event.target.value,
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let newPet = {
            name: this.state.name,
            color: this.state.color,
            breed: this.state.breed,
            owner_id: this.state.owner_id
        }
        this.props.dispatch({type: 'POST_PET', payload: newPet})
        this.resetInputs();
    }

    resetInputs = () => {
        this.setState({
            name: '',
            color: '',
            breed: '',
            owner_id: 0,
        })
    }

    handleDelete = (id) => () => {
        this.props.dispatch({type: 'DELETE_PET', payload: id});
    }

    handleCheckIn = (id) => () => {
        this.props.dispatch({type: 'CHECK_IN_SAGA', payload: id})
    }

    handleCheckOut = (id) => () => {
        this.props.dispatch({type: 'CHECK_OUT_SAGA', payload: id})
    }

    render() {
        return (
            <>
                <div className="form">
                    <div className="form-center">
                    <h3>Add Pet</h3>
                        <form>
                            <input onChange={this.handleChange('name')} placeholder="Pet Name" />
                            <input onChange={this.handleChange('color')} placeholder="Color" />
                            <input onChange={this.handleChange('breed')} placeholder="Breed" />
                            <select id="owner" onChange={this.handleChange('owner_id')}>
                                <option default>Choose one</option>
                                {this.props.store.ownerReducer.map((owner) => 
                                <option value={owner.id}>{owner.name}</option>)}
                            </select>
                            <button onClick={this.handleSubmit}>Submit</button>
                        </form>
                    </div>
                </div>
                <h3>History</h3>
                <Table columns={[
                        {
                            title: 'Name',
                            dataIndex: 'name',
                            key: 'name',
                        }, {
                            title: 'Breed',
                            dataIndex: 'breed',
                            key: 'breed',
                        }, {
                            title: 'Color',
                            dataIndex: 'color',
                            key: 'color',
                        }, {
                            title: 'Checked in',
                            dataIndex: 'checked_in',
                            key: 'checked_in',
                            render: date => <>{date === null ? <>No</> : <>{date.split('T')[0]}</>}</>
                        }, {
                            title: '',
                            dataIndex: 'checked_in',
                            key: 'id',
                        render: (date, owner, pet) => <>{date === null ? <><button onClick={this.handleDelete(owner.id)}>DELETE</button> | <button onClick={this.handleCheckIn(owner.id)}>Check in</button></> : <><button onClick={this.handleDelete(owner.id)}>DELETE</button> | <button onClick={this.handleCheckOut(owner.id)}>Check out</button></>}</>
                        }
                    ]} dataSource={this.props.store.historyReducer} />
            </>
        )
    }
}

export default connect(mapStoreToProps)(Dashboard);
