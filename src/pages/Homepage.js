import { useState } from "react"
import Features from "../components/Features"
import Hero from "../components/Hero"
import Login from "../components/Login"

const Homepage = () => {

	return (
		<div>
			<Login />
			<Hero />
			<Features />
		</div>
	)
}

export default Homepage