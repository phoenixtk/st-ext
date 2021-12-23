import * as vscode from 'vscode';

const global = {
	money: 0
};

export function activate(context: vscode.ExtensionContext) {

	let disposable = vscode.commands.registerCommand('st-ext.helloWorld', () => {
		vscode.window.showInformationMessage('Hello World from st ext!');
	});

	let disposable2 = vscode.commands.registerCommand('st-ext.printMoney', () => {
		global.money++;
		vscode.window.showInformationMessage('printMoney:' + global.money);
	});

	context.subscriptions.push(disposable);
	context.subscriptions.push(disposable2);
}

export function deactivate() { }
