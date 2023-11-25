export default class AkhandPath{
    constructor(name, date, numOfPaths){
        this.name = name;
        this.date = date;
        this.numOfPaths = numOfPaths;
    }

    paathis = [];

    addPaathi = (Paathi) => {
        this.paathis.push(Paathi);
    }

    displayPaathis = () => {
        this.paathis.forEach(paathi => {
            console.log(paathi.fname + " " + paathi.lname + " " + paathi.phone)
        });
    }

}