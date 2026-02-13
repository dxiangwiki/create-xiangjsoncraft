#!/usr/bin/env node
import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';
import inquirer from 'inquirer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 欢迎信息
console.log('\n  欢迎使用 xiangjsoncraft 创建工具！');
console.log('  让我们来配置你的项目...\n');

// 1. 获取用户输入
const answers = await inquirer.prompt([
    {
        type: 'input',
        name: 'projectName',
        message: '请输入项目名称:',
        default: 'xiangjsoncraft-app'
    },
    {
        type: 'list',
        name: 'template',
        message: '选择模板类型:',
        choices: ['basic'],
        default: 'basic'
    }
]);

const { projectName, template } = answers;
const projectDir = path.resolve(process.cwd(), projectName);
const templateDir = path.join(__dirname, 'templates', template);

// 2. 检查项目目录是否存在
if (fs.existsSync(projectDir)) {
    console.error(`❌ 错误：目录 ${projectName} 已存在！`);
    process.exit(1);
}

try {
    console.log(`\n正在创建项目: ${projectName}`);

    // 3. 复制模板文件
    fs.ensureDirSync(projectDir);
    const templateFiles = fs.readdirSync(templateDir);

    console.log(`\n模板文件列表 (${templateDir}):`);
    templateFiles.forEach(file => console.log(`- ${file}`));

    console.log('\n正在从模板复制文件...');
    for (const file of templateFiles) {
        const srcPath = path.join(templateDir, file);
        const destPath = path.join(projectDir, file);
        const content = fs.readFileSync(srcPath, 'utf8');

        // 替换占位符（项目名称）
        const finalContent = content.replace(/{{projectName}}/g, projectName);

        fs.writeFileSync(destPath, finalContent, 'utf8');
    }

    // 4. 输出成功信息
    console.log('\n项目文件列表:');
    fs.readdirSync(projectDir).forEach(file => console.log(`- ${file}`));

    console.log('\n✅ 项目创建完成!\n');
    console.log('进入项目目录:');
    console.log(`  cd ${projectName}\n`);
    console.log('安装依赖:');
    console.log('  npm install\n');
    console.log('开始使用:');
    console.log('  npm run start\n');

} catch (err) {
    console.error(`❌ 项目创建失败: ${err.message}`);
    process.exit(1);
}