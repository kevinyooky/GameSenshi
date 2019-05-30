import { functions } from 'utils/firebase'
import { ON_IS_EMAIL_EXIST, STATUS, MESSAGE, DATA } from 'constantValues'

const handleIsEmailExist = email => {
	const verifyEmail = functions.httpsCallable(ON_IS_EMAIL_EXIST)
	return verifyEmail({ email })
		.then(res => {
			if (!res[DATA][STATUS]) {
				return res[DATA][MESSAGE]
			} else {
				return {
					[STATUS]: true,
					[MESSAGE]: 'This email is available for registration!',
				}
			}
		})
		.catch(() => 'Unexpected Error Code 1')
}

export default handleIsEmailExist