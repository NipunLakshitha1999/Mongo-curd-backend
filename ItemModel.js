let Item=function (itemid,itemname,itemqty,itemprice) {

    var itemid=itemid;
    var itemname=itemname;
    var itemqty=itemqty;
    var itemprice=itemprice;

    this.getItemID=function () {
        return itemid;
    }
    this.getItemName=function () {
        return itemname;
    }
    this.getItemPrice=function () {
        return itemprice;
    }
    this.getItemQTY=function () {
        return itemqty;
    }

}
