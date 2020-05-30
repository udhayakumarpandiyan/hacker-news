import React, { Component } from 'react';
import { connect } from 'react-redux';
import { API } from '../../../config';

import { getStoriesList } from '../../../store/actions/StoriesListAction';

import '../styles/index.scss';
import Story from '../components/Story';


class StoriesList extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {

        if (!this.props.isSearch) {
            for (let i = 0; i < 20; i++) {
                this.props.getStoriesList(i + 1);
            }
        }

    }

    // constructRequestData = () => {
    //     let request = {
    //         requests: []
    //     };

    //     for (let i = 0; i < 20; i++) {
    //         request.requests.push(
    //             {
    //                 id: i + 1,
    //                 method: "GET",
    //                 url: `${API.newsItems.getStoriesList}${i + 1}`
    //             }
    //         );
    //     }


    //     return request;
    // }


    render() {
        let stories = this.props.isSearch ? this.props.searchResults : this.props.storiesList;
        console.log("Serach :", stories);
        return (
            <div className="module_container">
                {stories && stories.length > 0 &&
                    stories.map((story, index) => {
                        return (
                            <Story story={story} searchText={this.props.searchText}/>
                        )
                    })
                }

            </div >
        )
    }
}

const mapStateToProps = (state) => {
    return {
        storiesList: state.storiesListReducer && state.storiesListReducer.storiesList,
    }
}
export default connect(mapStateToProps, { getStoriesList })(StoriesList);
