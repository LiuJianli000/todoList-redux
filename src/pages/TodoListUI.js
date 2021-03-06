import React from 'react';
import { Input, Button, List } from 'antd';

const TodoListUI = props => {
  const { 
    inputValue, 
    list,
    handleValueChange,
    handleAdd,
    handleDele 
  } = props

  return ( 
    <div style={{ margin: 10 }}>
      <div>
        <Input
          placeholder='Write something...'
          style={{ width: 300, marginRight: 10 }}
          onChange={handleValueChange}
          onPressEnter={handleAdd}
          allowClear
          value={inputValue}  // 如果没有 subscribe，input 输入无效
        />
        <Button 
          type="primary"
          onClick={handleAdd}
        >
          Add
        </Button>
      </div>
      <div style={{ marginTop: 10, width: 300 }}>
        <List
          bordered
          dataSource={list}
          renderItem={(item, index) => 
            <List.Item 
              onClick={() => handleDele(index)}
            >
              {item}
            </List.Item>
          }
        />
      </div>
    </div>
  );
}

export default TodoListUI;