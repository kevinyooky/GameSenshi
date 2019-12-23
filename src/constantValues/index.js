// TODO this should turn into npm library so that backend can use the same code
// constants is a nodejs module, so the folder is named constantValues instead

import {
	API_DATA,
	API_STATUS,
	API_CODE,
	API_MESSAGE,
	API_SIGN_UP,
	API_SIGN_UP_INPUT,
	API_SIGN_UP_EMAIL,
	API_SIGN_UP_PASSWORD,
	API_SIGN_UP_DISPLAY_NAME,
	API_GOOGLE,
	API_FACEBOOK,
	API_TWITCH,
} from './ApiConstants'

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
} from './InternalErrorConstants'

import {
	UNEXPECTED_ERROR_CODE_1,
	UNEXPECTED_ERROR_CODE_2,
	UNEXPECTED_ERROR_CODE_3,
	UNEXPECTED_ERROR_CODE_4,
	UNEXPECTED_ERROR_CODE_5,
	UNEXPECTED_ERROR_CODE_6,
	UNEXPECTED_ERROR_CODE_7,
} from './UnexpectedErrorConstants'

import {
	CREATED_AT,
	UPDATED_AT,
	fbStorageUserAvatarPath,
	FB_STORAGE_USER_AVATAR,
	FB_FS_USER,
	FB_FS_SETTINGS,
	fbfsSettingsNotificationPath,
	FB_FS_SETTINGS_NOTIFICATION_EMAIL,
	FB_FS_SETTINGS_NOTIFICATION_EMAIL_ORDER_UPDATES,
	FB_FS_SETTINGS_NOTIFICATION_EMAIL_NEWS_LETTER,
	FB_FS_SETTINGS_NOTIFICATION_EMAIL_CHATS,
	FB_FS_SETTINGS_NOTIFICATION_EMAIL_COMMENTS,
	FB_FS_SETTINGS_NOTIFICATION_PUSH,
	FB_FS_SETTINGS_NOTIFICATION_PUSH_ORDER_UPDATES,
	FB_FS_SETTINGS_NOTIFICATION_PUSH_CHATS,
	FB_FS_SETTINGS_NOTIFICATION_PUSH_COMMENTS,
	fbfsSettingsGeneralPath,
	FB_FS_SETTINGS_GENERAL_DISPLAY_NAME,
	FB_FS_SETTINGS_GENERAL_LANGUAGES,
	FB_FS_SETTINGS_GENERAL_USER_AVATAR,
	FB_FS_SETTINGS_GENERAL_SHORT_ID,
	FB_FS_SENSHI_BADGES_VERIFIED,
	FB_FS_SENSHI_BADGES_FEMALE,
	FB_FS_SENSHI_BADGES_RISING_STAR,
	FB_FS_SENSHI_BADGES_ONLINE,
	FB_FS_CHANNELS_FACEBOOK,
	FB_FS_CHANNELS_TWITCH,
	FB_FS_CHANNELS_YOUTUBE,
	FB_FS_GAMES_DOTA2,
	FB_FS_GAMES_PUBG,
	FB_FS_GAMES_LOL,
	FB_FS_GAMES_APEX,
	FB_FS_GAMES_FORTNITE,
} from './FirebaseConstants'

import {
	BREAKPOINTS_XS,
	BREAKPOINTS_SX,
	BREAKPOINTS_SM,
	BREAKPOINTS_MD,
	BREAKPOINTS_LG,
	BREAKPOINTS_XL,
} from './BreakpointConstants'

export {
	API_DATA,
	API_STATUS,
	API_CODE,
	API_MESSAGE,
	API_SIGN_UP,
	API_SIGN_UP_INPUT,
	API_SIGN_UP_EMAIL,
	API_SIGN_UP_PASSWORD,
	API_SIGN_UP_DISPLAY_NAME,
	API_GOOGLE,
	API_FACEBOOK,
	API_TWITCH,
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
	UNEXPECTED_ERROR_CODE_1,
	UNEXPECTED_ERROR_CODE_2,
	UNEXPECTED_ERROR_CODE_3,
	UNEXPECTED_ERROR_CODE_4,
	UNEXPECTED_ERROR_CODE_5,
	UNEXPECTED_ERROR_CODE_6,
	UNEXPECTED_ERROR_CODE_7,
	CREATED_AT,
	UPDATED_AT,
	fbStorageUserAvatarPath,
	FB_STORAGE_USER_AVATAR,
	FB_FS_USER,
	FB_FS_SETTINGS,
	fbfsSettingsNotificationPath,
	FB_FS_SETTINGS_NOTIFICATION_EMAIL,
	FB_FS_SETTINGS_NOTIFICATION_EMAIL_ORDER_UPDATES,
	FB_FS_SETTINGS_NOTIFICATION_EMAIL_NEWS_LETTER,
	FB_FS_SETTINGS_NOTIFICATION_EMAIL_CHATS,
	FB_FS_SETTINGS_NOTIFICATION_EMAIL_COMMENTS,
	FB_FS_SETTINGS_NOTIFICATION_PUSH,
	FB_FS_SETTINGS_NOTIFICATION_PUSH_ORDER_UPDATES,
	FB_FS_SETTINGS_NOTIFICATION_PUSH_CHATS,
	FB_FS_SETTINGS_NOTIFICATION_PUSH_COMMENTS,
	fbfsSettingsGeneralPath,
	FB_FS_SETTINGS_GENERAL_DISPLAY_NAME,
	FB_FS_SETTINGS_GENERAL_LANGUAGES,
	FB_FS_SETTINGS_GENERAL_USER_AVATAR,
	FB_FS_SETTINGS_GENERAL_SHORT_ID,
	FB_FS_SENSHI_BADGES_VERIFIED,
	FB_FS_SENSHI_BADGES_FEMALE,
	FB_FS_SENSHI_BADGES_RISING_STAR,
	FB_FS_SENSHI_BADGES_ONLINE,
	FB_FS_CHANNELS_FACEBOOK,
	FB_FS_CHANNELS_TWITCH,
	FB_FS_CHANNELS_YOUTUBE,
	FB_FS_GAMES_DOTA2,
	FB_FS_GAMES_PUBG,
	FB_FS_GAMES_LOL,
	FB_FS_GAMES_APEX,
	FB_FS_GAMES_FORTNITE,
	BREAKPOINTS_XS,
	BREAKPOINTS_SX,
	BREAKPOINTS_SM,
	BREAKPOINTS_MD,
	BREAKPOINTS_LG,
	BREAKPOINTS_XL,
}
