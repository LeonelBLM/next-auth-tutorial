import { getProviders, signIn, useSession} from "next-auth/react"
import { useRouter } from "next/router"

function LoginPage() {

  const {data: session, status} = useSession()
  const router = useRouter()

  if (status !== 'loading' && status === 'authenticated'){
    router.push('/')
  }

  return (
    <div>
        <button onClick={() => signIn()}>
            Sign in whit GitHub
        </button>
    </div>
  )
}

export default LoginPage