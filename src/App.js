import { useState } from 'react';
import './App.css';

export default function App() {

  const [company, setCompany] = useState([]);
  const [product, setProduct] = useState([]);


  return (
  <>
    <div className="Pickers">
      <div className="CompanyMenu">
        <fieldset>
          <legend>WYBÓR FIRMY</legend>
          <label>Wybierz towarzystwo:</label>
          <label>
            <span>
              <select className="CompanyDropList" onChange={(e) => setCompany(e.target.value)}>
                <option value="noCompany"></option>
                <option value="pzu" selected="selected">PZU</option>
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
            {company === "noCompany" && 
              <span>
                <select className="ProductDropList" onChange={(e) => setProduct(e.target.value)}>
                  <option value="noProduct"></option>
                </select>
              </span>}
            {company === "pzu" && 
            <span>
              <select className="ProductDropList" onChange={(e) => setProduct(e.target.value)}>
                <option value="pzu_komunikacja">Komunikacja</option>
                <option value="pzu_mieszkania">Mieszkania</option>
                <option value="pzu_inne">Inne</option>
              </select>
            </span>}
            {company === "warta_tuir" && 
            <span>
              <select className="CompanyDropList" onChange={(e) => setProduct(e.target.value)}>
                <option value="warta_oc_hdi">OC HDI</option>
                <option value="warta_oc_komfort">OC KOMFORT</option>
                <option value="warta_assistance">Assistance</option>
              </select>
            </span>}
          </label>
        </fieldset>
      </div>
    </div>
    <div className="RiskMenu">
      <fieldset>
        <legend>WYBÓR RYZYK</legend>
        {product === "warta_oc_komfort" && 
          <label>
            <p>W cenie pakietu: </p>
              <input type="checkbox" className="RiskCheckbox" id="hdiOCrisk" value="warta_hdi_OC" checked></input>
              <label for="hdiOCrisk">OC</label>  
            <p>Opcje płatne dodatokwo: </p>
              <input type="checkbox" className="RiskCheckbox" id="hdiAssStd" value="warta_hdi_assistance_standard"></input>
              <label for="hdiAssStd">Assistance Standard</label>  
            
              <input type="checkbox" className="RiskCheckbox" id="hdiNnw5SU" value="warta_hdi_nnw5su"></input>
              <label for="hdiNnw5SU">NNW - SU 5 000 PLN</label>                
          </label>
        }   
      </fieldset>
    </div>


  </>
  );
}
