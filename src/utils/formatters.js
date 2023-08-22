const formatToTens = number => {
	if (number < 10) {
		return `0${number}`
	} else {
		return number
	}
}

const convertToMinuteSeconds = duration => {
	const ONE_MINUTE = 60 // seconds
	const minutes = Math.floor(duration / ONE_MINUTE)
	const minutesInSeconds = ONE_MINUTE * minutes

	let remainingSeconds
	if (minutes) {
		remainingSeconds = Math.floor(duration % minutesInSeconds)
	} else {
		remainingSeconds = Math.floor(duration)
	}

	return `${formatToTens(minutes)}:${formatToTens(remainingSeconds)}`
}

export { convertToMinuteSeconds }