import {
	functions,
	// auth,
	// handleDifferentCredential,
} from 'firebaseInit'

import {
	SIGN_UP_USERNAME,
	SIGN_UP_EMAIL,
	SIGN_UP_PASSWORD,
	ENDPOINT,
	DATA,
	// STATUS,
} from 'constantValues'

const defaultValues = {
	// undefined = success
	[SIGN_UP_USERNAME]: undefined,
	[SIGN_UP_EMAIL]: undefined,
	[SIGN_UP_PASSWORD]: undefined,
}

const handleSignUpWithEmailAndPassword = (values = defaultValues) => {
	return functions
		.httpsCallable(ENDPOINT)(values)
		.then(res => {
			res[DATA][DATA] = { ...defaultValues, ...res[DATA][DATA] }
			return res[DATA]
		})
		.catch(err => {
			return 'Unexpected Error Code 3'
		})
}

export default handleSignUpWithEmailAndPassword
