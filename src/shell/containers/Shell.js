import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import MainContent from '../components/Content';
import Footer from '../components/Footer';
import RoutePath from '../../route';
import history from '../../route/history';
import { getSearchResults } from '../../store/actions/StoriesListAction';

import '../styles/index.scss';
import 'antd/dist/antd.css';

let unlisten;
class Shell extends Component {
    constructor(props) {
        super(props);
        this.state = { currentPage: history.location.pathname }
    }

    componentWillReceiveProps(nextProps) {

        if (this.props.searchResults !== nextProps.searchResults) {
            this.setState({ isSearch: true, searchResults: nextProps.searchResults.hits })
        }

    }

    onSearchText = (text, tag = "story") => {
        if (text.length > 0) {
            this.props.getSearchResults(text, tag);
            this.setState({searchText: text})
        }
        else {
            this.setState({ isSearch: false, searchText: '',searchResults : null });
        }

    }
    render() {
        return (<div className="shell">
            <Header cartItems={this.props.cartItems} onSearchText={this.onSearchText}
                showCart={this.state.currentPage.match(RoutePath.SHOPPING_LIST)} />
            <div className="main_content">
                <MainContent searchResults={this.state.searchResults}
                    isSearch={this.state.isSearch} searchText={this.state.searchText} />
            </div>
            <Footer />
        </div >)
    }
}
const mapStateToProps = (state) => {
    return {
        searchResults: state.storiesListReducer && state.storiesListReducer.searchResults
    }
}
export default connect(mapStateToProps, { getSearchResults })(Shell);