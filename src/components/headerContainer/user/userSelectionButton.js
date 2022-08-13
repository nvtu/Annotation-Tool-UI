import { useState } from 'react'
import { UserSwitchOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import UserModal from './userModal';


function UserSelectionButton(props) {
    const [userModalVisibility, setUserModalVisibility] = useState(false);

    const onCancelUserModalButtonClick = () => {
        setUserModalVisibility(false)
    }

    const onUserModalSubmit = (values) => {
        onCancelUserModalButtonClick()
    }

    const onUserSelectionButtonClick = () => {
        setUserModalVisibility(true)
    }


    return (
        <div>
            <Button
                type="ghost"
                icon={<UserSwitchOutlined />}
                style={{
                    height: 30,
                    color: "white",
                    border: "none",
                }}
                onClick={onUserSelectionButtonClick}
            />
            <UserModal 
                visible={userModalVisibility}
                onCancel={onCancelUserModalButtonClick}
                onSubmit={onUserModalSubmit}
            />
        </div>
    )
}


export default UserSelectionButton