export default function Section({ id, title, children }) {
return (
<section id={id} className="py-12 px-6">
<h2 className="text-2xl font-bold mb-6">{title}</h2>
{children}
</section>
);
}