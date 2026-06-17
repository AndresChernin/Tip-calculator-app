function TipButtonsComponent({error,value,inputFunction,buttonFunction}){
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
                     value={value}
                     onChange={inputFunction} />
        </div>
        <h2 className="error-part right-placement">{error}</h2>
      </section>
    );
}