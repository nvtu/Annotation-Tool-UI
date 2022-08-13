import { Row, Col, Space } from 'antd'
import FilterBar from '../../components/headerContainer/filterBar';
import SearchBar from '../../components/headerContainer/searchBar'
import UtilitiesContainer from './utilitiesContainer'


function HeaderContainer(props) {

    return (
        <>
            <Row
                gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                justify='start' style={props.style} wrap={true}
            >
                <Col flex="auto">
                    <Space wrap={true} align="baseline" size={300}>
                        <SearchBar
                            style={{
                                width: 320,
                                bottom: 8,
                                left: 0
                            }}
                        />
                        <FilterBar
                            style={{
                                width: 320,
                                bottom: 8,
                                left: -150,
                            }}
                        />
                    </Space>
                </Col>
                <Col flex="380px">
                    <UtilitiesContainer />
                </Col>
            </Row>
        </>
    )
}


export default HeaderContainer;