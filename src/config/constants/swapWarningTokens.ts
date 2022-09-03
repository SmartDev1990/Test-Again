import { Token } from '@smartdev1990/dex-sdkv3'
import { briseToken } from 'config/constants/tokens'
import { bscWarningTokens } from 'config/constants/warningTokens'

// const { bondly, itam, ccar, bttold } = briseToken
// const { pokemoney, free, safemoon } = bscWarningTokens

interface WarningTokenList {
  [key: string]: Token
}

const SwapWarningTokens = <WarningTokenList>{}

export default SwapWarningTokens
