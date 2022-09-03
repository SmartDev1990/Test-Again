import { Box, Text, UserMenu, UserMenuDivider, UserMenuItem } from '@pancakeswap/uikit'
import { bsc } from '@pancakeswap/wagmi'
import { useTranslation } from 'contexts/Localization'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import Image from 'next/image'
import { setupNetwork } from 'utils/wallet'

const chains = [bsc]

export const NetworkSelect = () => {
  const { t } = useTranslation()
  return (
    <>
      <Box px="16px" py="8px">
        <Text>{t('Select a Network')}</Text>
      </Box>
      <UserMenuDivider />
      {chains.map((chain) => (
        <UserMenuItem key={chain.id} style={{ justifyContent: 'flex-start' }} onClick={() => setupNetwork(chain.id)}>
          <Image width={24} height={24} src={`/images/tokens/${chain.id}.png`} unoptimized />
          <Text pl="12px">{chain.name}</Text>
        </UserMenuItem>
      ))}
    </>
  )
}

export const NetworkSwitcher = () => {
  const { chainId } = useActiveWeb3React()

  if (chainId === bsc.id) {
    return (
      <UserMenu
        mr="8px"
        avatarSrc={`https://raw.githubusercontent.com/smartdev1990/default-token-list/main/assets/tokens/brise/0x0eb9036cbE0f052386f36170c6b07eF0a0E3f710/logo.png`}
        account={bsc.name}
        ellipsis={false}
      >
        {() => <NetworkSelect />}
      </UserMenu>
    )
  }

  return null
}
