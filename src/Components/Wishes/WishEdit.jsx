import React from 'react';
import { Edit, SimpleForm, TextInput, AutocompleteInput } from 'react-admin';

const WishEdit = props => (
	<Edit title='Edit a Wish' {...props}>
		<SimpleForm>
			<TextInput disabled source='id' />
			<AutocompleteInput
				source='gender'
				choices={[
					{ id: 'm', name: 'Male' },
					{ id: 'f', name: 'Female' },
				]}
			/>
			<TextInput multiline required source='body' />
		</SimpleForm>
	</Edit>
);

export default WishEdit;
