import logo from './logo.svg';
import './App.css';
import {Row, Col, InputNumber, Form, Button} from  "antd";
import {useState} from "react";

function App() {
  const [myMap, setMyMap] = useState(0);
  const  sendMap = (myMap1) => {
    console.log(myMap1)
  }
  return (
    <div className="App">
      <Form onFinish={sendMap}>
        <Row>
          <Col span={8} ><div style={{ width:"100%", height:"200px", border:"1px solid black" }}><Form.Item ><InputNumber name="1"/></Form.Item></div></Col>
          <Col span={8} ><div style={{ width:"100%", height:"200px", border:"1px solid black" }}><Form.Item ><InputNumber name="2"/></Form.Item></div></Col>
          <Col span={8} ><div style={{ width:"100%", height:"200px", border:"1px solid black" }}><Form.Item ><InputNumber name="3"/></Form.Item></div></Col>
          <Col span={8} ><div style={{ width:"100%", height:"200px", border:"1px solid black" }}><Form.Item ><InputNumber name="4"/></Form.Item></div></Col>
          <Col span={8} ><div style={{ width:"100%", height:"200px", border:"1px solid black" }}><Form.Item ><InputNumber name="5"/></Form.Item></div></Col>
          <Col span={8} ><div style={{ width:"100%", height:"200px", border:"1px solid black" }}><Form.Item ><InputNumber name="6"/></Form.Item></div></Col>
          <Col span={8} ><div style={{ width:"100%", height:"200px", border:"1px solid black" }}><Form.Item ><InputNumber name="7"/></Form.Item></div></Col>
          <Col span={8} ><div style={{ width:"100%", height:"200px", border:"1px solid black" }}><Form.Item ><InputNumber name="8"/></Form.Item></div></Col>
          <Col span={8} ><div style={{ width:"100%", height:"200px", border:"1px solid black" }}><Form.Item ><InputNumber name="9"/></Form.Item></div></Col>
        </Row>
        <Button htmlType="submit">submit</Button>
      </Form>

    </div>
  );
}

export default App;
