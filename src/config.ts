import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { http, createConfig } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'

export const wagmiConfig = createConfig({
  chains: [mainnet, sepolia],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
});

export const rainbowkitConfig = getDefaultConfig({
    appName: 'Civic Ethereum example',
    projectId: process.env.WALLETCONNECT_PROJECT_ID || '',
    chains: [mainnet, sepolia],
});