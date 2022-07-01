function RightNav() {
    return (
        <div
            style={{
                backgroundColor: 'rgb(5, 4, 5)',
                height: '100vh',
                width: '25vw',
            }}
            className='right-nav-wrapper'>
                <div
                    style={{
                        position: 'fixed',
                        right: '0',
                        backgroundColor: 'rgb(5, 4, 5)',
                        height: '100vh',
                        width: '25vw',
                    }}
                    className="right-nav-container">
                    <div style={{ color:'white' }}>Genres/Topics Over Here</div>
                    <div style={{ color:'white' }}>Genres/Topics Over Here</div>
                    <div style={{ color:'white' }}>Genres/Topics Over Here</div>
                    <div style={{ color:'white' }}>Genres/Topics Over Here</div>
                    <div style={{ color:'white' }}>Genres/Topics Over Here</div>
                </div>
            </div>
    )
}

export default RightNav;
