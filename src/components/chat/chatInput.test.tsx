import { render, screen } from '@testing-library/react'
import { ChatInput } from './chatInput'

describe('ChatInput Component', () => {
  test('renders correctly', () => {
    render(<ChatInput onSend={jest.fn()} />)
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })
})
