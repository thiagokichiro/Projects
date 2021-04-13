const express = require("express");
const cors = require("cors");
const { uuid, isUuid } = require("uuidv4");

const app = express();

app.use(cors());
app.use(express.json()); //Define que as rotas irão utilizar json nas requisições/retornos

const projects = [];

//Middleware disparado de forma automática em todas as requisições
function logRequests(request, response, next) {
  const { method, url } = request;

  const logLabel = `[${method.toUpperCase()}] ${url}`;

  console.log(logLabel);

  return next(); //Próximo middleware
}

// Middleware que valida se id é valido no PUT/POST
function validateProjectId(request, response, next) {
  const { id } = request.params;

  if (!isUuid(id)) {
    return response.status(400).json({ error: "Invalid project ID" });
  }

  return next();
}

app.use(logRequests);
// Informa que irá utilizar o middleware somente em rotas que tenham essa estrutura, no caso com parâmetro id
app.use("/projects/:id", validateProjectId);

app.get("/projects", (request, response) => {
  const { title } = request.query;

  // Filtro para busca por título
  const results = title
    ? projects.filter((project) => project.title.includes(title))
    : projects;

  return response.json(results);
});

app.post("/projects", (request, response) => {
  const { title, owner } = request.body;

  const project = { id: uuid(), title, owner };

  projects.push(project);

  return response.json(project);
});

app.put("/projects/:id", (request, response) => {
  const { id } = request.params;

  const { title, owner } = request.body;

  const projectIndex = projects.findIndex((project) => project.id === id);

  if (projectIndex < 0) {
    return response.status(400).json({ error: "Project not found." });
  }

  const projecToUpdate = {
    id,
    title,
    owner,
  };

  projects[projectIndex] = projecToUpdate;

  return response.json(projecToUpdate);
});

app.delete("/projects/:id", (request, response) => {
  const { id } = request.params;

  const projectIndex = projects.findIndex((project) => project.id === id);

  if (projectIndex < 0) {
    return response.status(400).json({ error: "Project not found." });
  }

  projects.splice(projectIndex, 1);

  return response.status(204).send();
});

app.listen(3333, () => {
  console.log("🚀 Back-end started!");
});
