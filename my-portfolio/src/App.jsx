import { profile } from "./data/profile";


{/* Projects */}
<Section id="projects" title="Projects">
<div className="grid md:grid-cols-2 gap-6">
{profile.projects.map((p, idx) => <ProjectCard key={idx} project={p} />)}
</div>
</Section>


{/* Skills */}
<Section id="skills" title="Skills">
<div className="flex flex-wrap gap-3">
{profile.skills.map((s, idx) => (
<span key={idx} className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full">{s}</span>
))}
</div>
</Section>


{/* Contact */}
<Section id="contact" title="Contact">
<p>Email: <a href={`mailto:${profile.contact.email}`} className="text-blue-600">{profile.contact.email}</a></p>
</Section>


<Footer />
</div>
);
}


export default App;