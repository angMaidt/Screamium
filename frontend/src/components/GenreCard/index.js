function GenreCard({ genre }) {
    console.log(genre)
    return (
        <div
            className='genre-card-container'
            style={{color: 'white'}}>
            {genre}
        </div>
    )
}

export default GenreCard;
