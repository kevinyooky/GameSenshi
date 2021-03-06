// temp data array
import { FIRESTORE_SENSHI_PROFILE_CAROUSEL_IMAGE } from 'constantValues'

const getIndexImage = name => require(`assets/img/index/${name}.jpg`)

const itemsIndex = [
	{
		[FIRESTORE_SENSHI_PROFILE_CAROUSEL_IMAGE]: getIndexImage('dota2'),
	},
	{
		[FIRESTORE_SENSHI_PROFILE_CAROUSEL_IMAGE]: getIndexImage('lol'),
	},
	{
		[FIRESTORE_SENSHI_PROFILE_CAROUSEL_IMAGE]: getIndexImage('fornite'),
	},
]

export { itemsIndex }
