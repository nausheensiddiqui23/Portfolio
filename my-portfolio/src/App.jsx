import { profile } from "./data/profile";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Section from "./components/Section";
import ProjectCard from "./components/ProjectCard";


function App() {
return (
<div className="dark:bg-gray-900 dark:text-white min-h-screen">
<Navbar />


{/* Hero */}
<header className="flex flex-col items-center justify-center text-center pt-24 pb-16">
<img src={profile.avatar} alt="avatar" className="w-32 h-32 rounded-full mb-4" />
<h1 className="text-4xl font-bold">{profile.name}</h1>
<p className="text-lg text-gray-600 dark:text-gray-400">{profile.role}</p>
</header>


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