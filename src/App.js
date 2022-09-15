import './App.css';
import CounterView from './features/counter/CounterView';
import PostView from './features/posts/PostView';

function App() {
	return (
		<div className='App'>
			<h1>Learn redux toolkit</h1>
			<CounterView></CounterView>
			<PostView></PostView>
		</div>
	);
}

export default App;
