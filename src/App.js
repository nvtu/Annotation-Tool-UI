import logo from './logo.svg';
import './App.css';
import { Layout } from 'antd'
import HeaderContainer from './containers/header/headerContainer'
import AnnotationContainer from './containers/annotation/annotationContainer';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link
} from 'react-router-dom'
import HomeContainer from './containers/homeContainer';


const { Header, Content } = Layout;

function App() {

	return (
		<Router>
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

				<Content
					style={{
						paddingTop: 64,
					}}
				>
					<Routes>
						<Route exact path='/' element={<HomeContainer />} />
						<Route exact path='/annotation' element={<AnnotationContainer />} />
					</Routes>

				</Content>

			</div>
		</Router>
	);
}

export default App;
