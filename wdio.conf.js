const path=require('path')
const allure = require('allure-commandline')
const video = require('wdio-video-reporter');

exports.config = {
    ///port: 4723,
    ///path: '/wd/hub',
    user: "hiago_visfkzV",
    key: "DownVN1aiHxUTYUYo6p2",

    services: ['browserstack'],
    specs: [
        './teste/specs/**/*.spec.js'
    ],
    framework: 'mocha',
    capabilities:[{
        "platformName": "Android",
        'app' : 'bs://081d07fe38723959763738a305e608d534eea870',
        'device' : 'Samsung Galaxy S20',
        'os_version' : '10.0',
        'project' : 'Meu primeiro projeto em Device Farm',
        'build' : '1',
        'name': 'teste_login'

    }],
    waitForTimeout: 20000,
    mochaOpts: {
        timeout: 300000
    },
    reporters: ['spec',
    ['allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: true,
    }],
    [video, {
        saveAllVideos: true,       
        videoSlowdownMultiplier: 50, 
      }],
    ],
    onComplete: function() {
        const reportError = new Error('Could not generate Allure report')
        const generation = allure(['generate', 'allure-results', '--clean'])
        return new Promise((resolve, reject) => {
            const generationTimeout = setTimeout(
                () => reject(reportError),
                5000)

            generation.on('exit', function(exitCode) {
                clearTimeout(generationTimeout)

                if (exitCode !== 0) {
                    return reject(reportError)
                }

                console.log('Allure report successfully generated')
                resolve()
            })
        })
    },
    afterStep: function (step, scenario, { error, duration, passed }, context) {
        
          driver.takeScreenshot();
        
      },
}