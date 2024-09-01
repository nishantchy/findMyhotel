import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider, SignedIn } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Find My Hotel Admin",
  description: "Created By Nishant Chaudhary",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <SignedIn>
        <html lang="en">
          <body className={inter.className}>{children}</body>
        </html>
      </SignedIn>
    </ClerkProvider>
  );
}
