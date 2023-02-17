import logo from './logo.svg';
import './App.css';
import {Row, Col, InputNumber, Form, Button} from  "antd";
import {useState} from "react";
import { solver } from './solver';

function App() {
  const [values, setValues] = useState([]);
   const onFinish = (values: any) => {
    const newArray = Object.values(values);
    setValues(newArray)

  };
  console.log(values)
  solver()
  return (
    <div className="App">
      <Form onFinish={onFinish}>
        <Row>
          <Col span={8} ><div style={{ width:"100%", height:"200px", border:"1px solid black" }}><Form.Item name="1"><InputNumber /></Form.Item></div></Col>
          <Col span={8} ><div style={{ width:"100%", height:"200px", border:"1px solid black" }}><Form.Item name="2"><InputNumber /></Form.Item></div></Col>
          <Col span={8} ><div style={{ width:"100%", height:"200px", border:"1px solid black" }}><Form.Item name="3"><InputNumber /></Form.Item></div></Col>
          <Col span={8} ><div style={{ width:"100%", height:"200px", border:"1px solid black" }}><Form.Item name="4"><InputNumber /></Form.Item></div></Col>
          <Col span={8} ><div style={{ width:"100%", height:"200px", border:"1px solid black" }}><Form.Item name="5"><InputNumber /></Form.Item></div></Col>
          <Col span={8} ><div style={{ width:"100%", height:"200px", border:"1px solid black" }}><Form.Item name="6"><InputNumber /></Form.Item></div></Col>
          <Col span={8} ><div style={{ width:"100%", height:"200px", border:"1px solid black" }}><Form.Item name="7"><InputNumber /></Form.Item></div></Col>
          <Col span={8} ><div style={{ width:"100%", height:"200px", border:"1px solid black" }}><Form.Item name="8"><InputNumber /></Form.Item></div></Col>
          <Col span={8} ><div style={{ width:"100%", height:"200px", border:"1px solid black" }}><Form.Item name="9"><InputNumber /></Form.Item></div></Col>
        </Row>
        <Button htmlType="submit">submit</Button>
      </Form>

    </div>
  );
}

export default App;
