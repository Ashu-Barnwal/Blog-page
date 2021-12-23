const Badge = ({ handleCateg }) => {
    const styles={
        borderRadius: '18px',
        border: '3px solid crimson',
        color: 'crimson',
        opacity: '90%',
        height: '30px',
        width: '65px',
        marginLeft: '1rem',
        padding: '2px'
    }
    return (
        <span className="btn btn-badge btn-disabled text-align-" style={styles}>
            {handleCateg()}
        </span>
    )
}

export default Badge
