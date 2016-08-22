fetch('file:///home/bridgeit/Desktop/Bridgelabz/Commands.txt')
  .then(function(response) {
    return response.text();
  }).then(function(text) { 
  	console.log(text); 
  });
