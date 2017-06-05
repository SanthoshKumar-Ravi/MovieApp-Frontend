import { MovieTemplate } from './movieTemplate';
/* Test for Movie model
Update test code to instansiate new Movie in beforEach() block*/
// tslint:disable-next-line:max-line-length
const movie = new MovieTemplate('Titanic', '1997', 'tt0120338', 'movie', 'https://images-na.ssl-images-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg');
describe('movie_template', () => {
  it('has title', () => {
    expect(movie.Title).toBe('Titanic');
  });
  it('has imdb Id', () => {
    expect(movie.imdbID).toBe('tt0120338');
  });
  it('has poster', () => {
        // tslint:disable-next-line:max-line-length
    expect(movie.Poster).toBe('https://images-na.ssl-images-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg');
  });
  it('has year', () => {
    expect(movie.Year).toBe('1997');
  });
  it('has type', () => {
    expect(movie.Type).toBe('movie');
  });
  it('can clone itself', () => {
    // tslint:disable-next-line:max-line-length
    const clone = new MovieTemplate('Titanic', '1997', 'tt0120338', 'movie', 'https://images-na.ssl-images-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg');
    expect(movie).toEqual(clone);
  });
});
