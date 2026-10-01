import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'Alex Morgan — Creative Developer', description: 'Portfolio of Alex Morgan, a developer building thoughtful digital experiences.' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en" suppressHydrationWarning><body>{children}</body></html>; }
