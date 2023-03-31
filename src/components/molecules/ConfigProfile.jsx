function ConfigProfile({src}) {
    return ( 
        <div className='profile-picture'>
            <h2>Profile picture</h2>
            <div>
                <img src={src}/>
            </div>
        </div>
     );
}

export default ConfigProfile;