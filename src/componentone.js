const ComponentOne = React.createClass({
	propTypes: {
		title: React.PropTypes.string.isRequired
	},

	render: function () {
		const { title } = this.props;

		return (
			<div>
				<div>{title}</div>
				<div>Here's the body of the box</div>
			</div>
		);
	}
});

export default ComponentOne;
