import { Modal, Form, Input } from 'antd'


function UserModal(props) {
    const [form] = Form.useForm();

    return (
        <Modal
            visible={props.visible}
            title="User Selection"
            okText="Submit"
            cancelText="Cancel"
            onCancel={() => {
                props.onCancel()
            }}
            onOk={() => {
                form
                    .validateFields()
                    .then((values) => {
                        form.resetFields();
                        props.onUserModalSubmit(values);
                     })
                    .catch((info) => {
                        console.log('Validate Failed:', info);
                    });
            }}
        >
            <Form
                form={form}
                layout="vertical"
                name="form_in_modal"
                initialValues={{
                    modifier: 'public',
                }}
            >
                <Form.Item
                    name="username"
                    label="Username"
                    placeholder="Username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input the username!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name='password'
                    label="Password"
                    placeholder="Password"
                    rules={[{
                        required: true,
                        message: 'Please input the password!',
                    }]}
                >
                    <Input />
                </Form.Item>
            </Form>
        </Modal>
    )
}


export default UserModal