import React, { Component } from 'react';
import './App.css';
import { AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch, withAxios } from 'react-axios'
import Axios from 'axios';
class App extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.id = '';

    this.state = {
      id: null,
      name: null,
      email: null,
      password: null,
      addresslineone: null,
      addresslinetwo: null,
      city: null,
      state: null,
      zip_code: null,
      creditcard_number: null,
      expirationdate: null,
      cvv: null,
      billing_zipcode: null,
      currentPage: 'App'
    }
  }

  handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({ [name]: value });
  }

  // getId(id) {
  //   this.id = id;
  // }
  componentDidMount(e, form) {
    // You should populate data with AJAX calls in the componentDidMount lifecycle method.
    // This is so you can use setState to update your component when the data is retrieved.
    if (form === 'checkout') {
      Axios({
        method: 'post',
        url: 'http://localhost:3000/create',
      }).then(results => {
        this.setState({ id: results.data._id });
      });
    } else {

    }
  };

  submit(form) {
    const { name, email, password, id } = this.state;
    if (form === 'Form1') {
      Axios({
        method: 'post',
        url: 'http://localhost:3000/form1',
        data: { id, name, email, password }
      }).then(results => {
        console.log(results, `FIRST POST OF FORM`)
      })
    }
  }

  handleSubmit(e) {
    const form = e.target.id;
    const checkout = e.target.value

    if (form === 'checkout') {
      // call the database to create a new record
      this.setState({ currentPage: 'Form1' });
      this.componentDidMount(e, form);

    } else if (form === 'Form1') {
      // call to the database to store form1's information
      this.setState({ currentPage: 'Form2' });
      this.submit(form);
    } else if (form === 'Form2') {
      this.setState({ currentPage: 'Form3' });
    } else {
      this.setState({ currentPage: 'Summary' });
    }
  }



  render() {

    const currentPageState = this.state.currentPage;
    let page;
    if (currentPageState === 'Form1') {
      page = <Form1 handleChange={this.handleChange} handleSubmit={this.handleSubmit} id={this.state.id} />
    } else if (currentPageState === 'Form2') {
      page = <Form2 handleChange={this.handleChange} handleSubmit={this.handleSubmit} id={this.props.id} />
    } else if (currentPageState === 'Form3') {
      page = <Form3 handleChange={this.handleChange} handleSubmit={this.handleSubmit} id={this.props.id} />
    } else if (currentPageState === 'App') {
      page =
        <form id='checkout' onSubmit={this.handleSubmit}>
          <input type="submit" value="Checkout" name="checkout" />
        </form>
    } else {
      page = <Summary handleSubmit={this.handleSubmit} id={this.id} />
    }

    return (
      <div>
        {page}
      </div>
    );
  }
}


function Form1(props) {
  console.log(props, `BEFORE RETURN`)
  return (
    <div>
      <form id="Form1" onSubmit={props.handleSubmit} >
        <label>
          Name:
        <input type="text" name="name" onChange={props.handleChange} />
        </label>
        <label>
          Email:
        <input type="text" name="email" onChange={props.handleChange} />
        </label>
        <label>
          Password:
        <input type="text" name="password" onChange={props.handleChange} />
        </label>
        <input type="submit" value="Next" name="Form1" />
      </form>
    </div>
  );
}

function Form2(props) {
  return (
    <div>
      <form id="Form2" onSubmit={props.handleSubmit}>
        <label>
          Address Line1:
        <input type="text" name="addresslineone" onChange={props.handleChange} />
        </label>
        <label>
          Address Line2:
        <input type="text" name="addresslinetwo" onChange={props.handleChange} />
        </label>
        <label>
          City:
        <input type="text" name="city" onChange={props.handleChange} />
        </label>
        <label>
          State:
        <input type="text" name="state" onChange={props.handleChange} />
        </label>
        <label>
          Zip Code:
        <input type="text" name="zip_code" onChange={props.handleChange} />
        </label>
        <input type="submit" value="Next" name="Form2" />
      </form>
    </div>
  );
}

function Form3(props) {
  return (
    <div>
      <form id="Form3" onSubmit={props.handleSubmit}>
        <label>
          Card number:
        <input type="text" name="creditcard_number" onChange={props.handleChange} />
        </label>
        <label>
          Expiry date:
        <input type="text" name="expirationdate" onChange={props.handleChange} />
        </label>
        <label>
          Security code:
        <input type="text" name="cvv" onChange={props.handleChange} />
        </label>
        <label>
          ZIP/Postal code:
        <input type="text" name="billing_zipcode" onChange={props.handleChange} />
        </label>
        <input type="submit" value="Next" name="Form3" />
      </form>
    </div>
  );
}

function Summary(props) {
  return (
    <div>
      <h1>This is the end of the checkout</h1>
      <button>Complete Order</button>
    </div>
  )
}

export default App;