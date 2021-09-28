import './App.css';

export default function App() {

  return (
  <>
    <div className="CompanyMenu">
      <fieldset>
        <legend>WYBÓR FIRMY</legend>
        <label>Wybierz towarzystwo:</label>
        <label>
          <span>
            <select className="CompanyDropList">
              <option value="pzu">PZU</option>
              <option value="warta_tuir">WARTA TUiR</option>
              <option value="warta_tunz">WARTA TUnŻ</option>
              <option value="interrisk">INTERRISK</option>
            </select>
          </span>
        </label>
      </fieldset>
    </div>

    <div className="ProductMenu">
      <fieldset>
        <legend>WYBÓR PRODUKTU</legend>
        <label>Wybierz produkt:</label>
        <label>
          <span>
            <select className="CompanyDropList">
              <option value="pzu">Komunikacja</option>
              <option value="warta_tuir">Mieszkania</option>
              <option value="warta_tunz">Inne</option>
            </select>
          </span>
        </label>
      </fieldset>
    </div>

  </>
  );
}
