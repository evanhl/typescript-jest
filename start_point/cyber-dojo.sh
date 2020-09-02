
#if [ -f .jshintrc ]; then
#  jshint --config .jshintrc *.js
#fi

# - - - - - - - - - - - - - - - - - - - - - - - -
# It seems jest cannot use ts-jest when installed globally.
# Because of this, all npm packages are installed in /etc/ts
ln -s /etc/ts/node_modules /sandbox/node_modules

if [ $? == 0 ]; then
  # jest does not appear to have a cli option to turn off ansi
  # escape codes. So I am saving stderr to a file, then
  # stripping the ansi codes from the file, and catting the
  # result back to stderr.
  STDERR_LOG_FILE=/tmp/ts-jest.ascii-coloured.log
  npm run test 2> "${STDERR_LOG_FILE}"
  STATUS=$?
  /sandbox/node_modules/.bin/strip-ansi < "${STDERR_LOG_FILE}" >&2
  exit ${STATUS}
fi
