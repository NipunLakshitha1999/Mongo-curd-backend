let Customer=function (id,name,address,contact) {

    var id=id;
    var name=name;
    var address=address;
    var contact=contact;

    this.getCustomerID=function () {
        return id;
    }
    this.getCustomerName=function () {
        return name;
    }
    this.getCustomerAddress=function () {
        return address;
    }
    this.getCustomerContact=function () {
        return contact;
    }

}
