import { useCallback, useEffect, useState } from "react";

import { useFetchResults } from "api/useFetchResults";

import { ResultType } from "types/result";

import Loader from "components/Loader";
import Result from "components/Result";

import "./styles.scss";

const Home = () => {
  const [results, setResults] = useState<ResultType[]>([]);
  const [page, setPage] = useState<number>(1);

  const { data, loading, error } = useFetchResults(page);

  const handleScroll = useCallback(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight &&
      !loading
    ) {
      setPage((prevPage) => prevPage + 1);
    }
  }, [loading]);

  useEffect(() => {
    if (data) {
      setResults(data);
    }
  }, [data]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="Home">
      <h1>Resultados</h1>

      {results.map((result, index) => (
        <Result key={index} result={result} />
      ))}

      {loading && <Loader />}
    </div>
  );
};

export default Home;
