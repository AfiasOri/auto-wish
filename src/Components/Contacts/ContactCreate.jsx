import React from 'react';
import { Create, SimpleForm, TextInput, AutocompleteInput, NumberInput } from 'react-admin';

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
			<NumberInput source='phone' />
			<NumberInput source='month' />
			<NumberInput source='day' />
			{/* <TextInput source='myName' /> */}
			<AutocompleteInput
				source='myName'
				choices={[
					{ id: 'אורי', name: 'אורי' },
					{ id: 'אורן', name: 'אורן' },
				]}
			/>
		</SimpleForm>
	</Create>
);

export default ContactCreate;
