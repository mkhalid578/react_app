const title = <h1> My first React Element </h1>

const desc = <p> I just learned how to create a React node and render it into the DOM </p>

const header = React.createElement(
	'header',
	null, 
	title,
	desc
);

/* this is a comment */

const Header = () => {
	return (
		<header>
			<h1> Scoreboard </h1>
			<span className="stats"> Players: 1 </span>
		</header>
	);
}

ReactDOM.render(
	header,
	document.getElementById('root')
);