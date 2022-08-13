import logo from './logo.svg';
import './App.css';
import { Layout } from 'antd'
import HeaderContainer from './containers/header/headerContainer'


const { Header, Content } = Layout;

function App() {
	return (
		<div className="App">
			<Header className="header"
				style={{
					position: "fixed",
					zIndex: 1,
					width: "100%"
				}}
			>
				<HeaderContainer 
					style={{
						position: "fixed",
						zIndex: 1,
						width: "100%"
					}}
				/>
			</Header>
		</div>
	);
}

export default App;
