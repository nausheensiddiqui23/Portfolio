import { profile } from "../data/profile";


export default function Navbar() {
return (
<nav className="fixed top-0 left-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow z-50 p-4 flex justify-between items-center">
<h1 className="text-xl font-bold">{profile.name}</h1>
<div className="space-x-4">
<a href="#projects" className="hover:underline">Projects</a>
<a href="#skills" className="hover:underline">Skills</a>
<a href="#contact" className="hover:underline">Contact</a>
<a href={profile.resume} target="_blank" className="bg-blue-600 text-white px-3 py-1 rounded-md">Resume</a>
</div>
</nav>
);
}