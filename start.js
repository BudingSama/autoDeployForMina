const ci = require('miniprogram-ci')
// 注意： new ci.Project 调用时，请确保项目代码已经是完整的，避免编译过程出现找不到文件的报错。
(
    async () => {
        const project = new ci.Project({
            appid: 'wx84a42ece25ad6ca7',
            type: 'miniProgram',
            projectPath: './',
            privateKeyPath: './private.wx84a42ece25ad6ca7.key',
            ignores: ['node_modules/**/*'],
          })
          
          const uploadResult = await ci.upload({
              project,
              version: 'ß1.1.8',
              desc: 'hello 0902',
              setting: {
                es6: false,
              },
              onProgressUpdate: console.log,
          })
          
          console.log(uploadResult)
    }
)()


