
# - - - - - - - - - - - - - - - - - - - - - - - -
# jest cannot use ts-jest when installed globally.
# Image installs all npm packages in /etc/ts/
ln -s /etc/ts/node_modules ${CYBER_DOJO_SANDBOX}/node_modules

PATH=${PATH}:${CYBER_DOJO_SANDBOX}/node_modules/.bin

npm run typecheck

#Uncomment this line to enable linting.
#Please note - this will slow down the test.
#npm run lint

# jest has no cli option to turn off ansi escape codes.
# So save stderr to a file, strip the ansi codes from the
# file, cat the result back to stderr.
STDERR_LOG_FILE=/tmp/ts-jest.ascii-coloured.log
npm run test 2> "${STDERR_LOG_FILE}"
STATUS=$?
strip-ansi < "${STDERR_LOG_FILE}" >&2
exit ${STATUS}
