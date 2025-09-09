import profile from "../assets/profile.png"

function Profile(){


    return (
        <main className="content">
            <div className="profile">
                <img src={profile} alt="profile-logo" />
                
                <div className="details">
                    <i className="fa-solid fa-star" id="favorite-icon"></i>
                    <h3>Name: Parul Sukhdeve</h3>
                    <email>Email: parul@cool.com</email>
                </div>

            </div>
        </main>
    )
}

export default Profile;