import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { resetState } from "../features/result/resultSlice";
import { Link } from "react-router-dom";

export default function Result() {
  // leggere gli elementi nello store
  const { result, questionsFailed, correct, wrong } = useSelector(
    (state) => state.result
  );

  const dispatch = useDispatch();

  // funzione per ricominciare il quiz
  const restart = () => {
    dispatch(resetState());
  };

  return (
    <div className="result-container">
      <div className="results">
        <h2>
          Risultato: <span className="result"> {Math.floor(result)}%</span>
        </h2>
        <h4>
          Risposte corrette: <span className="result correct"> {correct}</span>
        </h4>
        <h4>
          Risposte sbagliate: <span className="result wrong"> {wrong}</span>
        </h4>
        <h3>Domande sbagliate:</h3>
        {questionsFailed.length > 0 ? (
          questionsFailed.map((item) => {
            return (
              <h4 className="failed-questions" key={item}>
                - {item}
              </h4>
            );
          })
        ) : (
          <h4>0</h4>
        )}
        <Link to="/">
          <button className="restart" onClick={restart}>
            Riprova
          </button>
        </Link>
      </div>
    </div>
  );
}
