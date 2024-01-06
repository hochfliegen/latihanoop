/**buat class person, atributnya: nama, age, hobby lalu terus tampilin Joko, 30, olahraga & travelling*/
class Person {
    constructor(name, age, hobby) {
      this.name = name;
      this.age = age;
      this.hobby = hobby;
    }
  
    startIntroducing() {
      //method biasa
      // console.log(`hello ${this.name} your hobby is: ` + this.hobby[1]);
  
      //method manual
  console.log(`person ${this.name} has a hobby: `)
  // console.log(`1. ${this.hobby[0]}`)
  // console.log(`2. ${this.hobby[1]}`)
  
  //pake loop
  for(let i = 0; i < this.hobby.length; i++)
  console.log(`${i+1}. ${this.hobby[i]}`)
  }
  
    stopIntroducing() {
      console.log("thank you " + this.name + "!");
    }
  }
  let manusia = new Person("Joko", 30, ["olahraga", "travelling", "Nonton Film", "BELAJAR"]);
  console.log(manusia);
  // manusia.stopIntroducing();
  manusia.startIntroducing();
  
  /**======================================================= */

