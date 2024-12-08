import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { AppStateProvider, ThemeProvider, ApolloProvider, Web3ModalProvider } from "@/context";
import { headers } from "next/headers";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Compensate",
  description: "Compensate thy workers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const cookies = headers().get('cookie')

  return (
    <html lang="en" className="bg-purple-200">
      <body
        className={`${geistSans.variable} ${geistMono.variable}  bg-purple-200`}
      >
        <Web3ModalProvider cookies={cookies}>
          <ApolloProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="dark"
              enableSystem
              disableTransitionOnChange
            >
              <AppStateProvider>
                {children}
              </AppStateProvider>
            </ThemeProvider>
          </ApolloProvider>
        </Web3ModalProvider>
      </body>
    </html>
  );
}
