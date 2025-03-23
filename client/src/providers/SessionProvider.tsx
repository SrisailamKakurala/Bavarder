"use client"

// When & Where to Use?
// Use "use client" when you need interactive UI, browser-side logic, or hooks.

// Do NOT use "use client" if the component only renders static or server-side content.

import { SessionProvider as NextAuthSessionProvider } from "next-auth/react"

const SessionProvider = ({children}: {
    children: React.ReactNode,
}) => {
    return (
        <NextAuthSessionProvider>
            {children}
        </NextAuthSessionProvider>
    );
}

export default SessionProvider;