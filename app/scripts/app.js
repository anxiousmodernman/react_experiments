/** @jsx React.DOM */

var React = require('react'),
    Clock = require('./clock/clock');
    Slider = require('./slider/slider');
    Conway = require('./conway/conway');
    ToolContainer = require('./tool-container-expander/tool-container-expander');



var Projects = React.createClass({


    render: function () {

        return (
            <div>
                <ProjectContainer component={<Clock />}/>
                <ProjectContainer component={<Slider min="0" max="9"/>} />
                <ProjectContainer component={<Conway size="60" />} />
                <ProjectContainer component={<ToolContainer />} />
            </div>
            )
    }

});


var ProjectContainer = React.createClass({

    render: function() {
        return (
            <div className="container">
            {this.props.component}
            </div>
            )
    }
})

React.render(<Projects />, document.getElementById('projects'));
