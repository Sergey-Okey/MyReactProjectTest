import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header'
import { textHero } from './data'
import TextToHero from './components/TextToHero'
import Button from './components/button/Button'

export default function App() {

	return (
		<div>
			<Header />
			<main>
				<h1>Hello React</h1>
				<section className='hero'>
					<ul>
						<TextToHero {...textHero[0]} />
						<TextToHero {...textHero[1]} />
						<TextToHero {...textHero[2]} />
						<TextToHero {...textHero[3]} />
					</ul>
				</section>
				<section className='product'>
					<Button>Help</Button>
					<Button>Resurces</Button>
					<Button>About</Button>
				</section>
			</main>
		</div>
	)
}

