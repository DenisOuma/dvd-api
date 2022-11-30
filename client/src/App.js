import { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
	useEffect(() => {
		fetch("/movies")
			.then((r) => r.json())
			.then((movies) => console.log("Welcome man", movies));
	}, []);
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
