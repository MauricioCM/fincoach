import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import TableExample from '@/components/tableExample'

export default function ChatPage() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-center p-8'>
      <Card className='w-full max-w-md space-y-4 p-6 shadow-lg'>
        <h1 className='text-center text-2xl font-semibold'>
          ¡Hola desde FinCoach!
        </h1>
        <p className='text-muted-foreground text-center'>
          Esta es tu primera página usando shadcn/ui.
        </p>
        <TableExample />
        <Button className='w-full' variant='default'>
          Presióname
        </Button>
      </Card>
    </main>
  )
}
