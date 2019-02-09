import React, { Component, Suspense, lazy } from 'react';
import { Link } from 'react-router-dom';
// import DogCard from '../../components/DogCard';
import { connect } from 'react-redux';
import { ActionCreators } from "../../redux/actions/types";
import { bindActionCreators } from 'redux';
import { Services } from '../../services';
import './styles.css';
import InfiniteScroll from 'react-infinite-scroll-component';

//const DogCard = lazy(() => import('../../components/DogCard'));

const DogCard = React.lazy(() => {
    return new Promise(resolve => setTimeout(resolve, 2 * 1000)).then(
        () => import('../../components/DogCard')
    );
});

const { findBreedImages, findDogs, getDescription, defaultImage } = Services;
class Todos extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dogs: [],
            error: '',
            dogsInfo: [],
            next: true,
            finalPos: 0
        }
    }

    async componentDidMount() {
        await this.getDogs();
    }

    fetchData = async () => {
        const { dogsInfo, finalPos } = this.state;
        const interval = 10;
        const limit = finalPos + interval;
        let dogsInfoStrech = dogsInfo.filter((dog, index) => index > finalPos && index <= limit)
        this.setState({ finalPos: limit })
        if (!dogsInfo[limit]) {
            this.setState({ next: false })
        }
        setTimeout(() => {
            this.getDogsImages(dogsInfoStrech)
        }, 1200);
    }

    getDogs = async () => {
        const firstStrech = 20;
        if (this.props.dogs.dogsInfo.length < 1) {
            const data = await findDogs();
            const { dogs, error } = data;
            if (error) {
                this.setState({ error })
                await this.props.getDogsInfo([], true)
            }
            this.setState({ dogsInfo: dogs })
            let dogsInfoStrech = this.state.dogsInfo.filter((dog, index) => index <= firstStrech)
            this.setState({ finalPos: firstStrech })
            await this.getDogsImages(dogsInfoStrech)
        } else {
            const { dogsInfo } = this.props.dogs;
            this.setState({ dogs: dogsInfo })
        }
    }

    getDogsImages = async (dogsInfo) => {
        const imagesQuantity = 3;
        dogsInfo.map(async dog => {
            const dogImages = await findBreedImages(dog, imagesQuantity)
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
    }

    render() {
        return (
            <div className="container">
                {/* this.state.dogs.length > this.state.finalPos - 1 ?
            <p>{'Cargando...'}</p> : */}
                {!this.state.error ? <InfiniteScroll
                    dataLength={this.state.dogs.length}
                    next={this.fetchData}
                    hasMore={this.state.next}
                    loader={<h4>Loading...</h4>}
                >
                    <div className="row">
                        {this.state.dogs.map((dog, index) =>
                            <Suspense fallback={<img src="https://buscomascota.cl/assets/user_default-6da53fc756af1e32234642a496a22cb413205ba49df744cfff0b0505615dd132.png" class="img-fluid" alt="Responsive image" />}
                            >
                                <Link key={index} to={`/detail/${index}`}>
                                    <DogCard name={dog.breed} image={dog.images[0]} />
                                </Link>
                            </Suspense>)
                        }
                    </div>
                </InfiniteScroll> :
                    <p>{this.state.error}</p>}
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