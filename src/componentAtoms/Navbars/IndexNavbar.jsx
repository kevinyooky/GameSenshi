import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { auth } from 'firebaseInit'
// state
import {
	storeUser,
	storeAlert,
	Subscribe,
	STORE_ALERT_STATE_OPEN,
	STATE,
	STORE_USER_STATE_SIGNING_IN,
	STORE_USER_STATE_SIGNED_IN,
	STORE_USER_STATE_USERNAME,
	STORE_USER_STATE_AVATAR_URL,
} from 'state'
// reactstrap components
import {
	Collapse,
	Media,
	DropdownMenu,
	UncontrolledDropdown,
	DropdownItem,
	DropdownToggle,
	NavbarBrand,
	Navbar,
	NavItem,
	NavLink,
	Nav,
	Container,
	Row,
	Col,
} from 'reactstrap'
import Loader from 'react-loader-spinner'
// constants
import {
	ROUTE_PAGE_SIGN_UP,
	ROUTE_PAGE_SIGN_IN,
	ROUTE_PAGE_SETTINGS_GENERAL,
} from 'routes'
//core component
import { ButtonSignUpPropedDefault } from 'componentAtoms/ButtonSignUp'
import { ButtonSignInPropedDefault } from 'componentAtoms/ButtonSignIn'
import { AlertCommonStoreAlert } from 'componentAtoms/AlertCommon'
import { ProgressCommonStoreProgress } from 'componentAtoms/ProgressCommon'
// logo
import logo from 'assets/img/favicon.ico'

const widthBreakPoint = 991
const bgPurple = 'bg-purple'

class ComponentsNavbar extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			collapseOpen: false,
			color: 'navbar-transparent',
			overWidthBreakPoint: window.innerWidth > widthBreakPoint,
			collapseExited: true,
			navbarHeight: 0,
		}
		this.setState = this.setState.bind(this)
	}
	componentDidMount() {
		window.addEventListener('scroll', this.changeColor)
		window.addEventListener('resize', this.onDimensionChange)
	}
	componentWillUnmount() {
		window.removeEventListener('scroll', this.changeColor)
		window.removeEventListener('resize', this.onDimensionChange)
	}

	onDimensionChange = () => {
		if (
			window.innerWidth > widthBreakPoint &&
			!this.state.overWidthBreakPoint
		) {
			this.setState({ overWidthBreakPoint: true })
		} else if (
			window.innerWidth <= widthBreakPoint &&
			this.state.overWidthBreakPoint
		) {
			this.setState({ overWidthBreakPoint: false })
		}
	}

	changeColor = () => {
		if (
			document.documentElement.scrollTop > 299 ||
			document.body.scrollTop > 299
		) {
			this.setState({
				color: bgPurple,
			})
		} else if (
			document.documentElement.scrollTop < 300 ||
			document.body.scrollTop < 300
		) {
			this.setState({
				color:
					(storeAlert[STATE][STORE_ALERT_STATE_OPEN] && bgPurple) ||
					'navbar-transparent',
			})
		}
	}

	toggleCollapse = () => {
		document.documentElement.classList.toggle('nav-open')
		this.setState(state => {
			state.collapseOpen = !state.collapseOpen
			return state
		})
	}
	onCollapseEntering = () => {
		this.setState({
			collapseExited: false,
		})
	}
	onCollapseExiting = () => {
		this.setState({
			collapseOut: 'collapsing-out',
		})
	}
	onCollapseExited = () => {
		this.setState({
			collapseOut: '',
			collapseExited: true,
		})
	}
	scrollToDownload = () => {
		document
			.getElementById('download-section')
			.scrollIntoView({ behavior: 'smooth' })
	}

	render() {
		const {
			props: {
				history,
				location: { pathname },
			},
			state: { color, collapseOpen, collapseOut, overWidthBreakPoint },
			toggleCollapse,
			onCollapseExiting,
			onCollapseExited,
			onCollapseEntering,
			collapseExited,
		} = this

		const currentPath = pathname.toLowerCase()
		return (
			<Subscribe to={[storeUser, storeAlert]}>
				{(storeUser, storeAlert) => {
					const {
						[STORE_USER_STATE_USERNAME]: username,
						[STORE_USER_STATE_SIGNED_IN]: isSignedIn,
						[STORE_USER_STATE_AVATAR_URL]: avatarURL,
						[STORE_USER_STATE_SIGNING_IN]: isSigningIn,
					} = storeUser.state
					const { [STORE_ALERT_STATE_OPEN]: alertOpen } = storeAlert.state
					return (
						<div className='fixed-top'>
							<ProgressCommonStoreProgress />
							<Navbar
								style={{
									zIndex: 90000,
								}}
								className={(alertOpen && bgPurple) || color}
								color-on-scroll='100'
								expand='lg'>
								<Container>
									<div className='navbar-translate'>
										<NavbarBrand
											data-placement='bottom'
											to='/'
											rel='noopener noreferrer'
											tag={Link}
											className='d-flex align-items-center'>
											<div
												className='avatar'
												style={{
													height: 0,
													width: 48,
													backgroundColor: 'transparent',
												}}>
												<Media
													onError={() => {
														storeUser.resetProfileImage()
													}}
													src={logo}
													alt='Game Senshi'
													className='img-raised'
													style={{ height: 48, width: 48 }}
												/>
											</div>
											<div className='d-none d-sm-inline'>
												&nbsp;&nbsp;&nbsp;GAME SENSHI
											</div>
										</NavbarBrand>
										<Nav className='flex-row' navbar>
											{isSigningIn ? (
												<NavItem className='active navbar-toggler'>
													<NavLink
														disabled
														href='#pablo'
														className='p-0 d-flex align-items-center'>
														<Loader
															type='Hearts'
															color='#00BFFF'
															height='36'
															width='36'
														/>
														&nbsp;&nbsp;...Signing In
													</NavLink>
												</NavItem>
											) : //small screen size
											isSignedIn ? (
												<NavItem className='active navbar-toggler'>
													<NavLink
														href='notification'
														onClick={e => e.preventDefault()}>
														<i
															aria-hidden={true}
															className='tim-icons icon-bell-55'
														/>
													</NavLink>
												</NavItem>
											) : currentPath === '/signup' ? (
												<ButtonSignInPropedDefault className='navbar-toggler' />
											) : (
												<ButtonSignUpPropedDefault className='navbar-toggler' />
											)}
											<NavItem className='active'>
												<button // button to activate collapsed
													aria-expanded={collapseOpen}
													className='navbar-toggler'
													onClick={toggleCollapse}>
													<span className='navbar-toggler-bar bar1 mt-1' />
													<span className='navbar-toggler-bar bar2' />
													<span className='navbar-toggler-bar bar3' />
												</button>
											</NavItem>
										</Nav>
									</div>
									<Collapse
										className={'justify-content-end ' + collapseOut}
										style={{
											overflow: collapseOpen ? 'hidden' : 'visible',
										}}
										navbar
										isOpen={collapseOpen}
										onEntering={onCollapseEntering}
										onExiting={onCollapseExiting}
										onExited={onCollapseExited}>
										<div className='navbar-collapse-header'>
											<Row>
												<Col className='collapse-brand' xs='6'>
													<a href='#pablo' onClick={e => e.preventDefault()}>
														GAME SENSHI
													</a>
												</Col>
												<Col className='collapse-close text-right' xs='6'>
													<button
														aria-expanded={collapseOpen}
														className='navbar-toggler'
														onClick={toggleCollapse}>
														<i className='tim-icons icon-simple-remove' />
													</button>
												</Col>
											</Row>
										</div>
										<Nav navbar>
											{(!collapseOpen && collapseExited) ||
											overWidthBreakPoint ? ( // big screen size or not collapsed
												isSigningIn ? (
													<NavItem className='active d-none d-lg-inline-flex'>
														<NavLink
															disabled
															href='#pablo'
															className='p-0 d-flex align-items-center'>
															<Loader
																type='Hearts'
																color='#00BFFF'
																height='36'
																width='36'
															/>
															&nbsp;&nbsp;...Signing In
														</NavLink>
													</NavItem>
												) : isSignedIn ? (
													<>
														<NavItem className='active d-none d-lg-inline-flex'>
															<NavLink
																href='/joinSenshi'
																onClick={e => e.preventDefault()}>
																Senshi Portal
															</NavLink>
														</NavItem>
														<NavItem className='active d-none d-lg-inline-flex'>
															<NavLink
																href='/notification'
																onClick={e => e.preventDefault()}>
																<i
																	aria-hidden={true}
																	className='tim-icons icon-bell-55'
																/>
															</NavLink>
														</NavItem>
														<UncontrolledDropdown // user menu bar
															nav
															className='d-none d-lg-inline-flex'>
															<DropdownToggle
																caret
																color='default'
																data-toggle='dropdown'
																href='#pablo'
																id='navbarDropdownMenuLink'
																nav
																onClick={e => e.preventDefault()}
																className='d-flex align-items-center pt-0 pb-0'>
																<div
																	className='avatar'
																	style={{ height: 36, width: 36 }}>
																	<Media
																		onError={() => {
																			storeUser.resetProfileImage()
																		}}
																		alt='user avatar'
																		className='img-raised'
																		style={{ height: 36, width: 36 }}
																		src={avatarURL}
																	/>
																</div>
															</DropdownToggle>
															<DropdownMenu
																aria-labelledby='navbarDropdownMenuLink'
																right>
																<DropdownItem
																	to={ROUTE_PAGE_SETTINGS_GENERAL}
																	tag={Link}
																	className='text-dark mt-0 py-1 px-4'
																	style={{ fontSize: '1rem' }}>
																	<strong>{username}</strong>
																</DropdownItem>
																<DropdownItem divider />
																<DropdownItem
																	href='#pablo'
																	className='text-dark mt-0 py-1 px-4'
																	style={{ fontSize: '1rem' }}
																	onClick={e => e.preventDefault()}>
																	My Senshi
																</DropdownItem>
																<DropdownItem divider />
																<DropdownItem
																	to={ROUTE_PAGE_SETTINGS_GENERAL}
																	tag={Link}
																	className='text-dark mt-0 py-1 px-4'
																	style={{ fontSize: '1rem' }}
																	onClick={e => {
																		e.preventDefault()
																		history.push(ROUTE_PAGE_SETTINGS_GENERAL)
																	}}>
																	Settings
																</DropdownItem>
																<DropdownItem
																	className='text-dark mt-0 py-1 px-4'
																	style={{ fontSize: '1rem' }}
																	onClick={e => e.preventDefault()}>
																	Help
																</DropdownItem>
																<DropdownItem
																	className='text-dark mt-0 py-1 px-4'
																	style={{ fontSize: '1rem' }}
																	onClick={() => {
																		auth().signOut()
																	}}>
																	Sign Out
																</DropdownItem>
															</DropdownMenu>
														</UncontrolledDropdown>
													</>
												) : (
													<>
														{currentPath !== '/signin' && (
															<ButtonSignInPropedDefault />
														)}
														{currentPath !== '/signup' && (
															<ButtonSignUpPropedDefault />
														)}
													</>
												)
											) : // small screen size and collapsed
											isSignedIn ? (
												<>
													<NavItem className='p-0'>
														<NavLink
															data-placement='bottom'
															to={ROUTE_PAGE_SETTINGS_GENERAL}
															tag={Link}
															style={{
																paddingTop: 6,
																paddingBottom: 6,
															}}>
															<Row>
																<Col
																	xs='2'
																	style={{
																		paddingLeft: 12,
																		paddingRight: 18,
																	}}>
																	<div
																		className='avatar'
																		style={{ height: 24, width: 24 }}>
																		<Media
																			onError={() => {
																				storeUser.resetProfileImage()
																			}}
																			alt='user avatar'
																			className='img-raised'
																			style={{ height: 24, width: 24 }}
																			src={avatarURL}
																		/>
																	</div>
																</Col>
																<Col>
																	<p>{username}</p>
																</Col>
															</Row>
														</NavLink>
													</NavItem>
													<NavItem className='p-0'>
														<NavLink data-placement='bottom' href='#pablo'>
															<Row>
																<Col xs='2'>
																	<i className='fab fas fa-user-plus' />
																</Col>
																<Col>
																	<p>My Senshi</p>
																</Col>
															</Row>
														</NavLink>
													</NavItem>
													<NavItem className='p-0'>
														<NavLink data-placement='bottom' href='#pablo'>
															<Row>
																<Col xs='2'>
																	<i className='tim-icons icon-key-25' />
																</Col>
																<Col>
																	<p>Senshi Portal</p>
																</Col>
															</Row>
														</NavLink>
													</NavItem>
													<NavItem className='p-0'>
														<NavLink
															data-placement='bottom'
															to={ROUTE_PAGE_SETTINGS_GENERAL}
															tag={Link}
															href='#pablo'>
															<Row>
																<Col xs='2'>
																	<i className='fab fas fa-user-plus' />
																</Col>
																<Col>
																	<p>Settings</p>
																</Col>
															</Row>
														</NavLink>
													</NavItem>
													<NavItem className='p-0'>
														<NavLink data-placement='bottom' href='#pablo'>
															<Row>
																<Col xs='2'>
																	<i className='fab fas fa-question' />
																</Col>
																<Col>
																	<p>Help</p>
																</Col>
															</Row>
														</NavLink>
													</NavItem>
													<NavItem className='p-0'>
														<NavLink
															style={{ cursor: 'pointer' }}
															data-placement='bottom'
															onClick={e => {
																e.preventDefault()
																toggleCollapse()
																auth().signOut()
															}}>
															<Row>
																<Col xs='2'>
																	<i className='fab fas fa-sign-out-alt' />
																</Col>
																<Col>
																	<p>Sign out</p>
																</Col>
															</Row>
														</NavLink>
													</NavItem>
												</>
											) : (
												<>
													{currentPath !== '/signin' && (
														<NavItem className='p-0'>
															<NavLink
																data-placement='bottom'
																to={ROUTE_PAGE_SIGN_IN}
																tag={Link}>
																<Row>
																	<Col xs='2'>
																		<i className='fab fas fa-sign-in-alt' />
																	</Col>
																	<Col>
																		<p>Sign in</p>
																	</Col>
																</Row>
															</NavLink>
														</NavItem>
													)}
													{currentPath !== '/signup' && (
														<NavItem className='p-0'>
															<NavLink
																data-placement='bottom'
																to={ROUTE_PAGE_SIGN_UP}
																tag={Link}>
																<Row>
																	<Col xs='2'>
																		<i className='fab fas fa-user-plus' />
																	</Col>
																	<Col>
																		<p>Sign up</p>
																	</Col>
																</Row>
															</NavLink>
														</NavItem>
													)}
												</>
											)}
										</Nav>
									</Collapse>
								</Container>
							</Navbar>
							<AlertCommonStoreAlert />
						</div>
					)
				}}
			</Subscribe>
		)
	}
}

export default withRouter(ComponentsNavbar)
