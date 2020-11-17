import React from 'react';
import { List, Datagrid as DataGrid, TextField, DateField, BooleanField } from 'react-admin';
import { Button } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';

import baseURL from '../../Constants/baseURL';

const LogList = props => {
	const setApproved = async record => {
		await fetch(`${baseURL}/logs/${record.id}`, {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ approved: !record.approved }),
		});
	};

	const AprrovedButton = ({ source, record = {} }) => {
		const approved = {
			icon: record.approved ? <CloseIcon /> : <CheckIcon />,
			text: record.approved ? 'Disapprove' : 'Approve',
			color: record.approved ? 'secondary' : 'primary',
		};
		return (
			<Button color={approved.color} startIcon={approved.icon} onClick={() => setApproved(record)}>
				{approved.text}
			</Button>
		);
	};

	return (
		<List {...props} bulkActionButtons={false}>
			<DataGrid>
				<TextField source='contact.gender' />
				<TextField source='contact.name' />
				<TextField source='contact.phone' />
				<TextField source='contact.month' />
				<TextField source='contact.day' />
				<TextField source='contact.myName' />
				<TextField source='wish.body' />
				<DateField source='date' />
				<BooleanField source='approved' />
				<AprrovedButton />
			</DataGrid>
		</List>
	);
};

export default LogList;
