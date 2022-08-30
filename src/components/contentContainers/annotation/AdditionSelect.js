import { PlusOutlined } from '@ant-design/icons';
import { Divider, Input, Select, Space, Button, notification } from 'antd';
import React, { useState, useRef } from 'react';
import { connect } from 'react-redux'
import { INSERT_TO_ANNOTATION_LIST_API, UPDATE_MOMENT_DETAIL_API } from '../../../constants/servers';
import { updateNewAnnotationList } from '../../../actions/annotation/actionAnnotationListData';
import { fetchData } from '../../../actions/fetchData';
import { setAnnotationFieldData } from '../../../actions/annotation/actionAnnotation';

const { Option } = Select;


function AdditionSelect(props) {
    const [name, setName] = useState('');
    const inputRef = useRef(null);


    const onNameChange = (event) => {
        setName(event.target.value);
    };


    const addItem = (e) => {
        e.preventDefault();

        // Update annotation list to the server
        const params = {
            accessToken: props.user.accessToken,
            list_type: props.type,
            value: name
        }

        props.dispatch(fetchData(INSERT_TO_ANNOTATION_LIST_API, 'POST', params)).then(response => {
            if (response === undefined) {
                notification.error({
                    placement: 'bottomRight',
                    message: 'Error occurred when adding new item',
                })
                return
            }
            props.dispatch(updateNewAnnotationList(props.type, response.data_list))
        })

        setName('');
        setTimeout(() => {
            inputRef.current?.focus();
        }, 0);
    };

    const onSearch = (value) => {

    }

    const onSelect = (value) => {
        // Update the annotation field locally on UI
        props.dispatch(setAnnotationFieldData(props.type, value))
        // Update annotation field of the moment to the server
        const params = {
            accessToken: props.user.accessToken,
            id: {
                moment_date: props.metadata.date,
                moment_time: props.metadata.localTime,
            },
            data_type: props.type,
            value: value
        }

        props.dispatch(fetchData(UPDATE_MOMENT_DETAIL_API, 'POST', params)).then(response => {
            if (response === undefined) {
                notification.error({
                    placement: 'bottomRight',
                    message: 'Please choose the date to annotate!!!',
                })
                return
            }
        })
    }


    return (
        <Select
            style={{
                width: 300,
            }}
            value={props.value}
            showSearch
            onSelect={onSelect}
            onSearch={onSearch}
            placeholder={props.placeholder}
            dropdownRender={(menu) => (
                <>
                    {menu}
                    <Divider
                        style={{
                            margin: '8px 0',
                        }}
                    />
                    <Space
                        style={{
                            padding: '0 8px 4px',
                        }}
                    >
                        <Input
                            placeholder="Please enter item"
                            ref={inputRef}
                            value={name}
                            onChange={onNameChange}
                        />
                        <Button type="text" icon={<PlusOutlined />} onClick={addItem}>
                            Add item
                        </Button>
                    </Space>
                </>
            )}
        >
            {props.items.map((item) => (
                <Option key={item}>{item}</Option>
            ))}
        </Select>
    )
}


const mapStatesToProps = (state) => ({
    user: state.user,
    metadata: state.annotationMetadata,
})

export default connect(mapStatesToProps)(AdditionSelect);