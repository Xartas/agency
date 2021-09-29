import { useState } from 'react';
import './App.css';

export default function App() {

  const [company, setCompany] = useState("noCompany");
  const [product, setProduct] = useState(null);

  return (
  <>
    <div className="Pickers">      
      <fieldset>
        <legend>WYBÓR FIRMY</legend>
        <span>
          <label><b>Wybierz towarzystwo: </b></label>          
          <label>
            <select className="CompanyDropList" onChange={(e) => setCompany(e.target.value)}>
              <option value="noCompany"></option>
              <option value="pzu">PZU</option>
              <option value="warta_tuir">WARTA TUiR</option>
              <option value="warta_tunz">WARTA TUnŻ</option>
              <option value="interrisk">INTERRISK</option>
            </select>
          </label>
        </span>  
      </fieldset>    
      <fieldset>
        <legend>WYBÓR PRODUKTU</legend>
        <span>        
          <label><b>Wybierz produkt:</b></label>        
          <label>
            {company === "noCompany"  && 
              <select className="ProductDropList" onChange={(e) => setProduct(e.target.value)}>
                  <option value="noProduct"></option>
              </select>}
            {company === "pzu" &&             
              <select className="ProductDropList" onChange={(e) => setProduct(e.target.value)}>
                <option value="pzu_komunikacja">Komunikacja</option>
                <option value="pzu_mieszkania">Mieszkania</option>
                <option value="pzu_inne">Inne</option>
              </select>
            }
            {company === "warta_tuir" && 
              <select className="CompanyDropList" onChange={(e) => setProduct(e.target.value)}>
                <option value="warta_komunikacja">Ubezpieczenie komunikacyjne</option>
                <option value="warta_mieszkania">Ubezpieczenie majątkowe</option>
                <option value="warta_inne">Inne</option>
              </select>
            }
          </label>
        </span>
      </fieldset>
    </div>
    
    {/*Poniżej znajduje się okno dla wyświetlania ryzyk. Okno powinno być widoczne, dopiero gdy wybrany zostanie produkt */}    
    {product !== null &&   
    <div className="RiskMenu">
      <fieldset>
        <legend>WYBÓR RYZYK</legend>
        {product === "warta_komunikacja" && 
          <label>
            <h3>W cenie pakietu: </h3>
              <input type="checkbox" className="RiskCheckbox" id="hdiOCrisk" value="warta_hdi_OC" checked disabled={true}></input>
              <label htmlFor="hdiOCrisk">OC</label>  
            <h3>Opcje płatne dodatokwo: </h3>
              <input type="checkbox" className="RiskCheckbox" id="hdiAssStd" value="warta_hdi_assistance_standard"></input>
              <label htmlFor="hdiAssStd">Assistance Standard</label>              
              <input type="checkbox" className="RiskCheckbox" id="hdiNnw5SU" value="warta_hdi_nnw5su"></input>
              <label htmlFor="hdiNnw5SU">NNW - SU 5 000 PLN</label>                
          </label>
        }   
      </fieldset>
    </div>}
  </>
  );
}
