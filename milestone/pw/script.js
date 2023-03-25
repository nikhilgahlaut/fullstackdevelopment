// function chngeHeading() {
//     const heading = document.getElementById("heading");
//     if (heading.innerHTML === "The most affordable learning platform") {
//       heading.innerHTML = "PW Skills";
//     } else {
//       heading.innerHTML = "The most affordable learning platform";
//     }
// }
const button = document.getElementById('button');

button.addEventListener("click", () => {
  const heading = document.getElementById('heading');
  if(heading.innerHTML === "The most affordable learning platform" )
  {
      heading.innerHTML = "PW Skills";
  }
  else
  {
      heading.innerHTML = "The most affordable learning platform";
  }
});

