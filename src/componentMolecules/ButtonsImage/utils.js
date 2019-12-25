import {
	BUTTONS_COMMON_IMAGE_ID,
	BUTTONS_COMMON_IMAGE_TEXT,
	BUTTONS_COMMON_IMAGE_ICON,
} from './ButtonsImage'

import { createGetOptions } from 'utils'

import {
	FIRESTORE_GAMES_DOTA2,
	FIRESTORE_GAMES_PUBG,
	FIRESTORE_GAMES_LOL,
	FIRESTORE_GAMES_APEX,
	FIRESTORE_GAMES_FORTNITE,
} from 'constantValues'

const options = [
	{
		[BUTTONS_COMMON_IMAGE_ID]: FIRESTORE_GAMES_DOTA2,
		[BUTTONS_COMMON_IMAGE_TEXT]: 'Dota 2',
		[BUTTONS_COMMON_IMAGE_ICON]: FIRESTORE_GAMES_DOTA2,
	},
	{
		[BUTTONS_COMMON_IMAGE_ID]: FIRESTORE_GAMES_PUBG,
		[BUTTONS_COMMON_IMAGE_TEXT]: 'PUBG',
		[BUTTONS_COMMON_IMAGE_ICON]: FIRESTORE_GAMES_PUBG,
	},
	{
		[BUTTONS_COMMON_IMAGE_ID]: FIRESTORE_GAMES_LOL,
		[BUTTONS_COMMON_IMAGE_TEXT]: 'LOL',
		[BUTTONS_COMMON_IMAGE_ICON]: FIRESTORE_GAMES_LOL,
	},
	{
		[BUTTONS_COMMON_IMAGE_ID]: FIRESTORE_GAMES_APEX,
		[BUTTONS_COMMON_IMAGE_TEXT]: 'Apex Legends',
		[BUTTONS_COMMON_IMAGE_ICON]: FIRESTORE_GAMES_APEX,
	},
	{
		[BUTTONS_COMMON_IMAGE_ID]: FIRESTORE_GAMES_FORTNITE,
		[BUTTONS_COMMON_IMAGE_TEXT]: 'Fortnite',
		[BUTTONS_COMMON_IMAGE_ICON]: FIRESTORE_GAMES_FORTNITE,
	},
]

const buttonsIndex = [
	FIRESTORE_GAMES_DOTA2,
	FIRESTORE_GAMES_PUBG,
	FIRESTORE_GAMES_LOL,
	FIRESTORE_GAMES_APEX,
	FIRESTORE_GAMES_FORTNITE,
]

const getButtonsImage = createGetOptions(options, BUTTONS_COMMON_IMAGE_ID)

export { buttonsIndex, getButtonsImage }