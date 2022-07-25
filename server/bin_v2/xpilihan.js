const prompts = require("prompts");
const controller = require('./controller.js');

module.exports = async () => {
    const prompts = prompts({
        type: "select",
        name: "pilihan",
        message: "Pilih menu",
        choices: [{
            "title": "generate model",
            "value": "generateModel"
        }, {
            "title": "run debug chrome",
            "value": "runDebugChrome"
        }, {
            "title": "run debug server",
            "value": "runDebugServer"
        }, {
            "title": "server command",
            "value": "serverCommand"
        }, {
            "title": "client command",
            "value": "clientCommand"
        }, {
            "title": "git push",
            "value": "gitPush"
        }, {
            "title": "flutter build web",
            "value": "flutterBuildWeb"
        }, {
            "title": "flutter build apk",
            "value": "flutterBuildApk"
        }, {
            "title": "set db connection",
            "value": "setDbConnection"
        }, {
            "title": "prisma generate",
            "value": "prismaGenerate"
        }, {
            "title": "install module",
            "value": "installModule"
        }]
    }).then(({
        pilihan
    }) => {
        switch (pilihan) {
            case "generateModel":
                controller.generateModel();
                break;
            case "runDebugChrome":
                controller.runDebugChrome();
                break;
            case "runDebugServer":
                controller.runDebugServer();
                break;
            case "serverCommand":
                controller.serverCommand();
                break;
            case "clientCommand":
                controller.clientCommand();
                break;
            case "gitPush":
                controller.gitPush();
                break;
            case "flutterBuildWeb":
                controller.flutterBuildWeb();
                break;
            case "flutterBuildApk":
                controller.flutterBuildApk();
                break;
            case "setDbConnection":
                controller.setDbConnection();
                break;
            case "prismaGenerate":
                controller.prismaGenerate();
                break;
            case "installModule":
                controller.installModule();
                break;
            default:
                console.log("Pilihan tidak ditemukan");
                break;
        }
    })
}