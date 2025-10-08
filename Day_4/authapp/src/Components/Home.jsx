import React from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

function Home() {
    // const [cookies] = useCookies(['email']);
    const current_user = localStorage.getItem("currentuser")
    const alluser = JSON.parse(localStorage.getItem("users"));
    const user = alluser.find((user) => {
        return user.email == current_user
    })
    console.log("user is", user);

    const navigate = useNavigate();
    return (
        <div className="home-container">
            <div className="user-section">
                {user ? (
                    <div className="user-info">
                        <h2>Welcome, {user.username} </h2>
                        <p className="email">{user.email}</p>
                    </div>
                ) : (
                    <div className="login-prompt">
                        <h3>Please Login First</h3>
                        <p
                            onClick={() => navigate("/login")}
                            className="btn-nav"
                        >
                            Create Account
                        </p>
                    </div>
                )}
            </div>

            <div className="welcome-section">
                {
                    user &&
                    <h1>Welcome To Home Page</h1>
                }
                {/* <p>Explore your dashboard and enjoy personalized content.</p> */}
            </div>
        </div>
    );
}

export default Home