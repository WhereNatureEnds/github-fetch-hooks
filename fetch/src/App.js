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
			getData(data);
		});
	}, []);

	const getData = ({ name, login, followers, following, public_repos, avatar }) => {
		setName(name);
		setUsername(login);
		setFollowers(followers);
		setFollowing(following);
		setRepos(public_repos);
		setAvatar(avatar_url);
	};

	const handleSearch = (e) => {
		setUserInput(e.target.value);
	};

	const handleSubmit = () => {
		fetch(`https://api.github.com/users/${userInput}`).then((res) => res.json()).then((data) => {
			if (data.message) {
				setError(data.message);
			} else {
				getData(data);
			}
		});
	};

	return (
		<div>
			<div className="navbar">Github Search</div>
			<div className="search">
				<Form onSubmit={handleSubmit}>
					<Form.Group>
						<Form.Input placeholder="Search Github User" name="name" onChange={handleSearch()} />
						<Form.Button contenct="Search" />
					</Form.Group>
				</Form>
			</div>
			<div className="card">
				<Card>
					<Image src={avatar} wrapped ui={false} />
					<Card.Content>
						<Card.Header>{name}</Card.Header>
						<Card.Header>{userName}</Card.Header>
					</Card.Content>
					<Card.Content extra>
						<a>
							<Icon name="user" />
							{followers} Followers
						</a>
					</Card.Content>
					<Card.Content extra>
						<a>
							<Icon name="user" />
							{repos} Repos
						</a>
					</Card.Content>
					<Card.Content extra>
						<a>
							<Icon name="user" />
							{following} Following
						</a>
					</Card.Content>
				</Card>
			</div>
		</div>
	);
}

export default App;
