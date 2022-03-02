import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import IconButton from '@mui/material/IconButton'
import PlayCircleIcon from '@mui/icons-material/PlayCircle'

const StyledIconButton = styled(IconButton)(({ theme }) => ({
	position: 'relative',
	'&::after': {
		content: "''",
		display: 'block',
		clear: 'both',
		position: 'absolute',
		zIndex: -1,
		width: 40,
		height: 40,
		borderRadius: '50%',
		backgroundColor: 'green',
		transform: 'scale(0.6) translate(-1%, -1%)',
		animation: 'growup 2s ease infinite',
	},
	'&:hover::after': {
		display: 'none',
	},
}))

export default function VideoIntro() {
	return (
		<Box sx={{ pl: 2 }}>
			<StyledIconButton>
				<PlayCircleIcon color="primary" sx={{ fontSize: 30 }} />
			</StyledIconButton>
		</Box>
	)
}
