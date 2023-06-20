import { Component } from "react";
import { nanoid } from "nanoid";
import './phoneStyles.css'


export default class ContactForm extends Component {
    
    handleSubmit = evt => {
      evt.preventDefault();
      const id = nanoid();
      const form = evt.currentTarget;
    //   const id=idContact;
      const name = form.elements.name.value;
      const number = form.elements.number.value;
    //   console.log(name, number);
      this.props.onSubmit({ id, name, number });
      form.reset();
    };
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
            <p>Name:</p>
            <input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
            />
          {/* <input type="text" name="login" /> */}
          <p>Phone</p>
          <input
                type="tel"
                name="number"
                 pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
            />
          {/* <input type="password" name="password" /> */}
          <button type="submit">Add Contact</button>
        </form>
      );
    }
  }


//   ReactDOM.render(
    
//     document.getElementById("root")
//   );



    //   export default function ContactForm() { //{state}
        
    //     return (
    //         <>
    //         {/* <form onSubmit={}>

    //         </form> */}
    //         <p>Name: </p>
    //         <input
    //             type="text"
    //             name="name"
    //             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
    //             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    //             required
    //         />
    //         <p>Phone</p>
    //         <input
    //             type="tel"
    //             name="number"
    //             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
    //             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
    //             required
    //         />
    //         <Button></Button>
    //         </>
    //      );
    //     }


    //     const Button = ({ changeMessage, label }) => (
    //         <button type="button" onClick={changeMessage}>
    //           {label}
    //         </button>
    //       );
          
        //   class Appso extends Component {
        //     state = {
        //       message: new Date().toLocaleTimeString(),
        //     };
          
        //     // Método que se pasa a Button para ser llamado al hacer clic.
        //     updateMessage = evt => {
        //       console.log(evt); // Objeto del evento disponible
        //       this.setState({
        //         message: new Date().toLocaleTimeString(),
        //       });
        //     };
          
        //     render() {
        //       return (
        //         <>
        //           <span>{this.state.message}</span>
        //           <Button label="Change message" changeMessage={this.updateMessage} />
        //         </>
        //       );
        //     }
        //   }