import React from 'react'
//state
import { Subscribe, userStore } from 'state'
// constants
import { USER_CREDIT_CARDS } from 'constantValues'
// reactstrap components
import { Button, Label, FormGroup, Input, Table, TabPane } from 'reactstrap'

import Cards from 'react-credit-cards'
import 'react-credit-cards/lib/styles.scss'

const BillingTabPane = () => {
	return (
		<Subscribe to={[userStore]}>
			{userStore => {
				const {
					state: { [USER_CREDIT_CARDS]: creditCards },
				} = userStore
				return (
					<TabPane tabId='profile2'>
						<header>
							<h2 className='text-uppercase'>Billing method</h2>
						</header>
						<hr className='line-info' />
						<br />
						<Table className='align-items-center'>
							<thead>
								<tr>
									<th scope='col'>Card Type</th>
									<th scope='col'>Card Number</th>
									<th scope='col'>Payment Method</th>
									<th scope='col'>Action</th>
								</tr>
							</thead>
							<tbody>
								{creditCards.map((creditCard, i) => {
									return (
										<tr key={i}>
											<th scope='row'>
												<img
													alt='...'
													className='avatar'
													src={require(`payment-icons/min/flat/${
														creditCard.cardType
													}.svg`)}
												/>
											</th>
											<td>
												<span className='d-block'>
													•••• •••• •••• {creditCard.last4Digits}
												</span>
												<small className='text-muted'>
													Exp: {creditCard.exp}
												</small>
											</td>
											<td className='text-center'>
												<FormGroup check className='form-check-radio'>
													<Label check>
														<Input
															defaultChecked={creditCard.isDefault}
															defaultValue={i}
															id='Radios'
															name='payment'
															type='radio'
														/>
														<span className='form-check-sign' />
													</Label>
												</FormGroup>
											</td>
											<td>
												<Button
													className='btn-simple'
													color='danger'
													size='sm'
													type='button'>
													<i className='tim-icons icon-simple-remove' /> Remove
													card
												</Button>
											</td>
										</tr>
									)
								})}
							</tbody>
						</Table>
						<Button color='info' size='sm' type='button'>
							<i className='tim-icons icon-simple-add' /> Add card
						</Button>
					</TabPane>
				)
			}}
		</Subscribe>
	)
}

export default BillingTabPane