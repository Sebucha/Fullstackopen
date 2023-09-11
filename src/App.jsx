import Content from "./components/Content";
import Header from "./components/Header";
import Total from "./components/Total";

function App() {
	const course = {
		name: "Half Stack application development",
		parts: [
			{ name: "Fundamentals of React", exercises: 10 },
			{ name: "using props to pass data", exercises: 7 },
			{ name: "State of a component", exercises: 14 },
		],
	};

	return (
		<div>
			<Header course={course.name} />
			<Content parts={course.parts} />
			<Total parts={course.parts} />
		</div>
	);
}
export default App;

// const course = "Half Stack application development";
// const part1 = "Fundamentals of React";
// const exercises1 = 10;
// const part2 = "using props to pass data";
// const exercises2 = 7;
// const part3 = "State of a component";
// const exercises3 = 14;

{
	/* <Content part={part1} exercises={exercises1} />
			<Content part={part2} exercises={exercises2} />
			<Content part={part3} exercises={exercises3} />

			<Total exercises={exercises1 + exercises2 + exercises3} /> */
}
