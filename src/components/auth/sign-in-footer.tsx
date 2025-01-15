import { Link, useNavigate } from 'react-router-dom'
import { cn } from '@/lib/utils'
import { Button, buttonVariants } from '@/components/ui/button'

export default function SignInFooter() {
  const navigate = useNavigate()

  return (
    <p className="text-sm text-center">
      Don&lsquo;t have an account?{' '}
      <Link to="/sign-up" className={cn(buttonVariants({ variant: 'link' }), 'm-0, p-0')}>
        Sign up
      </Link>{' '}
    </p>
  )
}
