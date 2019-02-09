import React, { Component, Suspense, lazy } from 'react';
import { Link } from 'react-router-dom';
import DefaultImage from '../../components/DefaultImage';
import DogLoader from '../../components/DogLoader';
import { connect } from 'react-redux';
import { ActionCreators } from "../../redux/actions/types";
import { bindActionCreators } from 'redux';
import { Services } from '../../services';
import InfiniteScroll from 'react-infinite-scroll-component';


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
            this.props.stopScroll()
        }
        setTimeout(() => {
            this.getDogsImages(dogsInfoStrech)
        }, 1200);
    }

    getDogs = async () => {
        const firstStrech = 20;
        if (this.props.dogs.next) {
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
            <div className="container flex-wrap">
                {!this.state.error ? <InfiniteScroll
                    dataLength={this.state.dogs.length}
                    next={this.fetchData}
                    hasMore={this.state.next}
                    loader={<DogLoader />}
                >
                    <div className="row">
                        {this.state.dogs.map((dog, index) =>
                            <Suspense fallback={<DefaultImage />}>
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