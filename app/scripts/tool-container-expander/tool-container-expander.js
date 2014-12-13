/** @jsx React.DOM */

var React = require('react');
var CSSTransitionGroup = React.addons.CSSTransitionGroup;

var fetchedData = {
    title: "The Love Below",
    releaseDate: "2003",
    summaryInfo: "The Love Below is a famous record by Andre 3000. It features the smash hit Hey Ya that everyone sings."
};

var ToolContainer = React.createClass({

    getInitialState: function() {
        return {album: fetchedData, active: false}
    },

    handleClick: function() {

        if (!this.state.active) {
            this.setState({active: true});
        } else {
            this.setState({active: false});
        }

    },

    render: function() {
        var details = <div></div>;
        if (this.state.active) {
            details = <Album
                key={1}
                title={this.state.album.title}
                releaseDate={this.state.album.releaseDate}
                summaryInfo={this.state.album.summaryInfo}
            />
        } else { details = <div></div> }
        return (
            <div className="container tool" onClick={this.handleClick}>
                <h1>Hey there</h1>
                <CSSTransitionGroup transitionName="album">
                {details}
                </CSSTransitionGroup>
            </div>
        );
    }
});

var Album = React.createClass({

    render: function() {
        return (
            <div className="album-details">
                <div>{this.props.title}</div>
                <div>{this.props.releaseDate}</div>
                <div>{this.props.summaryInfo}</div>
            </div>
        )
    }
});


module.exports = ToolContainer;