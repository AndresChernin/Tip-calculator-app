function TipButtonsComponent2({errors,values,inputFunction,buttonFunction}){
    return(
      <section className="tip-buttons-part">
        <h2>Select Tip %</h2>
        <div className="tip-grid-part">
            <button 
             className={values.buttonProcents==="5"? "selected":""}
             onClick={buttonFunction(5)}>5%</button> 
            <button 
            className={values.buttonProcents==="10"? "selected":""}
            onClick={buttonFunction(10)}>10%</button> 
            <button 
            className={values.buttonProcents==="15"? "selected":""}
            onClick={buttonFunction(15)}>15%</button>
             <button 
             className={values.buttonProcents==="25"? "selected":""}
             onClick={buttonFunction(25)}>25%</button>
              <button 
              className={values.buttonProcents==="50"? "selected":""}
              onClick={buttonFunction(50)}>50%</button> 
              <input type="text" 
                     placeholder="Custom" 
                     className="custom-input"
                     value={values.inputProcents}
                     onChange={inputFunction} />
        </div>
        <div className="error-container">
          {errors.buttonProcents && (
           <p className="error-part middle-placement">{errors.buttonProcents}</p>
          )}
          {errors.inputProcents &&(
           <p className="error-part right-placement">{errors.inputProcents}</p>
          )}  
            
        
        </div>
      </section>
    );
}