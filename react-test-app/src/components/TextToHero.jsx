export default function TextToHero({ title, description }) {
	return (
		<li>
			<p>
				<strong>
					{title}
				</strong>
				{description}
			</p>
		</li>
	)
}
