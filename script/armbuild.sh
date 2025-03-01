npm run build

docker buildx build --platform linux/arm64 -t overview-arm .
docker build -t overview .

# //docker rm -f overview
docker run -d -p 8080:80 overview --name overview

# arm mode stop
docker run --rm --privileged multiarch/qemu-user-static --reset


# arm mode start
docker run --rm --privileged multiarch/qemu-user-static --reset -p yes


# store image to file

docker load -i overview_arm.tar 
docker save -o overview-arm.tar overview-arm

