import React, { Component } from "react";
import Contact from "./Contact";
import { Consumer } from '../../context';

class Contacts extends Component {
//   constructor() {
//     super();
//     this.state = {
//       contacts: [
//         {
//           id: 1,
//           name: "John Doe",
//           email: "jdoe@gamil.com",
//           phone: "555-555-5555"
//         },
//         {
//           id: 2,
//           name: "Danish",
//           email: "danish@gamil.com",
//           phone: "555-555-5555"
//         },
//         {
//           id: 3,
//           name: "Hani",
//           email: "hani@gamil.com",
//           phone: "555-555-5555"
//         }
//       ]
//     };
//   };

//   deleteContact = (id) => {
//     //console.log(id);

//     const { contacts } = this.state;

//     const newContacts = contacts.filter(contact => contact.id !== id);
//     this.setState({
//         contacts: newContacts          
//     })
//   }

  render() {

    return (
        <Consumer>
            {value => {
                const { contacts } = value;

                return (
                  <React.Fragment>
                    <h1 className="display-4 mb-2">
                        <span className="text-danger">Contact</span>
                         List
                    </h1>
                    {contacts.map(contact => 
                    //   <Contact key={contact.id} name={contact.name} email={contact.email} phone={contact.phone} />
                    <Contact key={contact.id} contact={contact} />
                    )}
                  </React.Fragment>
                );
            }}
        </Consumer>
    )

    // const { contacts } = this.state;

    // return (
    //   <React.Fragment>
    //     {contacts.map(contact => 
    //     //   <Contact key={contact.id} name={contact.name} email={contact.email} phone={contact.phone} />
    //     <Contact key={contact.id} contact={contact} deleteClickHandler={this.deleteContact.bind(this, contact.id)} />
    //     )}
    //   </React.Fragment>
    // );
  }
}

export default Contacts;
