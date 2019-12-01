import React, { useState, useEffect } from 'react';
import './App.css';
import { Form } from 'semantic-ui-react';

function App() {
	const [ name, setName ] = useState('');
	const [ userName, setUsername ] = useState('');
	const [ followers, setFollowers ] = useState('');
	const [ following, setFollowing ] = useState('');
	const [ repos, setRepos ] = useState('');
	const [ avatar, setAvatar ] = useState('');
	const [ userInput, setUserInput ] = useState('');
	const [ error, setError ] = useState('');

	return (
		<div>
			<div className="navbar">Github Search</div>
			<div className="search">
				<Form>
					<Form.Group>
						<Form.Input placeholder="Search Github User" name="name" />
						<Form.Button contenct="Submit" />
					</Form.Group>
				</Form>
			</div>
		</div>
	);
}

export default App;
