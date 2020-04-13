import React from 'react';  
import axios from 'axios';  
import '../Student/Addstudent.css' ;

import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';  

class Addstudent extends React.Component{  
    
constructor(props){  
    super(props)  
    this.state = {  
        Name:'',  
        RollNo:'',  
        Class:'',  
        Address:''  
    }  
}   

Addstudent= () => {  
    axios.post('http://localhost:63219/AddotrUpdatestudent/', {Name:this.state.Name,RollNo:this.state.RollNo,  
    Class:this.state.Class, Address:this.state.Address})  
        .then(json => {  
            if(json.data.Status==='Success'){  
                alert("Data Save Successfully");  
                this.props.history.push('/Studentlist')  
            }  
            else{  
                alert('Data not Saved');  
                this.props.history.push('/Studentlist')  
            }  
        })  
    }  
   
handleChange= (e)=> {  
    console.log(e.target.value);
    console.log(e.target.name);
        this.setState({[e.target.name]:e.target.value});  
    }  
   
render() {  
return (  
   <Container className="App">  
    <h4 className="PageHeading">Enter Student Informations</h4>  
    <Form className="form">  
      <Col>  
        <FormGroup row>  
          <Label for="Name" sm={2}>Name</Label>  
          <Col sm={10}>  
            <Input type="text" name="Name" onChange={this.handleChange}  placeholder="Enter Name" />  
          </Col>  
        </FormGroup>  
        <FormGroup row>  
          <Label for="RollNo" sm={2}>RollNo</Label>  
          <Col sm={10}>  
            <Input type="text" name="RollNo" onChange={this.handleChange} placeholder="Enter RollNo" />  
          </Col>  
        </FormGroup>  
        <FormGroup row>  
          <Label for="Class" sm={2}>Class</Label>  
          <Col sm={10}>  
            <Input type="text" name="Class" onChange={this.handleChange}  placeholder="Enter Class" />  
          </Col>  
        </FormGroup>  
        <FormGroup row>  
          <Label for="Address" sm={2}>Address</Label>  
          <Col sm={10}>  
            <Input type="text" name="Address" onChange={this.handleChange} placeholder="Enter Address" />  
          </Col>  
        </FormGroup>  
      </Col>  
      <Col>  
        <FormGroup row>  
          <Col sm={5}>  
          </Col>  
          <Col sm={1}>  
          <button type="button" onClick={this.Addstudent} className="btn btn-success">Submit</button>  
          </Col>  
          <Col sm={1}>  
            <Button color="danger">Cancel</Button>{' '}  
          </Col>  
          <Col sm={5}>  
          </Col>  
        </FormGroup>  
      </Col>  
    </Form>  
  </Container>  
);  
}  
   
}  
   
export default Addstudent; 