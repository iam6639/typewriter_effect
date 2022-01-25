// const TypeWriter = function (txtElement, words, wait = 3000) {
//   this.txtElement = txtElement;
//   this.words = words;
//   this.txt = "";
//   this.wordIndex = 0;
//   this.wait = parseInt(wait, 10);
//   this.type();
//   this.isDeleting = false;
// };

// //type method
// TypeWriter.prototype.type = function () {
//   //get current index of the word and the whole word text
//   const current = this.wordIndex % this.words.length;
//   const fullTxt = this.words[current];

//   //check if it is deleting
//   if (this.isDeleting) {
//     //remove a char
//     this.txt = fullTxt.substring(0, this.txt.length - 1);
//   } else {
//     //add a char
//     this.txt = fullTxt.substring(0, this.txt.length + 1);
//   }

//   //Insert txt into a span Element
//   this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

//   //Type Speed
//   let typeSpeed = 300;
//   if (this.isDeleting) {
//     typeSpeed /= 2;
//   }

//   //If word is complete
//   if (!this.isDeleting && this.txt === fullTxt) {
//     //make pause at the end
//     typeSpeed = this.wait;
//     //set deleting to true
//     this.isDeleting = true;
//   } else if (this.isDeleting && this.txt === "") {
//     this.isDeleting = false;
//     //moving to next word
//     this.wordIndex++;
//     //pause before start typing
//     typeSpeed = 500;
//   }

//   setTimeout(() => this.type(), typeSpeed);
// };

//Init on dom load


//ES6 classes
class TypeWriter {
  constructor(txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = "";
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
  }

  type() {
        //get current index of the word and the whole word text
    const current = this.wordIndex % this.words.length;
    const fullTxt = this.words[current];

    //check if it is deleting
    if (this.isDeleting) {
      //remove a char
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      //add a char
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    //Insert txt into a span Element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    //Type Speed
    let typeSpeed = 300;
    if (this.isDeleting) {
      typeSpeed /= 2;
    }

    //If word is complete
    if (!this.isDeleting && this.txt === fullTxt) {
      //make pause at the end
      typeSpeed = this.wait;
      //set deleting to true
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      //moving to next word
      this.wordIndex++;
      //pause before start typing
      typeSpeed = 500;
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}

document.addEventListener("DOMContentLoaded", init);

//Init app
function init() {
  const txtElement = document.querySelector(".txt-type");
  const words = JSON.parse(txtElement.getAttribute("data-words"));
  const wait = txtElement.getAttribute("data-wait");
  //init TypeWriter constructor
  new TypeWriter(txtElement, words, wait);
}