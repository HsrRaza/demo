import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Lumina Dental Studio | Confident Smiles", description: "Thoughtful, modern dental care for every smile." };
export default function RootLayout({ children }: LayoutProps<"/">) { return <html lang="en"><body>{children}</body></html>; }
