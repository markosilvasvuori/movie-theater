import classes from './Footer.module.css';

const Footer = () => {
    const getYear = () => {
        const date = new Date();
        return date.getFullYear();

    };

    return (
        <footer className={classes.footer}>
            <div className={classes.container}>
                <div className={classes.top}>
                    <div className={classes['column']}>
                        <p>This is a demo website built for portfolio.</p>
                    </div>
                    <div className={classes['column']}>
                        <a 
                            href='https://www.themoviedb.org/' 
                            target='_blank'
                            rel='noreferrer'
                        >
                            <img 
                                className={classes['tmdb-logo']}
                                src='https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_2-9665a76b1ae401a510ec1e0ca40ddcb3b0cfe45f1d51b77a308fea0845885648.svg' 
                                alt='TMDB'
                            />
                        </a>
                        <p>This product uses the TMDB API but is not endorsed or certified by TMDB.</p>
                    </div>
                </div>
                <div className={classes.bottom}>
                    <p>&copy; Marko Silvasvuori {getYear()}</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;