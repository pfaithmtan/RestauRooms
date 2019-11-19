import React from 'react';
import axios from 'axios';
import Search from './Search.jsx';
import { Main, Reviews, Header } from '../styling/style.jsx'

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            address: '',
            toiletReviews: []
        };
    }

    componentDidMount() {
        this.getRestaurantToiletReview();
    }

    getRestaurantToiletReview() {
        axios.get(`/api${window.location.pathname}`)
            .then((response) => {
                console.log(response.data);
                this.setState({
                    name: response.data[0].name,
                    address: response.data[0].address,
                    toiletReviews: response.data[0].toiletReviews
                })
            })
            .catch((error) => {
                console.log('Oh no! An error!');
                console.log(error);
            })
    }

    render() {
        const { name, address, toiletReviews } = this.state;

        return (
            <Main>
                <Header>
                    <div> <h1> {name} </h1> </div>
                    <div> <h3> {address} </h3> </div>
                </Header>
                <Search />
                <Reviews toiletReviews={toiletReviews}/>
            </Main>
        );
    }
}

export default App;
