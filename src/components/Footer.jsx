import { useAuth } from "../contexts/AuthContext"
import Logout from "./Auth/Logout"

export default function Footer() {
  const { currentUser } = useAuth();

    return (
      <footer className="text-center p-4">
        {currentUser && <Logout />}
          <strong>&copy; {new Date().getFullYear()} Thomas Walton, All Rights reserved</strong>
      </footer>
    );
  }