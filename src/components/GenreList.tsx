import useGenres from "@/hooks/useGenres";

const GenreList = () => {
  const { generes } = useGenres();
  return (
    <ul>
      {generes.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
