import "./globals.css";
import type { Metadata } from "next";
import Main from "@/components/Layout/Main";

export const metadata: Metadata = {
    title: "Engizny",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <Main>{children}</Main>
            </body>
        </html>
    );
}
