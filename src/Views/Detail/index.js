import React, { Component } from 'react';
import DogCarousel from '../../components/DogCarousel';
import DogDescription from '../../components/DogDescription';
import LinkButton from '../../components/LinkButton';
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
                {this.state.dog &&
                    <div className="row">
                        <DogCarousel images={this.state.dog.images} />
                        <DogDescription
                            description={this.state.dog.description}
                            name={this.state.dog.breed} >
                            <LinkButton link={'/todos'} content={'Ver Más Perros'} />
                        </DogDescription>
                    </div>
                }
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