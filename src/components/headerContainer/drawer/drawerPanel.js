import { Drawer } from 'antd';
import { connect } from 'react-redux'
import { Row, Button, Space, Divider, Menu, Layout } from 'antd';
import { useState } from 'react'
import { EditOutlined, HomeOutlined, SearchOutlined, UploadOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom'


const { Sider } = Layout;


function DrawerPanel(props) {

    const [isToggled, setToggled] = useState(false);
    const navigate = useNavigate();


    const onMenuItemClick = (e) => {
        const path = e.key
        navigate(path);
        props.onClose()
    }

    return (
        <Drawer title={`Welcome user: ${props.user.username}`}
            placement="right"
            onClose={props.onClose}
            visible={props.visible}
            width = {300}
            push = {{distance: 50}}
            bodyStyle={{
                padding: 0,
                paddingTop: 20
            }}
        >
            <Sider
                breakpoint='lg'
                width={300}
                collapsedWidth={0}
            >

                <Menu
                    items={[
                        { key: '/', icon: <HomeOutlined />, label: 'Home' },
                        { key: '/search', icon: <SearchOutlined />, label: 'Search' },
                        { key: '/upload', icon: <UploadOutlined />, label: 'Upload' },
                        { key: '/annotate', icon: <EditOutlined />, label: 'Annotate' },
                    ]}
                    onClick = {onMenuItemClick}
                >
                </Menu>
            </Sider>

        </Drawer>
    )
}


const mapStatesToProps = (states) => ({
    user: states.user,
})

export default connect(mapStatesToProps)(DrawerPanel);