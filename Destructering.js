//JSON : KEY : VALUE  {:}
let person ={
    firstName : 'Sudipa',
    lastName : 'Roy',
    course : 'React',
    currentDate : new Date()
    }
    //const {firstName,lastName,currentDate} = person;
    console.log(person.firstName);

    getAddress = () => {
        return {
          block: "bf block",
          state: "Delhi",
          country: "India",
        };
      };
      
      const {block,state} = getAddress();
      console.log(block)
      