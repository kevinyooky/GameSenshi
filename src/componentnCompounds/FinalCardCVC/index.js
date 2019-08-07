import React from 'react'
import {
	FinalTextCardCVC,
	FINAL_TEXT_CARD_CVC,
} from './node_modules/componentnCompounds/FinalTextCardCVC/FinalTextCardCVC'
import { cardCvcValidation } from './node_modules/utils'
import { Col } from 'reactstrap'

const FinalTextCardCVCPropedDefault = props => {
	return (
		<Col xs='6'>
			<FinalTextCardCVC validation={cardCvcValidation} {...props} />
		</Col>
	)
}

export { FinalTextCardCVCPropedDefault, FINAL_TEXT_CARD_CVC }
