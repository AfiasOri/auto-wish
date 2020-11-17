import React from 'react';
import { Admin, Resource } from 'react-admin';
import restProvider from 'ra-data-simple-rest';

import { createMuiTheme } from '@material-ui/core/styles';
import themeObj from './Constants/theme';

import { WishList, WishCreate, WishEdit, WishIcon } from './Components/Wishes';
import { ContactList, ContactCreate, ContactEdit, ContactIcon } from './Components/Contacts';
import { LogList, ListIcon } from './Components/Logs';

import baseURL from './Constants/baseURL';

const theme = createMuiTheme(themeObj);

function App() {
	return (
		<Admin theme={theme} dataProvider={restProvider(baseURL)}>
			<Resource name='wishes' list={WishList} create={WishCreate} edit={WishEdit} icon={WishIcon} />
			<Resource name='contacts' list={ContactList} create={ContactCreate} edit={ContactEdit} icon={ContactIcon} />
			<Resource name='logs' list={LogList} icon={ListIcon} />
		</Admin>
	);
}

export default App;
