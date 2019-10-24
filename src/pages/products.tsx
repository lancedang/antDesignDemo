import { connect } from 'dva';
import ProductList from '../components/ProductList';
import React from 'react';

//连接modle和Component
const Products = ({ dispatch, products}) => {

  //action，被调用时走向modle中的reducers
	function handleDelete(id) {
		dispatch({
			type: 'products/delete',
			payLoad111: id,
		})
	}

	function add() {
	  const element = {'name': 'wangwu', id: 3};
    dispatch({
      type: 'products/add',
      payLoad: element,
    })
  }

	return (
		<div>
			<h2>List</h2>
			<ProductList onDelete={handleDelete} onAdd={add} products={products} />
		</div>
	);
};

//
export default connect(( { products }) => ({ products }))(Products);
