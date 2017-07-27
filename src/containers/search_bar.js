import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {SearchForecastForCity} from '../actions';

class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            searchTerm: ''
        };

        this.onChangeUpdates = this.onChangeUpdates.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    onChangeUpdates(event) {
        this.setState({searchTerm: event.target.value})
    }

    submitForm(event) {
        event.preventDefault();
        this.props.searchForecast(this.state.searchTerm)
        this.setState({searchTerm: ''});
    }

    render() {
        return (
            <form className="input-group" onSubmit={this.submitForm}>
                <input
                    value={this.state.searchTerm}
                    placeholder="Search weather forecast for favourite cities"
                    className="form-control"
                    onChange={this.onChangeUpdates}/>
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-primary">
                        Get forecast
                    </button>
                </span>
            </form>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ searchForecast: SearchForecastForCity}, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar);