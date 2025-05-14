type Props = {
  message: string
  role: 'user' | 'bot'
}

export function ChatBubble({ message, role }: Props) {
  return (
    <div
      className={`my-2 max-w-[75%] rounded-lg p-3 ${role === 'user' ? 'bg-primary ml-auto text-white' : 'bg-muted mr-auto'}`}
    >
      {message}
    </div>
  )
}
