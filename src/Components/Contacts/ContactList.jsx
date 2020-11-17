import React from 'react';
import { List, Datagrid as DataGrid, TextField, EditButton, DeleteButton } from 'react-admin';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';

import baseURL from '../../Constants/baseURL';

const send = async contact => {
	const wishes = await fetch(`${baseURL}/wishes`);
	const parsedWishes = await wishes.json();
	const genderRelatedWishes = parsedWishes.filter(wish => wish.gender === contact.gender);
	const randomWish = genderRelatedWishes[Math.floor(Math.random() * genderRelatedWishes.length)];
	const res = await fetch(`${baseURL}/contacts/send/${contact.id}/${randomWish.id}`, { method: 'POST' });
	if (res.status === 200) {
		const parsedLog = await res.json();
		await fetch(`${baseURL}/logs`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ ...parsedLog, date: new Date(Date.now()) }),
		});
	}
};
const SendButton = ({ source, record = {} }) => (
	<Button startIcon={<SendIcon />} onClick={() => send(record)}>
		SEND
	</Button>
);

const ContactList = props => {
	return (
		<List {...props} bulkActionButtons={false}>
			<DataGrid>
				<TextField source='gender' />
				<TextField source='name' lang='he' />
				<TextField source='phone' />
				<TextField source='month' />
				<TextField source='day' />
				<TextField source='myName' />
				<EditButton basePath='/contacts' />
				<DeleteButton basePath='/contacts' />
				<SendButton />
			</DataGrid>
		</List>
	);
};

export default ContactList;
