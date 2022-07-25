#!/usr/bin/env node
const prompts = require('prompts');
const path = require('path');
const fs = require('fs');
const jsBeauty = require('js-beautify');
const _ = require('lodash');
const colors = require('colors');
const { execSync } = require('child_process');


prompts({
    type: 'text',
    name: 'name',
    message: 'Nama Page',
    initial: 'index'
}).then(({ name }) => {
    if(name == undefined || name == ""){
        console.log("nama page tidak boleh kosong");
        return;
    }

    const namaClass =  _.capitalize(name).replace(' ', '');
    const template = `
    import 'package:flutter/material.dart';

    class Makuro${namaClass} extends StatelessWidget {
    const Makuro${namaClass}({Key? key}) : super(key: key);

        @override
        Widget build(BuildContext context) {
            return const Text('${namaClass}');
        }
    }
    `

    const _controllerPath = path.join(__dirname, `./../../../client/lib/makuro_pages/makuro_${_.snakeCase(name)}.dart`);
    if (!fs.existsSync(_controllerPath)) {
        fs.writeFileSync(_controllerPath, jsBeauty(template), "utf8");
        console.log("Page berhasil ditambahkan".green);
    }else{
        console.log('file sudah ada'.red);
    }
    
});