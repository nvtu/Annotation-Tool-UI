import logo from './logo.svg';
import './App.css';
import { Layout } from 'antd'
import HeaderContainer from './containers/header/headerContainer'
import AnnotationContainer from './containers/annotation/annotationContainer';


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

			<Content>
				<AnnotationContainer />
			</Content>

		</div>
	);
}

export default App;
