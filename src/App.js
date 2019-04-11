import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.handlePageChange = this.handlePageChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
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

  handlePageChange(e) {
    const form = e.target.id;

    if (this.state.currentPage === 'App') {
      this.setState({ currentPage: 'Form1' });
    } else if (form === 'Form1') {
      this.setState({ currentPage: 'Form2' });
    } else if (form === 'Form2') {
      this.setState({ currentPage: 'Form3' });
    } else {
      this.setState({ currentPage: 'Summary' });
    }
    console.log(`${this.state.currentPage} is current page`)
  }

  handleSubmit(e) {
    this.setState({ currentPage: 'Form2' });
    alert(`form ${this.state.currentPage} was submitted`);
  }


  render() {

    const currentPageState = this.state.currentPage;
    let page;
    if (currentPageState === 'Form1') {
      page = <Form1 handlePageChange={this.handlePageChange} />
    } else if (currentPageState === 'Form2') {
      page = <Form2 handlePageChange={this.handlePageChange} />
    } else if (currentPageState === 'Form3') {
      page = <Form3 handlePageChange={this.handlePageChange} />
    } else if (currentPageState === 'App') {
      page = <input type="submit" value="Checkout" name="App" onClick={this.handlePageChange} />
    } else {
      page = <Summary handlePageChange={this.handlePageChange} />
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
      <form id="Form1" onSubmit={props.handlePageChange} >
        <label>
          Name:
        <input type="text" name="name" />
        </label>
        <label>
          Email:
        <input type="text" name="name" />
        </label>
        <label>
          Password:
        <input type="text" name="name" />
        </label>
        <input type="submit" value="Next" name="Form1" />
      </form>
    </div>
  );
}

function Form2(props) {
  return (
    <div>
      <form id="Form2" onSubmit={props.handlePageChange}>
        <label>
          Address Line1:
        <input type="text" addresslineone="name" />
        </label>
        <label>
          Address Line2:
        <input type="text" addresslinetwo="name" />
        </label>
        <label>
          City:
        <input type="text" city="name" />
        </label>
        <label>
          State:
        <input type="text" state="name" />
        </label>
        <label>
          Zip Code:
        <input type="text" zip_code="name" />
        </label>
        <input type="submit" value="Next" name="Form2" />
      </form>
    </div>
  );
}

function Form3(props) {
  return (
    <div>
      <form id="Form3" onSubmit={props.handlePageChange}>
        <label>
          Card number:
        <input type="text" creditcard_number="name" />
        </label>
        <label>
          Expiry date:
        <input type="text" expirationdate="name" />
        </label>
        <label>
          Security code:
        <input type="text" cvv="name" />
        </label>
        <label>
          ZIP/Postal code:
        <input type="text" zip_code="name" />
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