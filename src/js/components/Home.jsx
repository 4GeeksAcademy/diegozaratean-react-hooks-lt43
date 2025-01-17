import React, { useState } from "react";

const Home = () => {
	let contador = 10


	// useState() me retorna una arrar [variable, funcion]
	//[nombre de la variable, funcion que va a modioficar la variable]
	const [count , setCount] = useState(10)

	const [clicks, setClicks] = useState(0)


	function agregar(){
		console.log('agregar')
		setCount( count + 1)
		setClicks(clicks + 1)
	}

	function quitar(){
		console.log("quitar")
		setCount(count - 1)
		setClicks(clicks + 1)
	}

	return (
		<div className="text-center">
			<h1 className="text-center mt-5">Bienvenidos a React HOOKS ;)</h1>
			<button onClick={()=>quitar()} >Quitar</button>
			<h2>
				{contador}
			</h2>
			<h2>
				{count}
			</h2>
			<button onClick={agregar}>agregar</button>
			<p>utilizaste la app {clicks} veces</p>
		</div>
	);
};

export default Home;