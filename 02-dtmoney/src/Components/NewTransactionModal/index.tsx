import Modal from 'react-modal'
import { Container, TrasactionTypeContainer } from './styles'
import closeImg from '../../assets/close.svg'
import outcomeImg from '../../assets/outcome.svg'
import incomeImg from '../../assets/income.svg'

interface NewTransactionModalProps {
  isOpen: boolean
  onRequestClose: () => void
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName='react-modal-overlay'
      className='react-modal-content'
    >
      <button
        type='button'
        onClick={onRequestClose}
        className='react-modal-close'
      >
        <img src={closeImg} alt='Fechar modal' />
      </button>

      <Container>
        <h2>Cadastro de Nova Transação</h2>

        <input placeholder='Título' />

        <input type='number' placeholder='Valor' />

        <TrasactionTypeContainer>
          <button type='button'>
            <img src={incomeImg} alt='entrada' />
            <span>Entrada</span>
          </button>

          <button type='button'>
            <img src={outcomeImg} alt='saida' />
            <span>Saída</span>
          </button>
        </TrasactionTypeContainer>

        <input placeholder='Categoria' />

        <button type='submit'>Cadastrar</button>
      </Container>
    </Modal>
  )
}
