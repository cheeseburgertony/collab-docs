import { Button } from '@/components/ui/button'
import React, { memo } from 'react'

const Home = memo(() => {
  return (
    <div className='flex min-h-screen items-center justify-center bg-cyan-400'>
      <Button variant='destructive' >Click Me</Button>
    </div>
  )
})

Home.displayName = 'Home'

export default Home