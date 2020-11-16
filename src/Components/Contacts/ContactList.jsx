import React from 'react';
import { List, Datagrid as DataGrid, TextField, EditButton, DeleteButton } from 'react-admin';

const ContactList = props => (
	<List {...props}>
		<DataGrid>
			<TextField source='id' />
			<TextField source='gender' />
			<TextField source='name' />
			<TextField source='phone' />
			<TextField source='month' />
			<TextField source='day' />
			<TextField source='myName' />
			<EditButton basePath='/contacts' />
			<DeleteButton basePath='/contacts' />
		</DataGrid>
	</List>
);

export default ContactList;
