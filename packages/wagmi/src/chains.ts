import { Chain } from 'wagmi'

const bscExplorer = { name: 'BriseScan', url: 'https://brisescan.com' }

export const bsc: Chain = {
  id: 32520,
  name: 'Brise Mainnet',
  network: 'bsc',
  rpcUrls: {
    default: 'https://rpc.icecreamswap.com',
    public: 'https://rpc.icecreamswap.com',
  },
  blockExplorers: {
    default: bscExplorer,
    etherscan: bscExplorer,
  },
  multicall: {
    address: '0x9bCa299b827E6eFc6f558e37C2f2C6856CbA2C43',
    blockCreated: 7162653,
  },
  nativeCurrency: {
    name: 'BRISE',
    symbol: 'Brise',
    decimals: 18,
  },
}

export const CHAINS = [bsc]
