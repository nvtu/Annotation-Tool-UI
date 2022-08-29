import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react'
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
import UploadPageContainer from './containers/upload/uploadPageContainer';
import { connect } from 'react-redux'
import { setUserInfo } from './actions/actionUser';


const { Header, Content } = Layout;

function App(props) {

	useEffect(() => {
		if (props.user.username == '' && 'username' in localStorage) {
			// Watch for session id in local storage in case the page is refreshed
			props.dispatch(
				setUserInfo(
					localStorage.username,
					localStorage.accessToken,
					localStorage.refreshToken
				)
			)
		}
	})


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
						<Route exact path='/upload' element={<UploadPageContainer />} />
					</Routes>

				</Content>

			</div>
		</Router>
	);
}

const mapStatesToProps = (state) => ({
	user: state.user
})

export default connect(mapStatesToProps)(App);
