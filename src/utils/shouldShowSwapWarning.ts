import { Token } from '@smartdev1990/dex-sdkv3'
import SwapWarningTokens from 'config/constants/swapWarningTokens'

const swapWarningTokens = Object.values(SwapWarningTokens)

const shouldShowSwapWarning = (swapCurrency: Token) => {
  return swapWarningTokens.some((warningToken) => warningToken.equals(swapCurrency))
}

export default shouldShowSwapWarning
