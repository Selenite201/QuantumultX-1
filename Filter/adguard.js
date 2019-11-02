/*
by 野比
1.添加MITM = mobile-api.adguard.com
2.URL正则：https:\/\/mobile-api\.adguard\.com\/api\/1\.0\/status\.html url script-response-body https://raw.githubusercontent.com/xixaxoqiqaqo/QuantumultX/master/Filter/adguard.js
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

/**
 * @supported 7DD9F201 F692B200
*/
