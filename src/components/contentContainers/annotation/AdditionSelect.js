import { PlusOutlined } from '@ant-design/icons';
import { Divider, Input, Select, Space, Button } from 'antd';
import React, { useState, useRef } from 'react';
const { Option } = Select;
let index = 0;


function AdditionSelect(props) {
    const [items, setItems] = useState(['jack', 'lucy']);
    const [name, setName] = useState('Home');
    const inputRef = useRef(null);


    const onNameChange = (event) => {
        setName(event.target.value);
    };


    const addItem = (e) => {
        e.preventDefault();
        setItems([...props.items, name || `New item ${index++}`]);
        setName('');
        setTimeout(() => {
            inputRef.current?.focus();
        }, 0);
    };

    const onSearch = (value) => {

    }

    return (
        <Select
            style={{
                width: 300,
            }}
            value={'FUCK'}
            showSearch
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

export default AdditionSelect;