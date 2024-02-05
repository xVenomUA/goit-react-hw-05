import css from "./MovieDetailsTitle.module.css";
export const MovieDetailsTitle = ({
  data: { title, backdrop_path, release_date, overview, genres },
}) => {
  const photoURL = "https://image.tmdb.org/t/p/original/";
  const genresList = genres && genres.map((genre) => genre.name).join(", ");
  const date = new Date(release_date);
  console.log(date.getFullYear());
  return (
    <div className={css.details}>
      <img src={`${photoURL}${backdrop_path}`} alt="" className={css.image} />
      <div>
        <h2>
          {title} ({release_date})
        </h2>
        <ul className={css.list}>
          <li>
            <h3>Overview</h3> <p>{overview}</p>
          </li>
          <li>
            <h3>Genres: </h3> <p>{genresList}</p>
          </li>
        </ul>
      </div>
    </div>
  );
};