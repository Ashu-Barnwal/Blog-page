const Profile = () => {
    const styles = {
        img:{
            borderRadius: '100%',
            width: '26px',
            height: '26px',
            marginLeft: '2px',
            marginTop: '1px'
        },
        div:{
            border: '2px solid crimson',
            borderRadius: '100%',
            width: '34px',
            height: '34px'
        }
    }
    return (
        <>
            <span style={styles.div} className="list-inline-item">
            <img style={styles.img} src="https://avatars.githubusercontent.com/u/24194881?v=4" alt="dp" />
            </span><span className="list-inline-item">Asutosh Kr.</span> 
        </>
    )
}

export default Profile
