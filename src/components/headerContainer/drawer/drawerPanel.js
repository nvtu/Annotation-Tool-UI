import { Drawer } from 'antd';
import { connect } from 'react-redux'


function DrawerPanel(props) {
    return (
        <Drawer title={`Welcome user: ${props.user.username}`}
            placement="right"
            onClose={props.onClose}
            visible={props.visible}
        >
            
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
        </Drawer>
    )
}


const mapStatesToProps = (states) => ({
    user: states.user,
})

export default connect(mapStatesToProps)(DrawerPanel);