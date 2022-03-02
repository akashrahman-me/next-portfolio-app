import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import markZuckerberg from '../images/demo/mark_zuckerberg.jpg'
import manImage from '../images/demo/man.png'

const PersonBox = styled(Box)(({ theme }) => ({
	display: 'inline-block',
	marginLeft: 'auto',
	marginRight: 'auto',
	position: 'relative',
	height: '100%',
	aspectRatio: '3.5/5',
	'& img': {
		position: 'absolute',
		top: 0,
		left: 0,
		height: '100%',
	},
}))
const Person = styled('img')(({ theme }) => ({
	position: 'absolute',
	top: 0,
	left: 0,
	height: '100%',
	aspectRatio: '3.2/5',
	borderRadius: theme.shape.borderRadius * 5,
}))

export default function ImageIntro() {
	return (
		<>
			<PersonBox>
				<img src={manImage.src} alt="MAN" width="100%" height="100%" />
			</PersonBox>
			{/*
			<PersonBox>
			<Person
				src={markZuckerberg.src}
				alt="Mark Zuckerberg"
				sx={{
					clipPath: 'polygon(0% 0%, 43.5% 0%, 43.5% 45%, 0% 45%)',
					transform: 'translate(-3px, -3px)',
				}}
			/>
			<Person
				src={markZuckerberg.src}
				alt="Mark Zuckerberg"
				sx={{
					clipPath: 'polygon(43.5% 0%, 85% 0%, 85% 55%, 43.5% 55%)',
					transform: 'translate(3px, -3px)',
				}}
			/>
			<Person
				src={markZuckerberg.src}
				alt="Mark Zuckerberg"
				sx={{
					clipPath: 'polygon(85% 0%, 100% 0%, 100% 51%, 85% 51%)',
					transform: 'translate(9px, -3px)',
				}}
			/>
			<Person
				src={markZuckerberg.src}
				alt="Mark Zuckerberg"
				sx={{
					clipPath: 'polygon(85% 51%, 100% 51%, 100% 100%, 85% 100%)',
					transform: 'translate(9px, 3px)',
				}}
			/>
			<Person
				src={markZuckerberg.src}
				alt="Mark Zuckerberg"
				sx={{
					clipPath: 'polygon(43.5% 55%, 85% 55%, 85% 100%, 43.5% 100%)',
					transform: 'translate(3px, 3px)',
				}}
			/>
			<Person
				src={markZuckerberg.src}
				alt="Mark Zuckerberg"
				sx={{
					clipPath: 'polygon(0% 45%, 43.5% 45%, 43.5% 100%, 0% 100%)',
					transform: 'translate(-3px, 3px)',
				}}
			/>
		</PersonBox> */}
		</>
	)
}
