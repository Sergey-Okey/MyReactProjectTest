import './Button.css'

export default function Button({ children }) {
	function handleClick() {
		console.log('Нажали кнопку')
	}
	return (
		<button className='button' onClick={handleClick}>{children}</button>
	)
}