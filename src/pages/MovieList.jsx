import Card from '../components/Card';

const movies = [
    {
        id:'1',
        title:'Inception',
        director:'Christopher Nolan',
        genre:'Science Fiction',
        release_year:2010,
        abstract:'A skilled thief is given a chance at redemption if he can successfully perform inception.',
        image:'inception.jpg'
    },
        {
        id:'2',
        title:'Inception',
        director:'Christopher Nolan',
        genre:'Science Fiction',
        release_year:2010,
        abstract:'A skilled thief is given a chance at redemption if he can successfully perform inception.',
        image:'inception.jpg'
    },
        {
        id:'3',
        title:'Inception',
        director:'Christopher Nolan',
        genre:'Science Fiction',
        release_year:2010,
        abstract:'A skilled thief is given a chance at redemption if he can successfully perform inception.',
        image:'inception.jpg'
    },
        {
        id:'4',
        title:'Inception',
        director:'Christopher Nolan',
        genre:'Science Fiction',
        release_year:2010,
        abstract:'A skilled thief is given a chance at redemption if he can successfully perform inception.',
        image:'inception.jpg'
    },
        {
        id:'5',
        title:'Inception',
        director:'Christopher Nolan',
        genre:'Science Fiction',
        release_year:2010,
        abstract:'A skilled thief is given a chance at redemption if he can successfully perform inception.',
        image:'inception.jpg'
    }
    ,
        {
        id:'6',
        title:'Inception',
        director:'Christopher Nolan',
        genre:'Science Fiction',
        release_year:2010,
        abstract:'A skilled thief is given a chance at redemption if he can successfully perform inception.',
        image:'inception.jpg'
    }
    ,
        {
        id:'7',
        title:'Inception',
        director:'Christopher Nolan',
        genre:'Science Fiction',
        release_year:2010,
        abstract:'A skilled thief is given a chance at redemption if he can successfully perform inception.',
        image:'inception.jpg'
    }
    ,
        {
        id:'8',
        title:'Inception',
        director:'Christopher Nolan',
        genre:'Science Fiction',
        release_year:2010,
        abstract:'A skilled thief is given a chance at redemption if he can successfully perform inception.',
        image:'inception.jpg'
    }
];

function MovieList(){
    return(
        <div>
            <h1>Movie List</h1>
                
            <div className="row row-cols-1 row-cols-md-3 row-cols-lg-5 g-2">
                
                    {
                        movies.map(movie => (
                            <div className="col" key={movie.id}>
                                <Card movie={movie}/>
                            </div> )           
                        )
                    }
               
            </div>
        </div>
    );
}

export default MovieList