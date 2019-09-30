import React from "react";
import "./student.css";
// here we import a dummy component
import CoolButton from "./coolButton";

export default class Student extends React.Component {
  constructor(props) {
    super();

    // this defaults the avatarURL to the amazon path if no avatarURL was specified as prop
    // sent to this component
    this.state = {
      age: props.sAge,
      showGrades: false,
      avatarUrl: props.avatarUrl
        ? props.avatarUrl
        : "https://s3.amazonaws.com/owler-image/logo/ironhack_owler_20180828_221413_original.png"
    };

    const greatGrade = 15;

    // JSX snippet embedding a local variable
    this.grades = (
      <ul>
        <li>{greatGrade}</li>
        <li>9</li>
        <li>7</li>
      </ul>
    );
  }

  // if we click the increase age button, we return the updated state having a +1 age (this causes re-render by calling setState)
  increaseAge() {
    const newAge = this.state.age + 1;

    this.setState({
      ...this.state,
      age: newAge
    });
  }

  // if we click the switch grades button, we negate the showGrades boolean, and cause a re-render by calling setState
  switchGrades() {
    const showGrades = !this.state.showGrades;

    this.setState({
      ...this.state,
      showGrades: showGrades
    });
  }

  render() {
    return (
      <article className="student">
        {/* {JSON.stringify(this.props)} */}
        <img src={this.state.avatarUrl} width="100" />
        <h1>
          {this.props.sName} {this.props.sSurname}
        </h1>
        <h4>Age: {this.state.age}</h4>
        {/* this will render grades only if showGrades evaluates to true */}
        {this.state.showGrades && this.grades}
        {/* <div className={"visible" : }>
            {this.grades}
        </div> */}
        <CoolButton text="Coolbutton"></CoolButton>
        {/* here the buttons call to methods defined in this class */}
        <button onClick={() => this.increaseAge()}>Hola!!!</button>
        <button onClick={() => this.switchGrades()}>Show/Hide grades</button>
      </article>
    );
  }

  getFinalAge(age) {
    return +age + 1;
  }
}
