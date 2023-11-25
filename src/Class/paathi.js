export default class Paathi{

    times = [];

    constructor(fname, lname, phone){
        this.fname = fname;
        this.lname = lname;
        this.phone = phone;
    }

    setPhone(newPhone){
        this.phone = newPhone;
    }

    getPhone(){
        return this.phone;
    }

    addTime(date){
        this.times.push(date);
    }

}