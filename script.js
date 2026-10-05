fetch('/api/projects').then(r=>r.json()).then(data=>{
 document.getElementById('project-list').innerHTML = data.map(p=>`
 <div class="card"><h3>${p.title}</h3><p><b>${p.tech}</b></p><p>${p.desc}</p></div>
 `).join('');
}).catch(()=>{
 document.getElementById('project-list').innerHTML = `
 <div class="card"><h3>Personal Portfolio</h3><p><b>HTML,CSS,JS,Node.js,MySQL</b></p><p>Full-stack portfolio website</p></div>
 <div class="card"><h3>Student Management System</h3><p><b>Java, MySQL</b></p><p>Java Full Stack Internship Project</p></div>`;
});