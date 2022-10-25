import PropTypes from 'prop-types';

function Header({
	text,
	bg_color,
	text_color,
}) {
	const header_styles = {
		backgroundColor: bg_color,
		color: text_color,
	};

	return (
		<header style={header_styles}>
			<div className="container">
				<h1>{text}</h1>
			</div>
		</header>
	);
}

Header.defaultProps = {
	text: 'Feedback UI',
	bg_color: 'rgba(0,0,0,0.4)',
	text_color: '#ff6a95',
};

Header.propTypes = {
	text: PropTypes.string,
	bg_color: PropTypes.string,
	text_color: PropTypes.string,
};

export default Header;
