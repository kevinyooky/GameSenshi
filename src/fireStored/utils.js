import { fireStored, auth, getServerTimestamp } from 'firebaseInit/core'
import { UPDATED_AT } from 'constantValues'

const createDocGetSet = path => {
	const ref = () => fireStored().doc(path(auth().currentUser.uid))
	const get = () => ref().get()
	const set = (data, options = { merge: true }) =>
		ref().set(
			{
				[UPDATED_AT]: getServerTimestamp(),
				...data,
			},
			options
		)
	const onSanpshot = (...args) => ref().onSnapshot(...args)
	return [get, set, onSanpshot]
}

export { createDocGetSet }
