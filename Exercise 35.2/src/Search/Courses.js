
import { Link, Outlet } from 'react-router-dom'

const Courses = () => {
return (
	<div className="Page">
	<h1>You are in the Courses page!</h1>
	<h3>The Courses Represents the Course Catalogue:</h3>
	<div className="courses-nav">
		<Link to="/courses/search">Courses</Link>
		<Link to="/courses/list">Levels</Link>
	</div>
	<Outlet />
	</div>
)
}

export default Courses
