import { Link } from "react-router-dom"

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
        }
    }
    return (
        <> 
            <Link to={'/Blog-page/about'} style={{ color: 'inherit', textDecoration: 'inherit' }}>
            <span style={styles.div} className="authorImg list-inline-item">
            <img style={styles.img} src="https://avatars.githubusercontent.com/u/24194881?v=4" alt="dp" />
            </span><span className="authorText list-inline-item">Asutosh Kr.</span>
            </Link>
        </>
    )
}

export default Profile
