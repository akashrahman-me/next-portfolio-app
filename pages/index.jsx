import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Navbar from '../components/Navbar'
import { styled } from '@mui/material/styles'
import Sprinkle from '../images/Sprinkle.svg'
import mon from '../images/mon.svg'
import HeroSection from '../components/HeroSection'
import ICanDo from '../components/ICanDo'

const Background = styled(Box)(({ theme }) => ({
	'&': {
		position: 'absolute',
		overflow: 'hidden',
		width: '100%',
		height: '100%',
		zIndex: -1,
		height: '100vh',
		maxHeight: 650,
	},
	'& img': {
		position: 'absolute',
		height: '100%',
	},
}))

export default function Home() {
	return (
		<Box>
			<Background>
				<img src={mon.src} alt="" />
				<img src={Sprinkle.src} alt="" />
			</Background>
			<Container maxWidth="lg" sx={{ height: '100vh', maxHeight: 650 }}>
				<Navbar />
				<HeroSection />
			</Container>
			<ICanDo />
		</Box>
	)
}
