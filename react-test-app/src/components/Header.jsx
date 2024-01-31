import logo from '/src/assets/react.svg';

export default function Header() {

	const now = new Date()

	return (
		<header>
			<img src={logo} alt={'Result'} />
			<span>Время сейчас: {now.toLocaleTimeString()}</span>
		</header>
	)
}
