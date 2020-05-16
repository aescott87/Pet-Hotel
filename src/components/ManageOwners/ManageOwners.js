import React, { Component } from "react";
import { connect } from 'react-redux';
import { Table } from 'antd';
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
        this.props.dispatch({ type: "POST_OWNER", payload: this.state })
    };

    handleDelete = (owner) => {
        this.props.dispatch({ type: 'DELETE_OWNER', payload: owner })
    }

    render() {
        if (this.props.reduxStore.ownerReducer) {
            console.log(this.props.reduxStore.ownerReducer)
            return (
                <>
                    <div className="form">
                        <div className="add-owner">
                            <h3>Add Owner</h3>
                            <form>
                                <input onChange={this.handleChange("name")} />
                                <button onClick={this.handleSubmit}>Submit</button>
                            </form>
                        </div>
                    </div>
                    <h3 className="table-heading">Owners</h3>
                    <div className="pet-owners">
                    <Table columns={[
                        {
                            title: 'Name',
                            dataIndex: 'name',
                            key: 'name',
                        }, {
                            title: 'Number of Pets',
                            dataIndex: 'count',
                            key: 'count',
                        }, {
                            title: '',
                            dataIndex: '',
                            key: 'id',
                            render: () => <>{<button>DELETE</button>}</>
                        }
                    ]} dataSource={this.props.reduxStore.ownerReducer} />
                    </div>
                </>
            );
        }
        else {
            return (
                <h1>Wait</h1>
            )
        }

    }
}
const putReduxStateOnProps = reduxStore => ({
    reduxStore
});

export default connect(putReduxStateOnProps)(ManageOwners);
