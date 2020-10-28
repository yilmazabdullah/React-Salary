import React, { Component } from 'react';
import { Table, Button } from 'reactstrap';

class UrunListesi extends Component {
	render() {
		return (
			<div>
				<h3>
					{this.props.info.title}-{this.props.currentKategori}
				</h3>
				<Table>
					<thead>
						<tr>
							<th>#</th>
							<th>Ürün Adı</th>
							<th>Fiyat</th>
							<th>Ne kadar</th>
							<th>Stok</th>
							<th>Sepete Ekleme</th>
						</tr>
					</thead>
					<tbody>
						{this.props.products.map((product) => (
							<tr key={product.productID}>
								<th scope="row">{product.productID}</th>
								<td>{product.name}</td>
								<td>{product.unitPrice}</td>
								<td>{product.quantityPerUnit}</td>
								<td>{product.unitsInStock}</td>
								<td>
									<Button onClick={() => this.props.sepeteEkle(product)} color="info">
										Ekle
									</Button>
								</td>
							</tr>
						))}
					</tbody>
				</Table>
			</div>
		);
	}
}

export default UrunListesi;
