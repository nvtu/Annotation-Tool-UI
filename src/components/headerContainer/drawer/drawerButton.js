import { useState } from 'react'
import { Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import DrawerPanel from './drawerPanel';


function DrawerButton(props) {
    const [drawerVisibility, setDrawerVisibility] = useState(false);


    return (
        <div>
            <Button
                type="ghost"
                icon={<MenuOutlined />}
                style={{
                    height: 30,
                    color: "white",
                    border: "none",
                }}
                onClick={() => setDrawerVisibility(true)}
            />
            <DrawerPanel 
                visible={drawerVisibility}
                onClose={() => setDrawerVisibility(false)}
            />
        </div>
    )
}


export default DrawerButton