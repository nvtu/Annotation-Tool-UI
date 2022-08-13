import { Drawer } from 'antd';


function DrawerPanel(props) {
    return (
        <Drawer title="Basic Drawer" placement="right" onClose={props.onClose} visible={props.visible}>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
        </Drawer>
    )
}


export default DrawerPanel;