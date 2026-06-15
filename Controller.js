
class Controller {
  constructor( model) {
    this.tipInPercents = 0;
    this.bill = 0;
    this.numberOfPersons = 1;
    this.model = model;
  }
  
  sendResults(values,procents){
    const results={tip:"--",payment:"--"};
    console.log(`values in controller:${(JSON.stringify(values))}`);
    this.model.setData(values,procents);
    this.model.countTip();
    this.model.countBillForPerson();

    results.tip=this.model.countTipForPerson();
    results.payment=this.model.countTotalPaymentForPerson();
    return results;
  }
  validateAllLive(values){
    const errors={bill: "", procents:"", peoples: ""};
    errors.bill=this.validateInputLive("bill",values.bill);
    
    errors.peoples=this.validateInputLive("peoples",values.peoples);
    return errors;
  }

  
  validateInputLive(field, value){
  if(value[0] === "-"){
  return "Can't be negative";
  }
   if (field === "peoples" && value[0] === "0") {
    return "number of peoples must be bigger than 0";
  }
  if(value[0]==="0" && value[1]!="."){
    return "wrong format";
  }
  const dotCount = (value.match(/\./g) || []).length;

  if (dotCount > 1) {
    return "can't contain 2 or more dots";
  }
  const containsSymbols = /[^0-9.]/.test(value);

  if(containsSymbols){
    return "can't contain symbols";
  }

  return "";
}

validateEmptyInputs(values){
    const errors={bill: "", /*procents:"",*/ peoples: ""};
    errors.bill=this.validateEmptyInput("bill",values.bill);
    /*errors.procents=this.validateEmptyInput("procents",values.procents);*/
    errors.peoples=this.validateEmptyInput("peoples",values.peoples);
    return errors;  
}
validateEmptyInput(field,value){
  if(value===""){
    return `Please enter the ${field}`;
  }
  return "";
}
validateEmptyProcents(valuesProcents){
  const errors={buttonProcents: "", inputProcents: ""};
  if(valuesProcents.buttonProcents==="" && valuesProcents.inputProcents===""){
    errors.buttonProcents="Procents are missing";
    errors.inputProcents="";
  }
  return errors;
}

}
