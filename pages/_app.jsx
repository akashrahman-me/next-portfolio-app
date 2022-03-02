import '../styles/globals.css'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { ToggleMode } from '../context/ToggleMode'
import { useState, useEffect } from 'react'

function MyApp({ Component, pageProps }) {
	const [mode, setMode] = useState('light')

	useEffect(() => {
		if (localStorage.mode) {
			setMode(localStorage.mode)
		}
	}, [])

	const toggleMode = () => {
		setMode(previous => {
			const currentMode = previous === 'light' ? 'dark' : 'light'
			localStorage.setItem('mode', currentMode)
			return currentMode
		})
	}

	const theme = createTheme({
		palette: {
			mode,
			primary: {
				main: '#16ffbe',
			},
			secondary: {
				main: '#4289ff',
			},
		},
		typography: {
			fontFamily: "'Poppins', sans-serif",
		},
	})

	return (
		<ToggleMode.Provider value={toggleMode}>
			<ThemeProvider theme={theme}>
				<Component {...pageProps} />
			</ThemeProvider>
		</ToggleMode.Provider>
	)
}

export default MyApp
