import React from "react";
import Student from "./Student";
import "./App.css";

// here we use StudentData to protect the generated StudentData objects, preventing wrong ages
class  StudentData{
  constructor(sName, sSurname, sAge) {
    if (sAge < 0) throw new Error("Age error");
    this.sName = sName;
    this.sSurname = sSurname;
    this.sAge = sAge;
  }
}

class App extends React.Component {
  constructor() {
    super();

    // here StudentData is a collaborator class but we only use App in the SPA
    this.students = [
      new StudentData("Antonio", "Llamas", 35),
      {
        sName: "Ester",
        sSurname: "Martinez",
        sAge: 38,
        avatarUrl:
          "https://media.licdn.com/dms/image/C5603AQEOuPeTvblXug/profile-displayphoto-shrink_800_800/0?e=1575504000&v=beta&t=CgJHFPYgstOqS8HRc14hqfUIdjhS5MkRf7nssWUI89c"
      },
      {
        sName: "Dani",
        sSurname: "Vicario",
        sAge: 39
      }
    ];
  }

  render() {
    return (
      <div className="App">
        {/* <Student sName="Antonio" sSurname="Llamas" sAge="35"></Student> */}
        {/* <Student sName="Ester" sSurname="Martinez" sAge="38"></Student> */}

        {/* here we inject the data from the students Array, instantiating Student components with their data */}
        {this.students.map(student => (
          <Student
            sName={student.sName}
            sSurname={student.sSurname}
            sAge={student.sAge}
            avatarUrl={student.avatarUrl}
          ></Student>
        ))}
      </div>
    );
  }
}

export default App;
