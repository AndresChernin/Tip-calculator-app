function OutputComponent({results,countFunction,resetFunction}){
    return(
      <section className="output-part">
        
        <div className="output-grid-part">
            <div className="tip-amount-part">
                <h2>Tip Amount</h2>
                <span>/ person</span>
            </div>
            <div className="tip-for-person">
               <p className="payment-part">${results.tip}</p>
            </div> 
            <div className="total-part">
                <h2>Total</h2>
                <span>/ person</span>
            </div>
            <div className="payment-for-person">
                <p className="payment-part">${results.payment}</p>
            </div>
              
        </div>
        <div className="button-part">
        <button className="left-button"
                onClick={countFunction}>
            COUNT
        </button>    
        <button className="right-button"
                onClick={resetFunction} >
            RESET
        </button>
        </div>
      </section>
    );
}