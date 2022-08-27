import { useState } from 'react'
import { UserSwitchOutlined } from '@ant-design/icons';
import { Button, notification } from 'antd';
import UserModal from './userModal';
import { AUTHENTICATION_API } from '../../../constants/servers';
import { fetchData } from '../../../actions/fetchData';
import { connect } from 'react-redux'
import { setUserInfo } from '../../../actions/actionUser'


function UserSelectionButton(props) {
    const [userModalVisibility, setUserModalVisibility] = useState(false);

    const onCancelUserModalButtonClick = () => {
        setUserModalVisibility(false)
    }

    const onUserModalSubmit = (values) => {
        const { username, password } = values;
        const params = new FormData()
        params.append('username', username)
        params.append('password', password)
        props.dispatch(fetchData(AUTHENTICATION_API, 'POST', params)).then(
            (response) => {
                if (response === undefined) {
                    notification.error({
                        placement: "rightBottom",
                        message: "Username or password incorrect!."
                    })
                    return
                }
                props.dispatch(
                    setUserInfo(
                        username,
                        response.access_token,
                        response.refresh_token
                    )
                )
                notification.success({
                    placement: "rightBottom",
                    message: "Login successfully!"
                })
            }
        )
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


export default connect()(UserSelectionButton)