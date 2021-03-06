import React from 'react'
import { stopUndefined } from 'utils'
import { Container, Row, Col } from 'reactstrap'
import { Exports } from 'componentMolecules'

const {
	ImagesTooltipPropedTabs,
	ButtonSoundStoreSoundPropedCardUser,
	QuantityProfile,
	ButtonsCommonChatAndCheckout,
} = stopUndefined(Exports)

const TAB_PRODUCT_PRICE = 'price'
const TAB_PRODUCT_NUM_ORDERS = 'orders'
const TAB_PRODUCT_ICON = 'icon'
const TAB_PRODUCT_DESCRIPTION = 'description'

const TabProduct = props => {
	const {
		[TAB_PRODUCT_PRICE]: price,
		[TAB_PRODUCT_NUM_ORDERS]: orders,
		[TAB_PRODUCT_ICON]: icon,
		[TAB_PRODUCT_DESCRIPTION]: description,
	} = props
	return (
		<Container style={{ zIndex: 99 }}>
			<Row className='py-2 d-flex align-items-center'>
				<Col>
					<ImagesTooltipPropedTabs icons={icon} />
				</Col>
				<Col>
					<div style={{ width: '200px' }}>
						<h4>{price}$ per hour</h4>
						<h4>
							<i className='tim-icons icon-check-2 text-success'></i> {orders}{' '}
							orders completed
						</h4>
						<ButtonSoundStoreSoundPropedCardUser gender={true} />
					</div>
				</Col>
				<Col>
					<QuantityProfile />
				</Col>
			</Row>
			<Row className='pt-3'>
				<Col md='12'>
					<hr className='line-primary' />
				</Col>
			</Row>
			<Row>
				<Col>
					<p>{description}</p>
				</Col>
			</Row>
			<Row className='pt-5 text-right'>
				<Col md={{ offset: 8, size: 4 }}>
					<ButtonsCommonChatAndCheckout />
				</Col>
			</Row>
		</Container>
	)
}

export {
	TabProduct,
	TAB_PRODUCT_DESCRIPTION,
	TAB_PRODUCT_ICON,
	TAB_PRODUCT_NUM_ORDERS,
	TAB_PRODUCT_PRICE,
}
