function demoTemporalDeadZone() {
    console.log(a); // ReferenceError (in temporal dead zone)
  
    let a = 1;
  
    console.log(a); // 1
  }
  
  demoTemporalDeadZone();
  