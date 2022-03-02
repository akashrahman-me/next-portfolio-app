import logo from '../images/logo.svg'
import Link from 'next/link'

export default function Logo() {
	return (
		<Link href="/">
			<a tabIndex={1}>
				<img src={logo.src} alt="LOGO" height="35" width="auto" />
			</a>
		</Link>
	)
}
