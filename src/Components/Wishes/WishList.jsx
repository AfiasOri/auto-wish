import React from 'react';
import { List, Datagrid as DataGrid, TextField, EditButton, DeleteButton } from 'react-admin';

const WishList = props => (
	<List {...props} bulkActionButtons={false}>
		<DataGrid>
			<TextField source='gender' />
			<TextField source='body' />
			<EditButton basePath='/wishes' />
			<DeleteButton basePath='/wishes' />
		</DataGrid>
	</List>
);

export default WishList;
