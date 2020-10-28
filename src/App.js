import React, { Component } from 'react';
import KategoriList from './KategoriList';
import Navi from './Navi';
import UrunListesi from './UrunListesi';
import { Container, Row, Col } from 'reactstrap';
import * as alertify from 'alertifyjs';
import { Switch, Route } from 'react-router-dom';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotFound from './NotFound';
import CartList from './CartList';

export default class App extends Component {
	state = { currentKategori: '', products: [], cart: [] };

	componentDidMount() {
		this.getUrunler();
	}
	kategoriDegistir = (kategori) => {
		this.setState({ currentKategori: kategori.name });
		this.getUrunler(kategori.categoryID);
	};
	getUrunler = (categoryID) => {
		let url = 'http://localhost:3002/products';
		if (categoryID) {
			url += '?categoryID=' + categoryID;
		}
		fetch(url)
			.then((response) => response.json())
			.then((data) => this.setState({ products: data }));
	};

	sepeteEkle = (product) => {
		let newCart = this.state.cart;
		var addedItem = newCart.find((c) => c.product.productID === product.productID);
		if (addedItem) {
			addedItem.quantity += 1;
		} else {
			newCart.push({ product: product, quantity: 1 });
		}

		this.setState({ cart: newCart });
		alertify.success(product.name + ' sepete eklendi!!!', 2);
	};

	sepettenSil = (product) => {
		let yeni = this.state.cart.filter((c) => c.product.productID !== product.productID);
		this.setState({ cart: yeni });
		alertify.error(product.name + ' sepetten silindi!!!', 2);
	};

	render() {
		let Kl = { title: 'Kategori Listesi', baskaBisey: 'Bir Şey Sadece' };
		let Ul = { title: 'Ürün Bilgisi' };
		return (
			<div>
				<Container>
					<Navi sepettenSil={this.sepettenSil} cart={this.state.cart}></Navi>

					<Row>
						<Col xs="3">
							<KategoriList
								currentKategori={this.state.currentKategori}
								kategoriDegistir={this.kategoriDegistir}
								info={Kl}
							></KategoriList>
						</Col>
						<Col xs="9">
							<Switch>
								<Route
									exact
									path="/"
									render={(props) => (
										<UrunListesi
											{...props}
											products={this.state.products}
											sepeteEkle={this.sepeteEkle}
											currentKategori={this.state.currentKategori}
											info={Ul}
										></UrunListesi>
									)}
								></Route>
								<Route
									exact
									path="/cart"
									render={(props) => (
										<CartList
											{...props}
											cart={this.state.cart}
											sepettenSil={this.sepettenSil}
										></CartList>
									)}
								></Route>
								<Route component={NotFound}></Route>
							</Switch>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}
