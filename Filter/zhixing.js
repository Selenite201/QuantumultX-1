/*
软件最后测试版本 v8.0.40
Regex: ^https?:\/\/sec-m\.ctrip\.cpm\/(restapi\/soa2\/10957\/json\/GetGrabOrderPayTypeV1)
MITM = sec-m.ctrip.com
*/

var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const vip = '/restapi/soa2/10957/json/GetGrabOrderPayTypeV1';

if (url.indexOf(vip) != -1) {
	obj.creditPayTypes[2]['availableStatus'] = 3
	obj.creditPayTypes[2]['openStatus'] = 0
	obj.creditPayTypes[2]['isDefault'] = 0
		
	body = JSON.stringify(obj);
}

$done({body});
