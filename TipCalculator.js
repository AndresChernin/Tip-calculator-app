
class TipCalculator {
  constructor(bill = 0, tipInPercents = 0, numberOfPersons = 1) {
    this.bill = bill;
    this.tipInPercents = tipInPercents;
    this.numberOfPersons = numberOfPersons;

    this.tip = 0;
    this.billForPerson = 0;
    this.tipForPerson = 0;
    this.totalPaymentForPerson = 0;
  }

  // Getter
  getBill() {
    return this.bill;
  }

  getTip() {
    return this.tip;
  }

  getNumberOfPersons() {
    return this.numberOfPersons;
  }

  getBillForPerson() {
    return this.billForPerson;
  }

  getTipForPerson() {
    return this.tipForPerson;
  }

  getTotalPaymentForPerson() {
    return this.totalPaymentForPerson;
  }

  getTipInPercents() {
    return this.tipInPercents;
  }
  setData(values,procents){
    console.log(`values in model:${(JSON.stringify(values))}`);
    console.log(`procents in model:${(JSON.stringify(procents))}`);
    this.setBill(Number(values.bill));
    
    this.setNumberOfPersons(Number(values.peoples));
    if(procents.buttonProcents!=""){
      this.setTipInPercents(Number(procents.buttonProcents));
    }
    else{
       this.setTipInPercents(Number(procents.inputProcents));
    }
  }

  // Setter
  setBill(bill) {
    this.bill = bill;
  }

  setTipInPercents(tipInPercents) {
    this.tipInPercents = tipInPercents;
  }

  setNumberOfPersons(numberOfPersons) {
    this.numberOfPersons = numberOfPersons;
  }

  countTip() {
    console.log(`bill:${(JSON.stringify(this.bill))}`);
    console.log(`tipinPercents:${(JSON.stringify(this.tipInPercents))}`);  
    this.tip = this.bill * (this.tipInPercents / 100);
    console.log(`tip:${(JSON.stringify(this.tip))}`);  
  }

  countBillForPerson() {
    this.billForPerson = this.bill / this.numberOfPersons;
    console.log(`bill for person:${(JSON.stringify(this.billForPerson))}`);  
  }

  countTipForPerson() {
    this.tipForPerson = this.tip / this.numberOfPersons;
    console.log(`tip for perpson:${(JSON.stringify(this.tipForPerson))}`);
    return this.tipForPerson.toFixed(2);
  }

  countTotalPaymentForPerson() {
    this.totalPaymentForPerson =
      this.billForPerson + this.tipForPerson;
    console.log(`totalpayment for perpson:${(JSON.stringify(this.totalPaymentForPerson))}`);  
    return this.totalPaymentForPerson.toFixed(2);
  }
}
