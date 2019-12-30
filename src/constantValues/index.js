// TODO this should turn into npm library so that backend can use the same code
// constants is a nodejs module, so the folder is named constantValues instead

import {
	FUNCTION_DATA,
	FUNCTION_STATUS,
	FUNCTION_CODE,
	FUNCTION_MESSAGE,
	FUNCTION_SIGN_UP,
	FUNCTION_INPUT,
	FUNCTION_EMAIL,
	FUNCTION_PASSWORD,
	FUNCTION_DISPLAY_NAME,
	FUNCTION_SIGN_UP_TWITCH,
	FUNCTION_OAUTH_CODE,
	FUNCTION_OAUTH_TOKEN,
	FUNCTION_REDIRECT_URI,
} from './FunctionConstants'

import {
	ENV,
	ENV_PROJECT_ID,
	ENV_ENABLE_PLAYGROUND,
	ENV_APOLLO_ENGINE_API_KEY,
	ENV_CORS_WHITELIST,
	ENV_TWITCH_ID,
	ENV_TWITCH_SECRET,
} from './EnvKeyConstants'

import {
	INTERNAL_ERROR_CODE_1,
	INTERNAL_ERROR_CODE_2,
	INTERNAL_ERROR_CODE_3,
	INTERNAL_ERROR_CODE_4,
	INTERNAL_ERROR_CODE_5,
	INTERNAL_ERROR_CODE_6,
	INTERNAL_ERROR_CODE_7,
	INTERNAL_ERROR_CODE_8,
} from './InternalErrorConstants'

import {
	UNEXPECTED_ERROR_CODE_1,
	UNEXPECTED_ERROR_CODE_2,
	UNEXPECTED_ERROR_CODE_3,
	UNEXPECTED_ERROR_CODE_4,
	UNEXPECTED_ERROR_CODE_5,
	UNEXPECTED_ERROR_CODE_6,
	UNEXPECTED_ERROR_CODE_7,
	UNEXPECTED_ERROR_CODE_8,
} from './UnexpectedErrorConstants'

import {
	CREATED_AT,
	UPDATED_AT,
	storagePathUserAvatar,
	STORAGE_USER_AVATAR,
	FIRESTORE_USER,
	FIRESTORE_SETTINGS,
	fireStorePathSettingsNotification,
	FIRESTORE_SETTINGS_NOTIFICATION_EMAIL,
	FIRESTORE_SETTINGS_NOTIFICATION_EMAIL_ORDER_UPDATES,
	FIRESTORE_SETTINGS_NOTIFICATION_EMAIL_NEWS_LETTER,
	FIRESTORE_SETTINGS_NOTIFICATION_EMAIL_CHATS,
	FIRESTORE_SETTINGS_NOTIFICATION_EMAIL_COMMENTS,
	FIRESTORE_SETTINGS_NOTIFICATION_PUSH,
	FIRESTORE_SETTINGS_NOTIFICATION_PUSH_ORDER_UPDATES,
	FIRESTORE_SETTINGS_NOTIFICATION_PUSH_CHATS,
	FIRESTORE_SETTINGS_NOTIFICATION_PUSH_COMMENTS,
	firestorePathSettingsGeneral,
	FIRESTORE_SETTINGS_GENERAL_DISPLAY_NAME,
	FIRESTORE_SETTINGS_GENERAL_LANGUAGES,
	FIRESTORE_SETTINGS_GENERAL_USER_AVATAR,
	FIRESTORE_SETTINGS_GENERAL_SHORT_ID,
	FIRESTORE_SENSHI_BADGES_VERIFIED,
	FIRESTORE_SENSHI_BADGES_FEMALE,
	FIRESTORE_SENSHI_BADGES_RISING_STAR,
	FIRESTORE_SENSHI_BADGES_ONLINE,
	FIRESTORE_CHANNELS_FACEBOOK,
	FIRESTORE_CHANNELS_TWITCH,
	FIRESTORE_CHANNELS_YOUTUBE,
	FIRESTORE_GAMES_DOTA2,
	FIRESTORE_GAMES_PUBG,
	FIRESTORE_GAMES_LOL,
	FIRESTORE_GAMES_APEX,
	FIRESTORE_GAMES_FORTNITE,
} from './FireStorageConstants'

import {
	BREAKPOINTS_XS,
	BREAKPOINTS_SX,
	BREAKPOINTS_SM,
	BREAKPOINTS_MD,
	BREAKPOINTS_LG,
	BREAKPOINTS_XL,
} from './BreakpointConstants'

import {
	ENV_FIREBASE_CONFIG,
	ENV_TWITCH_CLIENT,
	ENV_TWITCH_REDIRECT,
} from './EnvValueConstants'

import { AUTH_GOOGLE, AUTH_FACEBOOK, AUTH_TWITCH } from './AuthConstants'

export {
	FUNCTION_DATA,
	FUNCTION_STATUS,
	FUNCTION_CODE,
	FUNCTION_MESSAGE,
	FUNCTION_SIGN_UP,
	FUNCTION_INPUT,
	FUNCTION_EMAIL,
	FUNCTION_PASSWORD,
	FUNCTION_DISPLAY_NAME,
	FUNCTION_SIGN_UP_TWITCH,
	FUNCTION_OAUTH_CODE,
	FUNCTION_OAUTH_TOKEN,
	FUNCTION_REDIRECT_URI,
	ENV,
	ENV_PROJECT_ID,
	ENV_ENABLE_PLAYGROUND,
	ENV_APOLLO_ENGINE_API_KEY,
	ENV_CORS_WHITELIST,
	ENV_TWITCH_ID,
	ENV_TWITCH_SECRET,
	INTERNAL_ERROR_CODE_1,
	INTERNAL_ERROR_CODE_2,
	INTERNAL_ERROR_CODE_3,
	INTERNAL_ERROR_CODE_4,
	INTERNAL_ERROR_CODE_5,
	INTERNAL_ERROR_CODE_6,
	INTERNAL_ERROR_CODE_7,
	INTERNAL_ERROR_CODE_8,
	UNEXPECTED_ERROR_CODE_1,
	UNEXPECTED_ERROR_CODE_2,
	UNEXPECTED_ERROR_CODE_3,
	UNEXPECTED_ERROR_CODE_4,
	UNEXPECTED_ERROR_CODE_5,
	UNEXPECTED_ERROR_CODE_6,
	UNEXPECTED_ERROR_CODE_7,
	UNEXPECTED_ERROR_CODE_8,
	CREATED_AT,
	UPDATED_AT,
	storagePathUserAvatar,
	STORAGE_USER_AVATAR,
	FIRESTORE_USER,
	FIRESTORE_SETTINGS,
	fireStorePathSettingsNotification,
	FIRESTORE_SETTINGS_NOTIFICATION_EMAIL,
	FIRESTORE_SETTINGS_NOTIFICATION_EMAIL_ORDER_UPDATES,
	FIRESTORE_SETTINGS_NOTIFICATION_EMAIL_NEWS_LETTER,
	FIRESTORE_SETTINGS_NOTIFICATION_EMAIL_CHATS,
	FIRESTORE_SETTINGS_NOTIFICATION_EMAIL_COMMENTS,
	FIRESTORE_SETTINGS_NOTIFICATION_PUSH,
	FIRESTORE_SETTINGS_NOTIFICATION_PUSH_ORDER_UPDATES,
	FIRESTORE_SETTINGS_NOTIFICATION_PUSH_CHATS,
	FIRESTORE_SETTINGS_NOTIFICATION_PUSH_COMMENTS,
	firestorePathSettingsGeneral,
	FIRESTORE_SETTINGS_GENERAL_DISPLAY_NAME,
	FIRESTORE_SETTINGS_GENERAL_LANGUAGES,
	FIRESTORE_SETTINGS_GENERAL_USER_AVATAR,
	FIRESTORE_SETTINGS_GENERAL_SHORT_ID,
	FIRESTORE_SENSHI_BADGES_VERIFIED,
	FIRESTORE_SENSHI_BADGES_FEMALE,
	FIRESTORE_SENSHI_BADGES_RISING_STAR,
	FIRESTORE_SENSHI_BADGES_ONLINE,
	FIRESTORE_CHANNELS_FACEBOOK,
	FIRESTORE_CHANNELS_TWITCH,
	FIRESTORE_CHANNELS_YOUTUBE,
	FIRESTORE_GAMES_DOTA2,
	FIRESTORE_GAMES_PUBG,
	FIRESTORE_GAMES_LOL,
	FIRESTORE_GAMES_APEX,
	FIRESTORE_GAMES_FORTNITE,
	BREAKPOINTS_XS,
	BREAKPOINTS_SX,
	BREAKPOINTS_SM,
	BREAKPOINTS_MD,
	BREAKPOINTS_LG,
	BREAKPOINTS_XL,
	ENV_FIREBASE_CONFIG,
	ENV_TWITCH_CLIENT,
	ENV_TWITCH_REDIRECT,
	AUTH_GOOGLE,
	AUTH_FACEBOOK,
	AUTH_TWITCH,
}
