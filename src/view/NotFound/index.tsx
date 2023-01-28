import { useEffect } from 'react'
import { useHistory } from 'react-router'

function NotFound() {
	const history = useHistory()
	useEffect(() => {
		setTimeout(() => {
			history.replace("/")
		}, 5000);
	}, [])
	return (
		<div>
			NOT FOUND
		</div>
	)
}

export default NotFound