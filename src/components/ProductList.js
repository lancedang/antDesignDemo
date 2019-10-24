import {Table, Popconfirm, Button} from 'antd';
import React from 'react';

const ProductList = ({onDelete, onAdd, products}) => {
	const columns = [
		{
			title: 'Name',
			dataIndex: 'name',
		},
		{
			title: 'Actions',
			render: (text, record) => {
				return (
				  //所有数据必须放到一个父标签中
				  <div>
            <Popconfirm title="delete?" onConfirm={() => onDelete(record.id)}>
              <Button>Delete</Button>
            </Popconfirm>

            <Popconfirm title="add?" onConfirm={() => onAdd()}>
              <Button>Add</Button>
            </Popconfirm>
          </div>

				);
			},
		},
	];

	return <Table dataSource={products} columns={columns} />
}

export default ProductList;
