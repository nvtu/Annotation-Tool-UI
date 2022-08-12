import { Row, Col } from 'antd'
import SearchBar from '../components/headerContainer/searchBar'


function HeaderContainer(props) {

    return (
        <>
            <Row
                gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                justify='start' style={props.style} wrap={true}
            >
                <Col flex="auto">
                    <SearchBar
                        style={{
                            width: 350,
                            bottom: 8,
                            left: 50
                        }}
                    />
                </Col>
            </Row>
        </>
    )
}


export default HeaderContainer;