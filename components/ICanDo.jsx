import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { styled } from '@mui/material/styles'
import akashrahman from '../images/demo/akash_rahman.jpg'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'

const SectionTitle = styled(Typography)(({ theme }) => ({
	fontFamily: "'Poppins', sans-serif",
	textAlign: 'center',
	marginTop: theme.spacing(8),
	color: theme.palette.secondary.main,
	fontWeight: 700,
}))
const Image = styled('img')(({ theme }) => ({
	width: 300,
	height: 300,
	border: `${theme.spacing(2)} solid ${theme.palette.secondary.main}`,
	borderRadius: theme.spacing(4),
	backgroundColor: '#dddfe2',
	margin: theme.spacing(1),
}))

export default function ICanDo() {
	return (
		<Box>
			<Container maxWidth="xl">
				<SectionTitle variant="h2" component="h2">
					What Can I Do?
				</SectionTitle>
				<Box
					sx={{
						height: '85vh',
						minHeihgt: 500,
						maxHeight: 700,
					}}
				>
					<Grid container spacing={2}>
						{[...Array(30)].map((work, index) => (
							<Grid item xs={4} key={index}>
								<Paper elevation={1} sx={{ p: 1 }}>
									<Typography variant="h4">PSD To HTML</Typography>
									<Typography paragraph>
										PSD to HTML is a common design-to-code process, converting a Photoshop
										Document into an HTML file. This method allows web designers and
										developers to work together to make a great looking and highly
										functional website. If you use the PSD to HTML method, making a
										website mockup is the first step.
									</Typography>
								</Paper>
							</Grid>
						))}
					</Grid>
				</Box>
			</Container>
		</Box>
	)
}
