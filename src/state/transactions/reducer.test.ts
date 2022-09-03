import { ChainId } from '@smartdev1990/dex-sdkv3'
import { createStore, Store } from 'redux'
import { addTransaction, checkedTransaction, clearAllTransactions, finalizeTransaction } from './actions'
import reducer, { initialState, TransactionState } from './reducer'

describe('transaction reducer', () => {
  let store: Store<TransactionState>

  beforeEach(() => {
    store = createStore(reducer, initialState)
  })

  describe('addTransaction', () => {
    it('adds the transaction', () => {
      const beforeTime = new Date().getTime()
      store.dispatch(
        addTransaction({
          chainId: ChainId.BSC,
          summary: 'hello world',
          hash: '0x0',
          approval: { tokenAddress: 'abc', spender: 'def' },
          from: 'abc',
        }),
      )
      const txs = store.getState()
      expect(txs[ChainId.BSC]).toBeTruthy()
      expect(txs[ChainId.BSC]?.['0x0']).toBeTruthy()
      const tx = txs[ChainId.BSC]?.['0x0']
      expect(tx).toBeTruthy()
      expect(tx?.hash).toEqual('0x0')
      expect(tx?.summary).toEqual('hello world')
      expect(tx?.approval).toEqual({ tokenAddress: 'abc', spender: 'def' })
      expect(tx?.from).toEqual('abc')
      expect(tx?.addedTime).toBeGreaterThanOrEqual(beforeTime)
    })
  })

  describe('clearAllTransactions', () => {
    it('removes all transactions for the chain', () => {
      store.dispatch(
        addTransaction({
          chainId: ChainId.BSC,
          summary: 'hello world',
          hash: '0x0',
          approval: { tokenAddress: 'abc', spender: 'def' },
          from: 'abc',
        }),
      )
      expect(Object.keys(store.getState())).toHaveLength(2)
      expect(Object.keys(store.getState()[ChainId.BSC] ?? {})).toEqual(['0x0'])
      expect(Object.keys(store.getState()[ChainId.BSC_TESTNET] ?? {})).toEqual(['0x1'])
      store.dispatch(clearAllTransactions({ chainId: ChainId.BSC }))
      expect(Object.keys(store.getState())).toHaveLength(2)
      expect(Object.keys(store.getState()[ChainId.BSC] ?? {})).toEqual([])
    })
  })
})
