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
        <div className="btn btn-disabled text-align-" style={styles}>
            {handleCateg()}
        </div>
    )
}

export default Badge
