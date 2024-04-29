import { useAuth } from "../../contexts/AuthContext"
import Profile from "./Profile"
import { useNavigate } from "react-router-dom"

export default function Logout() {
    const { logout } = useAuth()
    const navigate = useNavigate()

    function handleAuth() {
        logout()
        navigate('/')
    }

  return (
    <div className="logout text-center p-3 text-white">
        <Profile />
        <button className="btn btn-outline-secondary" onClick={handleAuth} >
            Logout
        </button>
    </div>
  )
}