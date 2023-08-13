class MyApp extends React.Component {
	render() {
		return (
			<div>
				<Student
					name="Amit"
					age={25}
					subjects={["phy", "chem", "maths"]}
					marks={[50, 60, 70]}
				/>
			</div>
		);
	}
}

let myDiv = document.querySelector("#root");
let root = ReactDOM.createRoot(myDiv);
root.render(<MyApp />);
