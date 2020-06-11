import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getStoriesList } from '../../../store/actions/StoriesListAction';

import '../styles/index.scss';
import Story from '../components/Story';

class Stories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            page: 1,
            pageSize: 10,
            loading: false,
            prevY: 0
        };
    }

    componentDidMount() {
        if(!this.props.storiesList || this.props.storiesList.length === 0){
            this.getStories(this.state.page);
        }
        // handling infinite scroll
        var options = {
            root: null,
            rootMargin: "0px",
            threshold: 1.0
        };
        this.observer = new IntersectionObserver(
            this.handleObserver.bind(this),
            options
        );
        this.observer.observe(this.loadingRef);
        ///
    }

    // method which enables infinite page scroll
    handleObserver(entities, observer) {
        const y = entities[0].boundingClientRect.y;
        if (this.state.prevY > y) {
            const lastStory = this.props.storiesList[this.props.storiesList.length - 1];
            const curPage = lastStory.id;
            this.getStories(curPage);
            this.setState({ page: curPage });
        }
        this.setState({ prevY: y });
    }

    getStories(page) {
        this.setState({ loading: true });
        let pageSize = page + this.state.pageSize;

        for (let i = page; i < pageSize; i++) {
            this.props.getStoriesList(i);
        }
        this.setState({ page: pageSize });
    }


    render() {
        const loadingCSS = {
            height: "100px",
            margin: "30px"
        };
        const loadingTextCSS = { display: this.state.loading ? "block" : "none" };
        let stories = this.props.isSearch ? this.props.searchResults : this.props.storiesList;

        return (
            <div className="container">
                <div className="module_container">
                    {stories && stories.length > 0 &&
                        stories.map((story, index) => {
                            return (
                                <Story key={story.author+index} story={story} searchText={this.props.searchText} />
                            )
                        })
                    }

                </div >
                <div
                    ref={loadingRef => (this.loadingRef = loadingRef)}
                    style={loadingCSS}
                >
                    <span style={loadingTextCSS}>Loading...</span>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        storiesList: state.storiesListReducer && state.storiesListReducer.storiesList,
    }
}
export default connect(mapStateToProps, { getStoriesList })(Stories);
