import React, { Component } from 'react';
import {Link} from "react-router-dom";
import { UncontrolledDropdown, Badge, DropdownToggle, DropdownMenu, DropdownItem, NavItem, NavLink } from 'reactstrap';

class cardSummary extends Component {
	renderSummary() {
		return (
			<UncontrolledDropdown nav inNavbar>
				<DropdownToggle nav caret>
					Sepetiniz
				</DropdownToggle>
				<DropdownMenu right>
					{this.props.cart.map((cartItem) => (
						<DropdownItem key={cartItem.product.productID}>
							<Badge color="danger" onClick={() => this.props.sepettenSil(cartItem.product)}>
								X
							</Badge>
							{cartItem.product.name}
							<Badge color="success">{cartItem.quantity}</Badge>
						</DropdownItem>
					))}
					<DropdownItem divider />
					<DropdownItem>
						<Link to="cart">Sepete Git</Link>
					</DropdownItem>
				</DropdownMenu>
			</UncontrolledDropdown>
		);
	}
	renderEmpty() {
		return (
			<NavItem>
				<NavLink>Sepetiniz Boş!!!</NavLink>
			</NavItem>
		);
	}
	render() {
		return <div>{this.props.cart.length > 0 ? this.renderSummary() : this.renderEmpty()}</div>;
	}
}

export default cardSummary;
