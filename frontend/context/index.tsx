"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"
import { useCallback, useEffect, useState } from "react";
import { Provider as ReduxProvider } from 'react-redux'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import store from '@/state/store'
import {createAppKit} from '@reown/appkit'
import { cookieToInitialState,State, WagmiProvider,type Config } from 'wagmi'
import { wagmiAdapter, projectId } from '@/utils/config'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider as ApolloInterProvider,
  HttpLink,
} from '@apollo/client'
import { sapphireTestnet, sepolia } from "viem/chains";

const queryClient = new QueryClient();

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}

export function AppStateProvider({ children }: { children: React.ReactNode }) {
  return <ReduxProvider store={store}>{children}</ReduxProvider>
}



if (!projectId) throw new Error('Project ID is not defined')

  const metadata = {
    name: 'appkit-example',
    description: 'AppKit Example',
    url: 'https://appkitexampleapp.com', // origin must match your domain & subdomain
    icons: ['https://avatars.githubusercontent.com/u/179229932']
  }
  
  // Create the modal
  export const modal = createAppKit({
    adapters: [wagmiAdapter],
    projectId,
    networks: [sepolia],
    defaultNetwork: sepolia,
    metadata: metadata,
    features: {
      analytics: true // Optional - defaults to your Cloud configuration
    }
  })
  

  export function Web3ModalProvider({ children, cookies }: { children: React.ReactNode; cookies: string | null }) {
    const initialState = cookieToInitialState(wagmiAdapter.wagmiConfig as Config, cookies)
    return (
      <WagmiProvider config={wagmiAdapter.wagmiConfig as Config} initialState={initialState}>
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
      </WagmiProvider>
    )
  }


const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://api.studio.thegraph.com/proxy/83088/chainsalaries/version/latest',
  }),
  cache: new InMemoryCache(),
})

export function ApolloProvider({ children }: { children: React.ReactNode }) {
  return <ApolloInterProvider client={client}>{children}</ApolloInterProvider>
}
