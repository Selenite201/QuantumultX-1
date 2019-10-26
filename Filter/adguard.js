/*
by 野比
添加MITM = mobile-api.adguard.com
*/

var body = $response.body;
var obj = JSON.parse(body);

var arr = ["PREMIUM", "CN", "VALID", "DHAG8GKN3M"];

obj['countryCode'] = arr[1];
obj['expirationDate'] = 3043001166652;
obj['licenseKey'] = arr[3];
obj['licenseKeyStatus'] = arr[2];
obj['status'] = arr[0];
obj['subscription'] = null;

body = JSON.stringify(obj);

$done({body});
