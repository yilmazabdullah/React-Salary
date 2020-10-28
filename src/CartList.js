import React, { Component } from 'react';
import { Button, Table } from 'reactstrap';

class CartList extends Component {
	renderCart(){
		return(

			<Table striped>
				<thead>
					<tr>
						<th>#</th>
						<th>Kategori Id</th>
						<th>Urun Adi</th>
						<th>Ucret</th>
						<th>Stok Bilgisi</th>
						<th>Kaç tane Eklendi</th>
						<th></th>
						
					</tr>
				</thead>
				<tbody>
					{
						this.props.cart.map(cartItem=>(
							<tr key={cartItem.product.productID}>
								<td>{cartItem.product.productID}</td>
								<td>{cartItem.product.categoryID}</td>
								<td>{cartItem.product.name}</td>
								<td>{cartItem.product.unitPrice}</td>
								<td>{cartItem.product.unitsInStock}</td>
								<td>{cartItem.product.quantityPerUnit}</td>
								<td>
									<Button color="danger"
									onClick={()=>this.props.sepettenSil(cartItem.product)}>
									Sil
									</Button>
								</td>
							
							</tr>
						))
					}
				</tbody>
			</Table>
		)
	}
	render() {
		return <div>
			{this.renderCart()}
		</div>;
	}
}

export default CartList;
