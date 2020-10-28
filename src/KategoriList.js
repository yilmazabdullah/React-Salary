import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

class KategoriList extends Component {
	state = {
		categories: [],
	};
	componentDidMount() {
		this.getKategori();
	}

	getKategori = () => {
		fetch('http://localhost:3002/categories')
			.then((response) => response.json())
			.then((data) => this.setState({ categories: data }));
	};

	render() {
		return (
			<div>
				<h3>{this.props.info.title}</h3>
				<ListGroup>
					{this.state.categories.map((kategori) => (
						<ListGroupItem
							active={kategori.name === this.props.currentKategori ? true : false}
							onClick={() => this.props.kategoriDegistir(kategori)}
							key={kategori.categoryID}
						>
							{kategori.name}
						</ListGroupItem>
					))}
				</ListGroup>
				{/* <h4>{this.props.currentKategori}</h4> */}
			</div>
		);
	}
}

export default KategoriList;
