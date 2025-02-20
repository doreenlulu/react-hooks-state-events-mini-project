import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { useState } from "react";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
	const [tasks, setTasks] = useState(TASKS);
	function deleteTasks() {
		let newTaskslist = tasks.filter((task) => task.text !== task);
		setTasks(newTaskslist);
	}
	return (
		<div className="App">
			<h2>My tasks</h2>
			<CategoryFilter />
			<NewTaskForm />
			<TaskList tasks={tasks} deleteTasks={deleteTasks} />
		</div>
	);
}

export default App;
