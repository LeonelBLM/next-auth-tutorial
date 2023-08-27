import { useRouter } from "next/router"

function LoginPage() {

    const router =useRouter()

  return (
    <div>
        <button onClick={() => router.push('/api/auth/signin/github')}>
            Sign in whit GitHub
        </button>
    </div>
  )
}

export default LoginPage