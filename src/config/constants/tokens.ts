import { ChainId, Token, WBNB } from '@smartdev1990/dex-sdkv3'

const RICE_MAINNET = new Token(
  ChainId.BSC,
  '0x1eb697Cb6F457F6a65C682F7f7c65F9f2E622A34',
  18,
  'RICE',
  'Rice Token',
  'https://riceptotocol.org/',
)

const USDC_BSC = new Token(
  ChainId.BSC,
  '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d',
  18,
  'USDC',
  'Binance-Peg USD Coin',
  'https://www.centre.io/usdc',
)

export const USDC = {
  [ChainId.BSC]: USDC_BSC,
}

export const RICE = {
  [ChainId.BSC]: RICE_MAINNET,
}

const BUSD_MAINNET = new Token(
  ChainId.BSC,
  '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
  18,
  'BUSD',
  'Binance USD',
  'https://www.paxos.com/busd/',
)

export const BUSD: Record<ChainId, Token> = {
  [ChainId.BSC]: BUSD_MAINNET,
}

export const briseToken = {
  wbnb: new Token(ChainId.BSC,'0x0eb9036cbE0f052386f36170c6b07eF0a0E3f710', 18, 'Wrapped BRISE', 'WBRISE', 'https://www.bitgert.com/',),
  // bnb here points to the wbnb contract. Wherever the currency BNB is required, conditional checks for the symbol 'BNB' can be used
  bnb: new Token(ChainId.BSC,'0x0eb9036cbE0f052386f36170c6b07eF0a0E3f710', 18, 'Wrapped BRISE', 'WBRISE', 'https://www.bitgert.com/',),

  rice:new Token(ChainId.BSC, '0x1eb697Cb6F457F6a65C682F7f7c65F9f2E622A34', 18, 'RICE', 'Rice Token', 'https://Riceprotocol.org',),
  baskom: new Token(ChainId.BSC, '0x6cd08bE8Aa9B705Ca86B4923B1784C0eE06E5220', 18, 'Baskom', 'Brisecom', 'https://Brisecom.live',),
  xRice: new Token(ChainId.BSC, '0x722f5f012D29Cc4d6464B6a46343fBA3881eaa56', 6, 'xRICE', 'xRice Token', 'https://Riceprotocol.org',),
  busd: BUSD_MAINNET,
}
