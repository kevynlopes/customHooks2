import { useEffect } from "react";
import useFetch from "./useFetch";

function App() {
  const { request, data, loading, error } = useFetch();
  useEffect(() => {
    request("https://ranaekapi.origamid.dev/json/api/produto/");
  }, []);
  if (error) return <p>{error}</p>;
  if (loading)
    return (
      <div>
        <h1>Carregando...</h1>
      </div>
    );
  console.log(data);
  if (data)
    return (
      <div>
        <h1>
          {" "}
          {data.map((produto) => (
            <div key={produto.id}>
              <h1>{produto.nome}</h1>
            </div>
          ))}
        </h1>
      </div>
    );
  return null;
}

export default App;
