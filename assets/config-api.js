function getcustomerdata (customerid){
var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    let response = this.responseText;
    let customerdata = JSON.parse(response);
    let cust = customerdata.customer;
    let note = cust.note;
      console.log(note);
      document.getElementById("keyvalue").value = note;
  }
});
xhr.open("GET", "https://f195b6db93ab6c8277123f7bdbc7bf50:9f2d4df9c67bcdc44f3b15b886daa525@mycube-safe-dev.myshopify.com/admin/api/2023-01/customers/6755114811678.json");
xhr.setRequestHeader("X-Shopify-Access-Token", "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");
xhr.send();
}
function updatecustomerkey (customerid) {
  var keyval = document.getElementById("keyvalue").value;
var data = JSON.stringify({
  "customer": {
    "id": customerid,
    "note": keyval
  }
});

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;
xhr.open("PUT", "https://f195b6db93ab6c8277123f7bdbc7bf50:9f2d4df9c67bcdc44f3b15b886daa525@mycube-safe-dev.myshopify.com/admin/api/2023-01/customers/6755114811678.json");
xhr.setRequestHeader("X-Shopify-Access-Token", "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");
xhr.setRequestHeader("Authorization", "Bearer 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");
xhr.setRequestHeader("Content-Type", "application/json");
xhr.send(data);
}