import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar';
import DogCard from '../../components/DogCard';
import { connect } from 'react-redux';
import { ActionCreators } from "../../redux/actions/types";
import { bindActionCreators } from 'redux';
import { Services } from '../../services';

class Todos extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dogs: [],
            error: ''
        }
    }

    async componentDidMount() {
          await this.getDogs();
    }

   getDogs = async () => {
        if (this.props.dogs.dogsInfo.length < 1) {
            const data = await Services.findDogs();
            const { dogs, error } = data;
            if (error) {
                this.setState({ error })
                await this.props.getDogsInfo([], true)
            }
            Object.keys(dogs).map(async dog => {
                const dogImages = await Services.findBreedImages(dog, 3)
                const { images, error } = dogImages
                if (error) {
                    this.setState({ error })
                }
                this.setState({ dogs: [...this.state.dogs, { breed: dog, images }] })
                await this.props.getDogsInfo(this.state.dogs, false)
            })
        } else {
            const { dogsInfo } = this.props.dogs;
            this.setState({ dogs: dogsInfo })
        }
    }

    render() {
        return (
            <div className="container">
                <NavBar home={'Home'} todos={'todos'} />
                <p>{'Todos'}</p>
                {this.state.dogs.map((dog, index) =>
                    <Link to={`/detail/${index}`}>
                        <DogCard name={dog.breed} image={dog.images[0]} />
                    </Link>)}
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

export default connect(mapStateToProps, mapDispatchToProps)(Todos)