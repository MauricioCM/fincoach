'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

type Props = {
  onSend: (message: string) => void
}

export function ChatInput({ onSend }: Props) {
  const [value, setValue] = useState('')

  const handleSend = () => {
    if (!value.trim()) return
    onSend(value)
    setValue('')
  }

  return (
    <div className='flex gap-2 border-t pt-2'>
      <Input
        placeholder='Escribe algo...'
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
      />
      <Button onClick={handleSend}>Enviar</Button>
    </div>
  )
}
