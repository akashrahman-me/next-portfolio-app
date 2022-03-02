import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import { styled, useTheme } from '@mui/material/styles'
import SvgButton from '../components/SvgButton'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import VideoIntro from '../components/VideoIntro'
import ImageIntro from '../components/ImageIntro'

const StyledButton = styled(Button)(({ theme }) => ({
	fontSize: 18,
	paddingLeft: theme.spacing(4),
	paddingRight: theme.spacing(4),
	textTransform: 'capitalize',
	fontWeight: 300,
}))

export default function HeroSection() {
	const theme = useTheme()

	return (
		<Grid container sx={{ height: 'calc(100% - 80px)' }}>
			<Grid item xs={6} md={6} sx={{ alignSelf: 'center' }}>
				<Box>
					<Typography
						variant="h1"
						component="h1"
						fontWeight="900"
						lineHeight="1"
						fontSize={80}
						letterSpacing={1.5}
					>
						<Typography
							variant="span"
							color="transparent"
							sx={{
								background: `-webkit-linear-gradient(45deg, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`,
								WebkitBackgroundClip: 'text',
							}}
						>
							Akash
						</Typography>
						<br />
						<Typography variant="span" color="#d4b1ff">
							Rahman
						</Typography>
					</Typography>
					<Typography
						paragraph
						marginTop={1}
						color="#e9d7ff"
						fontSize={18}
						sx={{
							display: '-webkit-box',
							WebkitLineClamp: 3,
							WebkitBoxOrient: 'vertical',
							overflow: 'hidden',
						}}
					>
						I'm ReactJS Developer. At its most basic form, a portfolio website provides
						professional information about an individual or a company and presents. I'm ReactJS
						Developer. At its most basic form, a portfolio website provides professional
						information about an individual or a company and presents.
					</Typography>
				</Box>
				<Stack sx={{ marginTop: 3 }} spacing={2} direction="row">
					<SvgButton>Hire Me</SvgButton>
					<StyledButton variant="contained" color="secondary" sx={{ borderRadius: 0 }}>
						About Me
					</StyledButton>
					<VideoIntro />
				</Stack>
			</Grid>
			<Grid item xs={6} md={6} sx={{ textAlign: 'center' }}>
				<ImageIntro />
			</Grid>
		</Grid>
	)
}
