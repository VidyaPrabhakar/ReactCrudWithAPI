import React, { Component } from 'react';  
import axios from 'axios';  
import Table from './Table';  
  
export default class Studentlist extends Component {  
  
  constructor(props) {  
      super(props);  
      this.state = {data: []};  
    }  
    componentDidMount(){  
    //   axios.get('http://localhost:63219/Api/Student/Studentdetails')  
        axios.get('http://localhost:63219/Studentdetails')  
      
        .then(response => {  
          this.setState({ data: response.data });  
        })  
        .catch(function (error) {  
          console.log(error);  
        })  
    }  
      
    tabRow(){  
      return this.state.data.map(function(object, i){  
          return <Table obj={object} key={i} />;  
      });  
    }  
  
    render() {  
      return (  
        <div>  
          <h4 align="center">Student List</h4>  
          <table className="table table-striped" style={{ marginTop: 10 }}>  
            <thead>  
              <tr>  
                <th>Name</th>  
                <th>RollNo</th>  
                <th>Class</th>  
                <th>Address</th>  
                <th colSpan="4">Action</th>  
              </tr>  
            </thead>  
            <tbody>  
             { this.tabRow() }   
            </tbody>  
          </table>  
        </div>  
      );  
    }  
  }  