import './Auth.css'

import { useAuth } from '../../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'

export default function Login() {

    const { login } = useAuth()
    const navigate = useNavigate()

    async function handleAuth() {
        await login()
        navigate('/')
    }

  return (
    <section className="login">
        <article className="bg-info mb-5 p-5 text-dark">
            <h1 className="text-center">Welcome to Thomas' React To Do App!</h1>
        </article>
        <Container>
            <Card className="m-5 border-dark text-center">
                    <button className="btn btn-success" onClick={handleAuth}>
                        Login w/ GitHub
                    </button>
            </Card>
        </Container>
    </section>
  )
}