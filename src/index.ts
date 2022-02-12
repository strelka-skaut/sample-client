import "./xhr2-loader";

import { PageServiceClient, PageServiceGetPageRequest, Uuid } from "@strelka-skaut/js-api-spec";

let client = new PageServiceClient('http://10.1.0.139:80');

let request = new PageServiceGetPageRequest();

let uuid = new Uuid;
uuid.setValue("ea52c273-6b3b-44c8-aa6c-424928b70563");
request.setPageId(uuid);

client.getPage(request, {}).then(res => {
	console.log(res.getPage()?.toObject());
}).catch(err => {
	console.log(err);
});