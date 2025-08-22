import { profile } from "../data/profile";


export default function Footer() {
return (
<footer className="bg-gray-100 dark:bg-gray-800 text-center p-4">
<p className="mb-2">Connect with me:</p>
<div className="space-x-4">
<a href={profile.contact.linkedin} target="_blank">LinkedIn</a>
<a href={profile.contact.github} target="_blank">GitHub</a>
<a href={`mailto:${profile.contact.email}`}>Email</a>
</div>
<p className="text-sm mt-2">© {new Date().getFullYear()} {profile.name}</p>
</footer>
);
}