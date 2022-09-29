import React from "react";
import { useState } from "react";
import { CATEGORIES } from "../data";

function CategoryFilter() {
	const [categories, setTasks] = useState(CATEGORIES);
	function updateTaskscategories() {
		let newlist = categories.filter((category) => ({ category } === category));
		setTasks(newlist);
	}
	return (
		<div className="categories">
			<h5>Category filters</h5>
			{/* render <button> elements for each category here */}
			{CATEGORIES.map((category) => (
				// console.log(category)
				<button key={category} onClick={() => updateTaskscategories(category)}>
					{category}
				</button>
			))}
		</div>
	);
}

export default CategoryFilter;
