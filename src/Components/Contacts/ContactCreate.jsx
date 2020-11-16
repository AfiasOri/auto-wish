import React from 'react';
import { Create, SimpleForm, TextInput, AutocompleteInput } from 'react-admin';

const ContactCreate = props => (
	<Create title='Add Contact' {...props}>
		<SimpleForm>
			<AutocompleteInput
				source='gender'
				choices={[
					{ id: 'm', name: 'Male' },
					{ id: 'f', name: 'Female' },
				]}
			/>
			<TextInput source='name' lang='he' />
			<TextInput source='phone' />
			<TextInput source='month' />
			<TextInput source='day' />
			<TextInput source='myName' />
		</SimpleForm>
	</Create>
);

export default ContactCreate;
