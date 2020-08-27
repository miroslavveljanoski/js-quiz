window.onload = () => {
  // what else should happen when the app is initialized?
  //  ie. before the user can use it
  //  often this will be rendering state to the UI


  // log the initial state
  log.push({
    state: deepClone(state)
  });

   // Show the setup
   document.getElementById("explanation_div").style.display = "block";
   
   // Hide the game
   document.getElementById("play_quiz_div").style.display = "none";

  // this log will always be up to date because of reference
  console.log(log);
};
