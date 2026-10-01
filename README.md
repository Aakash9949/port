# Alex Morgan — Premium Developer Portfolio

A responsive portfolio built with Next.js App Router, React, TypeScript, Tailwind CSS, Framer Motion, and Lucide React.

## Run locally

1. Install Node.js 18.17+.
2. In this folder, run `npm install`.
3. Run `npm run dev` and open http://localhost:3000.
4. Run `npm run build` to create a production build.

## Personalize it

- Edit `lib/data.ts` to update your name, bio, social links, projects, skill levels, experience, and testimonials.
- Update `app/layout.tsx` metadata.
- Replace the CSS portrait illustration in the hero with a real image if desired.
- Add your CV as `public/resume.pdf` and update the `resume` path in `lib/data.ts` if you add a CV link.
- Project links currently point to example URLs. Replace each `github` and `live` URL in `lib/data.ts` with the real destination.

## Contact form

The form has client-side validation, sending/success/error states, and a working mock submission when no endpoint is configured. To receive real messages, create a form at Formspree, copy `.env.example` to `.env.local`, and set `NEXT_PUBLIC_FORMSPREE_ENDPOINT` to your Formspree endpoint. Restart the dev server after changing environment variables.

## Production notes

Before deployment, replace all sample profile/project/testimonial content with accurate information, confirm external links, configure a real contact endpoint, and test keyboard navigation and form delivery. Deploy to Vercel or any host that supports Next.js.
