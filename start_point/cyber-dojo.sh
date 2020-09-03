
# - - - - - - - - - - - - - - - - - - - - - - - -
# jest cannot use ts-jest when installed globally.
# Image installs all npm packages in /etc/ts/
ln -s /etc/ts/node_modules ${CYBER_DOJO_SANDBOX}/node_modules

#if [ -f .jshintrc ]; then
#  # TODO? Redirect jshint output to ${CYBER_DOJO_SANDBOX}/report/style.txt
#  jshint --config .jshintrc *.ts
#fi

if [ $? == 0 ]; then
  # jest has no cli option to turn off ansi escape codes.
  # So save stderr to a file, then strip the ansi codes from the
  # file, then cat the result back to stderr.
  STDERR_LOG_FILE=/tmp/ts-jest.ascii-coloured.log
  npm run test 2> "${STDERR_LOG_FILE}"
  STATUS=$?
  ${CYBER_DOJO_SANDBOX}/node_modules/.bin/strip-ansi < "${STDERR_LOG_FILE}" >&2
  exit ${STATUS}
fi
