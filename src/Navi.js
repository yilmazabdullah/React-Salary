import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, NavbarText } from 'reactstrap';
import CardSummary from './CardSummary';

export default class Navi extends React.Component {
	constructor(props) {
		super(props);
		this.toggle = this.toggle.bind(this);
		this.state = {
			isOpen: false,
		};
	}
	toggle() {
		this.setState({
			isOpen: !this.state.isOpen,
		});
	}
	render() {
		return (
			<div>
				<Navbar color="light" light expand="md">
					<NavbarBrand href="/">İlk Uygulamam</NavbarBrand>
					<NavbarToggler onClick={this.state.toggle} />
					<Collapse isOpen={this.state.isOpen} navbar>
						<Nav className="mr-auto" navbar>
							<NavItem>
								<NavLink href="/components/">Components</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
							</NavItem>
							<CardSummary sepettenSil={this.props.sepettenSil} cart={this.props.cart}></CardSummary>
						</Nav>
						<NavbarText>Simple Text</NavbarText>
					</Collapse>
				</Navbar>
			</div>
		);
	}
}
