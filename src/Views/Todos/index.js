import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DogCard from '../../components/DogCard';
import { connect } from 'react-redux';
import { ActionCreators } from "../../redux/actions/types";
import { bindActionCreators } from 'redux';
import { Services } from '../../services';
import './styles.css';

const { findBreedImages, findDogs, getDescription } = Services;
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
            const data = await findDogs();
            const { dogs, error } = data;
            if (error) {
                this.setState({ error })
                await this.props.getDogsInfo([], true)
            }
            Object.keys(dogs).map(async dog => {
                const dogImages = await findBreedImages(dog, 3)
                const { images, error } = dogImages
                if (error) {
                    this.setState({ error })
                }
                this.setState(
                    {
                        dogs: [...this.state.dogs,
                        {
                            breed: dog,
                            images,
                            description: getDescription(dog)
                        }]
                    })
                await this.props.getDogsInfo(this.state.dogs, false)
            })
        } else {
            const { dogsInfo } = this.props.dogs;
            this.setState({ dogs: dogsInfo })
        }
    }

    render() {
        return (
            <div className="container infinite-scroll">
                <div className="row">
                    {this.state.dogs.map((dog, index) =>
                        <Link key={index} to={`/detail/${index}`}>
                            <DogCard name={dog.breed} image={dog.images[0]} />
                        </Link>)}
                </div>
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