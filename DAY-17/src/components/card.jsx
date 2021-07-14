var card=(props)=>{
	return (
	

	<div className="card">

	<h1 className="title">{{props.title}}</h1>
	</br>
	<h2 className="calorie">you have consumed-{props.calorie} calories today</h2>

	</div>

	
	);
}
export default card;
