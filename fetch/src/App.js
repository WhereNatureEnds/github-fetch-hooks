import React, { useState, useEffect } from 'react';
import './App.css';
import { Form, Card, Image, Icon } from 'semantic-ui-react';

function App() {
	const [ name, setName ] = useState('');
	const [ userName, setUsername ] = useState('');
	const [ followers, setFollowers ] = useState('');
	const [ following, setFollowing ] = useState('');
	const [ repos, setRepos ] = useState('');
	const [ avatar, setAvatar ] = useState('');
	const [ userInput, setUserInput ] = useState('');
	const [ error, setError ] = useState('');

	useEffect(() => {
		fetch('https://api.github.com/users/example').then((res) => res.json()).then((data) => {
			console.log(data);
		});
	}, []);

	return (
		<div>
			<div className="navbar">Github Search</div>
			<div className="search">
				<Form>
					<Form.Group>
						<Form.Input placeholder="Search Github User" name="name" />
						<Form.Button contenct="Search" />
					</Form.Group>
				</Form>
			</div>
			<div className="card">
				<Card>
					<Image src="/images/avatar/large/matthew.png" wrapped ui={false} />
					<Card.Content>
						<Card.Header>Matthew</Card.Header>
						<Card.Meta>
							<span className="date">Joined in 2015</span>
						</Card.Meta>
						<Card.Description>Matthew is a musician living in Nashville.</Card.Description>
					</Card.Content>
					<Card.Content extra>
						<a>
							<Icon name="user" />
							22 Friends
						</a>
					</Card.Content>
				</Card>
			</div>
		</div>
	);
}

export default App;
