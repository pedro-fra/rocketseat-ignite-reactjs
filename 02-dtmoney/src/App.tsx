import { GlobalStyle } from './styles/global'
import Modal from 'react-modal'
import { Header } from './Components/Header'
import { Dashboard } from './Components/Dashboard'
import { useState } from 'react'
import { NewTransactionModal } from './Components/NewTransactionModal'
import { TransactionsProvider } from '../src/hooks/useTransactions'

Modal.setAppElement('#root') // for acessibility

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false) // Default is false = closed

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true) // Opens the transaction modal
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false) // Closes the transaction modal
  }

  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <GlobalStyle />
    </TransactionsProvider>
  )
}
