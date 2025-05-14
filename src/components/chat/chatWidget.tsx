'use client'

import { useState } from 'react'
import { X } from 'lucide-react'

import { ChatBubble } from './chatBubble'
import { ChatInput } from './chatInput'
import { Button } from '@/components/ui/button'

export function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    { role: 'bot', message: 'Hola, ¿cómo puedo ayudarte hoy?' }
  ])

  const handleSend = (text: string) => {
    setMessages((prev) => [...prev, { role: 'user', message: text }])
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { role: 'bot', message: 'Simulando respuesta...' }
      ])
    }, 500)
  }

  return (
    <>
      {/* Botón flotante */}
      <div className='fixed right-4 bottom-4 z-50'>
        {!open && (
          <Button
            name='💬'
            onClick={() => setOpen(true)}
            className='h-12 w-12 rounded-full p-0 shadow-lg'
          >
            💬
          </Button>
        )}
      </div>

      {/* Ventana del chat */}
      {open && (
        <div className='bg-background fixed right-4 bottom-4 z-50 flex max-h-[80vh] w-[320px] flex-col rounded-lg border shadow-xl'>
          <div className='flex items-center justify-between border-b p-3'>
            <span className='font-medium'>FinCoach Chat</span>
            <button onClick={() => setOpen(false)}>
              <X className='h-4 w-4' />
            </button>
          </div>
          <div className='flex-1 overflow-y-auto px-3 py-2'>
            {messages.map((m, i) => (
              <ChatBubble
                key={i}
                message={m.message}
                role={m.role as 'user' | 'bot'}
              />
            ))}
          </div>
          <div className='p-3'>
            <ChatInput onSend={handleSend} />
          </div>
        </div>
      )}
    </>
  )
}
