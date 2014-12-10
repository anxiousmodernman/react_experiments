/** @jsx React.DOM */

var React = require('react');
var CSSTransitionGroup = React.addons.CSSTransitionGroup;
var cx = React.addons.classSet;


var Slider = React.createClass({

    getInitialState: function() {

        var squares = this.createSquares(5);
        return {squares: squares}

    },


    createSquares: function(counter) {

        var squares = [];
        for (var i=0; i<=counter; i++) {

            var temp = (<Square key={i}/>);
            squares.push(temp);
        }

        console.log(squares);
        return squares
    },

    handleChange: function(e) {

        var squares = this.createSquares(e.target.value);
        this.setState({squares: squares});
    },


    render: function() {

        return (
            <div>
                <h1> Slider </h1>
                <input type="range"
                    min={this.props.min}
                    max={this.props.max}
                    onChange={this.handleChange} />
                    <div className="square-container">
                        <CSSTransitionGroup transitionName="square">
                            {this.state.squares}
                        </CSSTransitionGroup>
                    </div>
            </div>
            )
    }

});


var Square = React.createClass({

    getInitialState: function() {

        return {clicked: false};

    },

    handleClick: function(e) {

        this.setState({clicked: true});

    },

    componentwillunmount: function() {
        console.log('eat my cheese');

    },

    render: function() {
        var classes = cx({
            'square': true,
            'blue-click': this.state.clicked
        });

        return (<div className={classes}
                    onClick={this.handleClick}>
                </div>)
    }

});

module.exports = Slider;