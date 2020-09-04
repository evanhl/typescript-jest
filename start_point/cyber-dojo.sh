# jest cannot use ts-jest when installed globally.
# Image installs all npm packages in /etc/ts/
ln -s /etc/ts/node_modules ${CYBER_DOJO_SANDBOX}/node_modules

npm run typecheck || exit 42

#Uncomment this line to enable linting.
#Note: this will slow down the test.
#npm run lint

npm run test
