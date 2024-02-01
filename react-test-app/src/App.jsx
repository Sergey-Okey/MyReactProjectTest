import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header'
import { textHero, differences } from './data'
import TextToHero from './components/TextToHero'
import Button from './components/button/Button'

export default function App() {
	const [content, setContent] = useState('Нажми на кнопку');

	function handleClick(type) {
		setContent = (type)
	}
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
					<Button onClick={() => handleClick('ways')}>Help</Button>
					<Button onClick={() => handleClick('easy')}>Resurces</Button>
					<Button onClick={() => handleClick('program')}>About</Button>
				</section>
				<p>{differences[content]}</p>
			</main>
		</div>
	)
}

