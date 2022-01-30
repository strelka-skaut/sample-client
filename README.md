```
# install node deps
docker run --rm -it -v $(pwd):/w -w /w node npm install

# generate grpc stubs
docker run --rm -it -v $(pwd)/protoc-gen-grpc-web:/usr/bin/protoc-gen-grpc-web -v $(pwd):/w -w /w znly/protoc -I=. api.proto --js_out=import_style=commonjs:. --grpc-web_out=import_style=commonjs,mode=grpcwebtext:.

# build
docker run --rm -it -v $(pwd):/w -w /w -e NODE_OPTIONS=--openssl-legacy-provider node npx webpack client.js

# open index.html in browser
```
