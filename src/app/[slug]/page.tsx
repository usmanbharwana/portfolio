import { notFound } from 'next/navigation';
import { portfolioPages, extraPageSlugs } from '@/data/pages';
import { skillGroups, projects, activities, site } from '@/data/site';
import { Card, SectionTitle } from '@/components/Cards';

const allSlugs = [...portfolioPages.map(p=>p.slug), ...extraPageSlugs];
export function generateStaticParams() { return allSlugs.map(slug=>({slug})); }

export default async function TopicPage({ params }: { params: Promise<{slug:string}> }) {
 const { slug } = await params;
 if (!allSlugs.includes(slug)) notFound();
 const page = portfolioPages.find(p=>p.slug===slug);
 const title = page?.title || slug.split('-').map(s=>s.charAt(0).toUpperCase()+s.slice(1)).join(' ');
 const description = page?.description || `A dedicated portfolio page for ${title.toLowerCase()}. Add your own work, process, screenshots, links, and measurable outcomes here.`;
 let cards: {title:string; description:string; label?:string}[] = [];
 if (slug==='skills') cards = skillGroups.map(g=>({title:g.title,description:g.skills.join(' · '),label:'Skills'}));
 else if (slug==='projects' || slug.includes('project') || slug==='case-studies') cards = projects.map(p=>({title:p.title,description:`${p.description} Status: ${p.status}.`,label:p.category}));
 else if (slug==='activities') cards = activities.map((a,i)=>({title:`Activity ${i+1}`,description:a,label:'Learning journey'}));
 else if (slug==='contact') cards = [{title:'Email',description:site.email,label:'Update this placeholder'},{title:'Social profiles',description:site.socials.map(s=>s.label+': '+s.href).join(' · '),label:'Add your own links'}];
 else if (slug==='about') cards = [{title:'Introduction',description:site.bio,label:'Personal profile'},{title:'Career direction',description:'Write about the opportunities, domains, and goals you are working toward.',label:'Customize this section'}];
 else cards = [{title:'Overview',description, label:page?.category || 'Portfolio'},{title:'What to add',description:'Add a real example, tools used, your contribution, screenshots, source code or demo link, and what you learned.',label:'Content checklist'},{title:'Proof of work',description:'Link to a repository, live demo, certificate, or documented result where available. Avoid unsupported claims.',label:'Evidence'}];
 return <main className="container min-h-[70vh] py-16 md:py-24"><p className="mb-4 text-xs font-bold uppercase tracking-[.25em] text-sky-300">{page?.category || 'Portfolio directory'}</p><h1 className="max-w-4xl text-4xl font-black tracking-tight md:text-6xl">{title}</h1><p className="mt-5 max-w-3xl text-lg leading-8 text-slate-400">{description}</p><div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{cards.map(c=><Card key={c.title} {...c}/>)}</div><div className="mt-12 rounded-2xl border border-amber-300/20 bg-amber-300/5 p-5 text-sm leading-7 text-amber-100/80">Customization note: this page is a structured starter. Add your actual project details and verified experience before publishing.</div><a className="mt-8 inline-block text-sky-300 hover:underline" href="/">← Back to home</a></main>;
}
