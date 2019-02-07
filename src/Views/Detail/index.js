import React, { Component } from 'react';
import NavBar from '../../components/NavBar';
import DogCard from '../../components/DogCard';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ActionCreators } from "../../redux/actions/types";
import { bindActionCreators } from 'redux';

class Detail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            dog: null,
            dogs: this.props.dogs.dogsInfo
        }
    }

    getDog(id) {
        let dog = this.state.dogs.find((dog, index) => index == id);
        return dog;
    }

    componentDidMount() {
        let dog = this.getDog(this.state.id)
        this.setState({ dog })
    }

    render() {
        return (
            <div className="container">
                <NavBar home={'Home'} todos={'todos'} />
                <p>{'Detalle'}</p>
                {this.state.dog &&
                    <DogCard name={this.state.dog.breed} image={this.state.dog.images[0]} />}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        dogs: state.dogsState
    };
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail)