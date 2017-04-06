var React = require('react');

module.exports = React.createClass({
    voteUp: function(e){
        var newCount = parseInt(this.props.voteCount, 10) + 1;
        this.props.onVote(this.props.questionKey, newCount);
    },
    voteDown: function(e){
        var newCount = parseInt(this.props.voteCount, 10) - 1;
        newCount = newCount < 0 ? 0 : newCount;
        this.props.onVote(this.props.questionKey, newCount);
    },
    render: function(){
        return (
           <div className='media' key={this.props.id}>
                <div className='media-left'>
                    <button className='btn btn-default' onClick={this.voteUp}>
                        <span className='glyphicon glyphicon-chevron-up'></span>
                        <span className='vote-count'>{this.props.voteCount}</span>
                    </button>
                    <button className='btn btn-default' onClick={this.voteDown}>
                        <span className='glyphicon glyphicon-chevron-down'></span>
                    </button>
                </div>
                <div className='media-body'>
                    <h4 className='media-heading'>{this.props.title}</h4>
                    <p>{this.props.desc}</p>
                </div>
            </div>
        )
    }
});