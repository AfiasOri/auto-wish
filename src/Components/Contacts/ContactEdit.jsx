import React from 'react';
import { Edit, SimpleForm, TextInput, AutocompleteInput } from 'react-admin';

const ContactEdit = props => (
	<Edit title='Edit Contact' {...props}>
		<SimpleForm>
			<TextInput disabled source='id' />
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
	</Edit>
);

export default ContactEdit;
