import { storeAlertShow, storeUserResetAvatar } from 'state'
import { storageUserAvatarRemove } from 'firebaseInit'
import { docSettingGeneralAvatarSet } from 'fireStored'
const emptyString = ''

const onRemove = async () => {
	const removed = await docSettingGeneralAvatarSet(emptyString)
		.then(() => {
			storeUserResetAvatar()
			storeAlertShow(
				'Profile picture removed, It may take a few moments to update across the site.',
				'success',
				'tim-icons icon-bell-55'
			)
			return true
		})
		.catch(() => {
			storeAlertShow(
				'Something went wrong, unable to remove profile picture',
				'danger',
				'tim-icons icon-alert-circle-exc'
			)
			return false
		})

	if (removed) {
		storageUserAvatarRemove().catch(() => {})
	}
}

export { onRemove }
