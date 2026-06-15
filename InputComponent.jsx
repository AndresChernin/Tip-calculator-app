function InputComponent({img_link,h2_tag,error,initialText,value,inputFunction}){
    return(
        <article className="input-part"> 
        <div className="h2-error-part">
         <h2>{h2_tag}</h2>
         <h2 className="error-part">{error}</h2>
        </div>
         <div  className="input-part-input-wrapper">
            <img src={img_link} 
              className="dollar-part"
              alt="image of dollar"
             />
            <input 
             type="text"
             placeholder={initialText}
             className="input-part-bill-part"
             value={value}
             onChange={inputFunction}
             />
         </div>
        </article>
    )
   
}