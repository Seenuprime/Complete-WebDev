for (var i = 0; i < 5; i++) {
  (function(currentI) {
    setTimeout(() => {
      console.log(currentI);
    }, 100);
  })(i);   // immediately call it and pass the current i
}