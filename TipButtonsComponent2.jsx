function TipButtonsComponent2({errors,values,inputFunction,buttonFunction}){
    return(
      <section className="tip-buttons-part">
        <h2>Select Tip %</h2>
        <div className="tip-grid-part">
            <button onClick={buttonFunction(5)}>5%</button> 
            <button onClick={buttonFunction(10)}>10%</button> 
            <button onClick={buttonFunction(15)}>15%</button>
             <button onClick={buttonFunction(25)}>25%</button>
              <button onClick={buttonFunction(50)}>50%</button> 
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