const {PageServiceGetPageRequest, PageServiceGetPageResponse} = require('./api_pb.js');
const {PageServiceClient} = require('./api_grpc_web_pb.js');

var client = new PageServiceClient('http://localhost:80');

var request = new PageServiceGetPageRequest();
request.setPageId(1);

client.getPage(request, {}, (err, response) => {
	console.log(
		err,
		response.getPage().getTitle(),
		response.getPage().getContent(),
		response.getPage().getAuthorId(),
	);
});
