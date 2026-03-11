// fetch("https://api.nasa.gov/planetary/apod?api_key=kyyz8x6H5yZZtZUPhfNan7bkvXStoJqh54iE4JNw")
//   .then(response => response.json()) 

//   .then(data => {
//     console.log("Success! We got the data:");
//     console.log(data); 
//     console.log("Today's Image Title:", data.title);
//     console.log("Image URL:", data.url);
//   })

//   .catch(error => {
//     console.error("Oops! Something went wrong:", error);
//   });

// Função asíncrona para realizar o fetch.
async function getApod() {
  const api_key = "kyyz8x6H5yZZtZUPhfNan7bkvXStoJqh54iE4JNw";
  const url = `https://api.nasa.gov/planetary/apod?api_key=${api_key}`;

  // Tratamento de erros.
  try {
    const response = await fetch(url); // Await diz para o código não executar outra linha enquanto o fetch não for concluído.

    if (!response.ok) { // Se a const response for diferente de ok(status 200), cria um erro.
      throw new Error("Network response is not working: ", response.status);
    }

    const data = await response.json(); // Transforma os dados em json(uma forma que o JS consegue utilizar).
    console.log("NASA Data: ", data);
    renderData(data);

  } catch (error) {
    console.error("Error: ", error);

    const container = document.getElementById("apod-container");
    container.innerHTML = `
      <div>
        <p> A meteor may have hit the antenna, check the network and try again. </p>
      </div>
  `
  }
}

function renderData(data) {
  const container = document.getElementById("apod-container");

  container.innerHTML = "";

  const title = document.createElement("h2");
  title.textContent = data.title;
  title.className = "apod-title";

  const img = document.createElement("img");
  img.src = data.url;
  img.alt = data.title
  img.className = "apod-img";

  const exp = document.createElement("p");
  exp.textContent = data.explanation;
  exp.className = "apod-explain";

  const date = document.createElement("p");
  date.textContent = data.date;
  date.className = "apod-date";

  const label = document.createElement('h3');
  label.className = "apod-explain-label"
  label.textContent = "Resume of Picture:";

  container.appendChild(title);
  container.appendChild(date);
  container.appendChild(img);
  container.appendChild(label);
  container.appendChild(exp);
}

getApod();