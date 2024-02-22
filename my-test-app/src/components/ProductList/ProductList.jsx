import React, { useState, useEffect } from 'react';
import axios from 'axios';



const API_URL = 'http://api.valantis.store:40000';

const ProductList = () => {
	const [products, setProducts] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [totalPages, setTotalPages] = useState(1);

	const fetchData = async (page = 1) => {
		try {
			const response = await axios.get(`${API_URL}products`, {
				params: { page },
				headers: { Authorization: 'Valantis' },
			});

			setProducts(response.data.products);
			setTotalPages(response.data.totalPages);
		} catch (error) {
			console.error('Error fetching data:', error.message);
		}
	};

	useEffect(() => {
		fetchData(currentPage);
	}, [currentPage]);

	const handlePageChange = (page) => {
		setCurrentPage(page);
	};

	return (
		<div>
			<h1>Product List</h1>
			<table>
				<thead>
					<tr>
						<th>ID</th>
						<th>Name</th>
						<th>Price</th>
						<th>Brand</th>
					</tr>
				</thead>
				<tbody>
					{products.map((product) => (
						<tr key={product.id}>
							<td>{product.id}</td>
							<td>{product.name}</td>
							<td>{product.price}</td>
							<td>{product.brand}</td>
						</tr>
					))}
				</tbody>
			</table>

			<div>
				{Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
					<button key={page} onClick={() => handlePageChange(page)}>
						{page}
					</button>
				))}
			</div>
		</div>
	);
};

export default ProductList;
