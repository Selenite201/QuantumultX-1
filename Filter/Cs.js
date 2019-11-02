/*
软件最后测试版本 v5.13.3
Regex: ^https?:\/\/cs-msg\.intsig\.net\/(msg\/jmsg)
Regex: ^https?:\/\/api\.intsig\.net\/(purchase\/cs\/query_property)
MITM = api.intsig.net
*/

// $done({body: modifiedBody, headers: modifiedHeaders}

var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const vip = '/msg/jmsg';
const time = '/purchase/cs/query_property';

if (url.indexOf(vip) != -1) {
	obj['max_seq_num_by_read'] = '7';
	obj['max_seq_num_'] = '7';
	
	body = JSON.stringify(obj);
}

if (url.indexOf(time) != -1 && obj.data['server_time']) {
	obj.data['server_time'] = '1552382279';
	obj.data['psnl_vip_property'] = {}
	obj.data.psnl_vip_property['initial_tm'] = '1552301645';
	obj.data.psnl_vip_property['last_payment_method'] = 'webshop';
	obj.data.psnl_vip_property['expiry'] = '1787655245';
	
	body = JSON.stringify(obj);
}

$done({body});
