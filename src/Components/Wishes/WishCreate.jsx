import React from 'react';
import { Create, SimpleForm, TextInput, AutocompleteInput } from 'react-admin';

const WishCreate = props => (
	<Create title='Add a Wish' {...props}>
		<SimpleForm>
			<AutocompleteInput
				source='gender'
				choices={[
					{ id: 'm', name: 'Male' },
					{ id: 'f', name: 'Female' },
				]}
			/>
			<TextInput multiline source='body' />
		</SimpleForm>
	</Create>
);

export default WishCreate;
