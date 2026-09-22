import './globals.css';
import type { Metadata } from 'next';
export const metadata:Metadata={title:'Skycast — Weather without the noise',description:'A polished responsive weather dashboard.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}