import {Component} from 'react'
import './finder.css'
import { Notify } from "notiflix/build/notiflix-notify-aio";
import PropTypes from "prop-types";

// export class FormBar extends Component{
//   state = {
//     query: "",
//   };

//   handleInputChange = (e) => {
//     this.setState({ query: e.currentTarget.value });
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();
//     if (this.state.query.trim() === "") {
//       Notify.failure("Sorry, enter something in search line.");
//       return;
//     }

//     // this.props.onSubmit(this.state.query);
    
//     this.setState({ query: "" });
//     console.log(this.state.query)
//   };

//   render(){
//     return(
//       <form className="search-form" onSubmit={this.handleSubmit}>
//       <input type="text" name="searchQuery" autocomplete="off"
//         onChange={this.handleInputChange}
//         autoFocus
//         value={this.state.query}
//         placeholder="Search images..."
//         className="input-form"
//       />
//       <button type="submit">&#x1F36D;</button>
//     </form> 
//   )
//   }
    
// }
// const FinderBar = () => {
//   return (
//     // <div>
//         <header>
//             <FormBar></FormBar>
//         </header>
//     // </div>
//   )
// }

// export default FinderBar

// }}}}}}}}}}}}}}}}

export default class FinderBar extends Component {
  state = {
    query: '',
  };

  handleInputChange = e => {
    this.setState({ query: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.query.trim() === '') {
      Notify.failure('Sorry, enter something in search line.');
      return;
    }

    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };

  render() {
    return (
      <header>
        <form className="search-form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="searchQuery"
            autocomplete="off"
            onChange={this.handleInputChange}
            autoFocus
            value={this.state.query}
            placeholder="Search images..."
            className="input-form"
          />
          <button  type="submit">&#x1F36D;</button>
        </form>
      </header>
    );
  }
}
FinderBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};