import css from "./CastItem.module.css";
export const CastItem = ({ data }) => {
  const photoURL = "https://image.tmdb.org/t/p/original/";
  return (
    <div className={css.div}>
      <img
        src={`${photoURL}${data.profile_path}`}
        alt={data.name}
              width={260}
              className={css.img}
      />
      <p>{data.name}</p>
      <p>Character: {data.character}</p>
    </div>
  );
};
