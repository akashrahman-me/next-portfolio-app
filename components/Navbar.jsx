import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import { styled, useTheme } from '@mui/material/styles'
import Logo from '../components/Logo'
import Link from 'next/link'
import IconButton from '@mui/material/IconButton'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import Tooltip from '@mui/material/Tooltip'
import { useContext } from 'react'
import { ToggleMode } from '../context/ToggleMode'
import { capitalizeFirstLetter } from '../utilities/functions'

const StyledAppbar = styled(AppBar)(() => ({
	'&.MuiAppBar-root': {
		backgroundColor: 'transparent',
		backgroundImage: 'none',
		color: 'inherit',
		boxShadow: 'none',
	},
}))
const NavigateListItem = styled(ListItem)(({ theme }) => ({
	'& a': {
		border: '1px solid transparent',
		transition: '156ms',
		padding: theme.spacing(0, 2),
	},
	'&:hover a': {
		borderColor: theme.palette.primary.main,
		borderRadius: theme.shape.borderRadius,
	},
}))

const pages = [
	{
		id: 94598278,
		name: 'Home',
		url: '/home',
	},
	{
		id: 845995894,
		name: 'About',
		url: '/about',
	},
	{
		id: 89695844,
		name: 'Contact',
		url: '/contact',
	},
	{
		id: 92039833,
		name: 'Servieces',
		url: '/serviese',
	},
]

export default function Navbar() {
	const toggleMode = useContext(ToggleMode)
	const theme = useTheme()

	return (
		<StyledAppbar position="static">
			<Toolbar>
				<Box sx={{ flexGrow: 1 }}>
					<Logo />
				</Box>
				<Box sx={{ display: 'flex', alignItems: 'center' }}>
					<List sx={{ display: 'flex' }}>
						{pages.map(page => (
							<NavigateListItem key={page.id} disablePadding>
								<Link href={page.url}>
									<a className="navigate">
										<ListItemText primary={page.name} />
									</a>
								</Link>
							</NavigateListItem>
						))}
					</List>
					<Tooltip title={`${capitalizeFirstLetter(theme.palette.mode)} Mode`}>
						<IconButton color="inherit" onClick={toggleMode}>
							{theme.palette.mode === 'light' ? (
								<LightModeIcon color="primary" />
							) : (
								<DarkModeIcon color="primary" />
							)}
						</IconButton>
					</Tooltip>
				</Box>
			</Toolbar>
		</StyledAppbar>
	)
}
