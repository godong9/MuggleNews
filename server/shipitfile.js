'use strict';

module.exports = function (shipit) {
  require('shipit-deploy')(shipit);
  const cmdOptions = { maxBuffer: 100 * 1024 * 1024 };

  shipit.initConfig({
    default: {
      workspace: '/Users/godong9/muggle-news',
      deployTo: '/home/godong/muggle-news',
      repositoryUrl: 'https://github.com/godong9/MuggleNews.git',
      ignores: ['.git', 'node_modules'],
      keepReleases: 3,
      deleteOnRollback: false,
      key: '/Users/godong9/.ssh/id_rsa',
      shallowClone: true
    },
    staging: {
      servers: 'godong@godong9.com'
    }
  });

  shipit.task('pwd', function () {
    return shipit.remote('pwd');
  });

  shipit.blTask('build', function () {
    let buildCommand = [
      'cd ' + shipit.config.deployTo + '/current/server',
      //package 설치
      'npm install'
    ];

    return shipit.remote(makeCommandStr(buildCommand), cmdOptions);
  });

  shipit.blTask('deploy-config', function () {
    let buildCommand = [
      'scp /Users/godong9/project/MuggleNews/server/config/env/production.js godong@godong9.com:/home/godong/muggle-news/current/server/config/env'
    ];

    return shipit.local(makeCommandStr(buildCommand), cmdOptions);
  });

  shipit.blTask('deploy-restart', function () {
    let buildCommand = [
      'cd ' + shipit.config.deployTo + '/current',
      'pm2 restart MuggleNews'
    ];

    return shipit.remote(makeCommandStr(buildCommand), cmdOptions);
  });

  shipit.blTask('deploy-server', ['deploy', 'build', 'deploy-config', 'deploy-restart'], function() {

  });

  /**
   * Array를 remote command용 문자열로 변경 한다.
   *
   * @param {Array} cmds bash command array
   * @returns {string} "cmd[0] && cmd[1] && cmd[2]" 형식의 stirng
   */
  function makeCommandStr(cmds){
    let cmdStr = "";
    let i;
    for (i = 0; i < cmds.length-1; i++) {
      let cmd = cmds[i];
      cmdStr += cmd + " && ";
    }
    cmdStr += cmds[cmds.length-1];
    return cmdStr;
  }
};