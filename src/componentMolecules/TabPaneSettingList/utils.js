import {
	BODY,
	NAME,
	SECTION,
	CHECKBOXES,
	TITLE,
} from 'componentMolecules/TabPaneSettingList/TabPaneSettingList'

import {
	FB_FS_SETTINGS_NOTIFICATION_EMAIL,
	FB_FS_SETTINGS_NOTIFICATION_EMAIL_ORDER_UPDATES,
	FB_FS_SETTINGS_NOTIFICATION_EMAIL_NEWS_LETTER,
	FB_FS_SETTINGS_NOTIFICATION_EMAIL_CHATS,
	FB_FS_SETTINGS_NOTIFICATION_EMAIL_COMMENTS,
	FB_FS_SETTINGS_NOTIFICATION_PUSH,
	FB_FS_SETTINGS_NOTIFICATION_PUSH_ORDER_UPDATES,
	FB_FS_SETTINGS_NOTIFICATION_PUSH_CHATS,
	FB_FS_SETTINGS_NOTIFICATION_PUSH_COMMENTS,
} from 'constantValues'

const settingListNotification = () => [
	{
		[SECTION]: FB_FS_SETTINGS_NOTIFICATION_PUSH,
		[TITLE]: 'Push Notification',
		[CHECKBOXES]: [
			{
				[BODY]: 'Order Updates',
				[NAME]: FB_FS_SETTINGS_NOTIFICATION_PUSH_ORDER_UPDATES,
			},
			{
				[BODY]: 'Chats',
				[NAME]: FB_FS_SETTINGS_NOTIFICATION_PUSH_CHATS,
			},
			{
				[BODY]: 'Comments',
				[NAME]: FB_FS_SETTINGS_NOTIFICATION_PUSH_COMMENTS,
			},
		],
	},
	{
		[SECTION]: FB_FS_SETTINGS_NOTIFICATION_EMAIL,
		[TITLE]: 'Email Notification',
		[CHECKBOXES]: [
			{
				[BODY]: 'Order Updates',
				[NAME]: FB_FS_SETTINGS_NOTIFICATION_EMAIL_ORDER_UPDATES,
			},
			{
				[BODY]: 'Newsletter',
				[NAME]: FB_FS_SETTINGS_NOTIFICATION_EMAIL_NEWS_LETTER,
			},
			{
				[BODY]: 'Chats',
				[NAME]: FB_FS_SETTINGS_NOTIFICATION_EMAIL_CHATS,
			},
			{
				[BODY]: 'Comments',
				[NAME]: FB_FS_SETTINGS_NOTIFICATION_EMAIL_COMMENTS,
			},
		],
	},
]

export { settingListNotification }