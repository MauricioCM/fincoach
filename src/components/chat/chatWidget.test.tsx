import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { ChatWidget } from './chatWidget'

describe('ChatWidget', () => {
  test('renders the floating button initially', () => {
    render(<ChatWidget />)
    expect(screen.getByRole('button', { name: '💬' })).toBeInTheDocument()
  })

  test('opens the chat widget when the floating button is clicked', () => {
    render(<ChatWidget />)
    fireEvent.click(screen.getByRole('button', { name: '💬' }))
    expect(screen.getByText('FinCoach Chat')).toBeInTheDocument()
  })

  test('closes the chat widget when the close button is clicked', () => {
    render(<ChatWidget />)
    fireEvent.click(screen.getByRole('button', { name: '💬' }))
    fireEvent.click(screen.getByRole('button', { name: '' })) // Close button
    expect(screen.queryByText('FinCoach Chat')).not.toBeInTheDocument()
  })

  test('displays the initial bot message', () => {
    render(<ChatWidget />)
    fireEvent.click(screen.getByRole('button', { name: '💬' }))
    expect(
      screen.getByText('Hola, ¿cómo puedo ayudarte hoy?')
    ).toBeInTheDocument()
  })

  test('sends a user message and receives a simulated bot response', async () => {
    render(<ChatWidget />)
    fireEvent.click(screen.getByRole('button', { name: '💬' }))

    const input = screen.getByRole('textbox')
    const sendButton = screen.getByRole('button', { name: /enviar/i })

    fireEvent.change(input, { target: { value: 'Hello' } })
    fireEvent.click(sendButton)

    expect(screen.getByText('Hello')).toBeInTheDocument()

    await waitFor(() => {
      expect(screen.getByText('Simulando respuesta...')).toBeInTheDocument()
    })
  })
})
