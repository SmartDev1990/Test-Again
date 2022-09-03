import { serializeTokens } from 'utils/serializeTokens'
import { briseToken } from './tokens'
import { SerializedFarmConfig } from './types'

const serializedTokens = serializeTokens(briseToken)

export const CAKE_BNB_LP_MAINNET = '0x40FC43b98eE93568D8a544dAa92C96A4Fd187Bfb'

const farms: SerializedFarmConfig[] = [
  /**
   * These 3 farms (PID 0, 2, 3) should always be at the top of the file.
   */
  {
    pid: 0,
    v1pid: 0,
    lpSymbol: 'RICE',
    lpAddresses: {
      32520: '',
    },
    token: serializedTokens.rice,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 2,
    v1pid: 251,
    lpSymbol: 'RICE-BRISE LP',
    lpAddresses: {
      32520: CAKE_BNB_LP_MAINNET,
    },
    token: serializedTokens.rice,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 3,
    v1pid: 252,
    lpSymbol: 'xRICE-BRISE LP',
    lpAddresses: {
      32520: '',
    },
    token: serializedTokens.xRice,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 4,
    v1pid: 252,
    lpSymbol: 'xRICE-RICE LP',
    lpAddresses: {
      32520: '',
    },
    token: serializedTokens.xRice,
    quoteToken: serializedTokens.rice,
  },
]

export default farms
