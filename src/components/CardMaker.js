import React from 'react';


const CardMaker = ({ robots }) => {
	return (
		<div>
		{
			robots.map( (user, i) => {
				return (
					<Card key = {i} id={robots[i].id} name={robots[i].name} email={robots[i].email}/>
				);
			})
		}
		</div>
	);
}
const Card = ({name,email,id}) => {
	return(
		<div className=' tc bg-light-green dib br3 ma2 spa3 grow bw-2 shadow-5'>
			<img alt="robots" src={`https://robohash.org/${id}?200x200`}/>
			<div>
				<h2> {name} </h2>
				<p> {email} </p>
			</div>
		</div>
	);
}
export default CardMaker;