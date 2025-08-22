
export default function ProjectCard({ project }) {
return (
<div className="p-4 border rounded-lg shadow hover:shadow-lg transition">
<h3 className="text-lg font-semibold">{project.name}</h3>
<p className="text-gray-600 dark:text-gray-300">{project.description}</p>
<a href={project.link} target="_blank" className="text-blue-600 hover:underline">View Project</a>
</div>
);
}