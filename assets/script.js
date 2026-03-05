fetch("https://api.nasa.gov/planetary/apod?api_key=kyyz8x6H5yZZtZUPhfNan7bkvXStoJqh54iE4JNw")
  
  .then(response => response.json()) 
  
  .then(data => {
    console.log("Success! We got the data:");
    console.log(data); 
    console.log("Today's Image Title:", data.title);
    console.log("Image URL:", data.url);
  })

  .catch(error => {
    console.error("Oops! Something went wrong:", error);
  });