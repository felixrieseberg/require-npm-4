if (process.env.npm_config_user_agent) {
  var versionRegex = /npm\/([0-9]{1,3}.[0-9]{1,4}.[0-9]{1,4})/
  var npmVersion = process.env.npm_config_user_agent.match(versionRegex)
  var npmMajor

  if (npmVersion && npmVersion.length > 1) {
    npmVersion = npmVersion[1]
    npmMajor = parseInt(npmVersion[2], 10)

    if (npmMajor <= 4) {
      console.error(`This package requires at least npm 4!`)

      if (process.platform === 'win32') {
        console.log('You can install a newer npm by running')
        console.log('npm install --global npm-windows-upgrade')
        console.log('npm-windows-upgrade')
      } else {
        console.log('You can install a newer npm by running')
        console.log('npm install --global npm')
      }

      process.exit(1);
    }
  }
}