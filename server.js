const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

const projects = [
  { id: 1, title: "Personal Portfolio Website", tech: "HTML, CSS, JS, Node.js", desc: "Full-stack portfolio to showcase my skills and resume - Built for Intern Task" },
  { id: 2, title: "Student Management System", tech: "Java, MySQL", desc: "Java Full Stack Project done during Extol Tech Internship" }
];

app.get('/api/projects', (req, res) => {
  res.json(projects);
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});