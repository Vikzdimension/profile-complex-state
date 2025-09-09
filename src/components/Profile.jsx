import React from "react";
import profile from "../assets/profile.png"

function Profile(){

    const [contact, setContact] = React.useState({
        firstName: "Karan",
        lastName: "Bhongale",
        email: "karan.cool@gmail.com",
        phone: "9745683214",
        isFavorite: false,
        avatar: profile
    })

    function handleAvatarUpdate(){
        document.getElementById('file-input').click();
    }

    function handleFileChange(e){
        const file = e.target.files[0];
        if(file){
            const ImgUrl = URL.createObjectURL(file);
            setContact(prevContact => ({
                ...prevContact,
                avatar: ImgUrl
            }));
        }
    }

    function handleSubmit(e){
        e.preventDefault();
        console.log('Contact updated:', contact);
        alert('Contact information updated successfully!');
    }

    return (
        <main className="content">
            <div className="profile">
                <div className="image-container">
                    <img name="avatar" src={contact.avatar} alt="User profile picture of John Doe" />
                    <input type="file" 
                        id="file-input" 
                        accept="image/*"
                        style={{ display: 'none' }}
                        onChange={handleFileChange}    
                    />
                    
                    <i className="fa-solid fa-edit" 
                        type="file"
                        id="edit-icon"
                        onClick={handleAvatarUpdate}
                        ></i>
                </div>
                <div className="details">
                    <i className={contact.isFavorite ? "fa-solid fa-star" : "fa-regular fa-star"} 
                    id="favorite-icon"
                    onClick={() => setContact(prevContact => ({
                        ...prevContact,
                        isFavorite: !prevContact.isFavorite}))}
                    >    
                    </i>
                    <form className="contact-form" action="">
                        <label htmlFor="firstName">First Name : </label>
                        <input type="text" name="firstName" id="firstName" value={contact.firstName} 
                               onChange={(e) => setContact(prev => ({...prev, firstName: e.target.value}))}/>
                        <label htmlFor="lastName">Last Name : </label>
                        <input type="text" name="lastName" id="lastName" value={contact.lastName} 
                               onChange={(e) => setContact(prev => ({...prev, lastName: e.target.value}))}/>
                        <label htmlFor="phone">Phone : </label>
                        <input type="tel" name="phone" id="phone" value={contact.phone} 
                               onChange={(e) => setContact(prev => ({...prev, phone: e.target.value}))}/>
                        <label htmlFor="email">Email : </label>
                        <input type="email" name="email" id="email" value={contact.email} 
                               onChange={(e) => setContact(prev => ({...prev, email: e.target.value}))}/>
                        <button type="submit" onClick={handleSubmit}>Update Contact</button>
                    </form>
                </div>

            </div>
        </main>
    )
}

export default Profile;