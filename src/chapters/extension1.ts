/* import * as vscode from 'vscode';
import commands from './commands';

const global = {
	money: 0
};

function isHigher(str1: any, str2: any) {
	str2 = '0.0.0';
	let _p1 = parseInt(str1.split('.').pop());
	let _p2 = parseInt(str2.split('.').pop());
	return _p1 > _p2;
}

export function activate(context: vscode.ExtensionContext) {

	let disposable = vscode.commands.registerCommand('st-ext.helloWorld', () => {
		vscode.window.showInformationMessage('Hello World from st ext!');
	});

	let disposable2 = vscode.commands.registerCommand('st-ext.printMoney', () => {
		global.money++;
		vscode.window.showWarningMessage('printMoney:' + global.money);
	});

	let disposable3 = vscode.commands.registerCommand('st-ext.shownVersion', () => {
			// on activate
			const versionKey = 'shown.version';
			context.globalState.setKeysForSync([versionKey]);

			// later on show page
			const currentVersion = context.extension.packageJSON.version;
			const lastVersionShown = context.globalState.get(versionKey);
			if (!isHigher(currentVersion, lastVersionShown)) {
					return;
			}
			context.globalState.update(versionKey, currentVersion);
			// show page
			vscode.window.showErrorMessage('shown.version:' + context.globalState.get(versionKey));
	});

	let disposable4 = vscode.commands.registerCommand('st-ext.stCommands', () => {
		commands.commentLine();
	});


	context.subscriptions.push(disposable);
	context.subscriptions.push(disposable2);
	context.subscriptions.push(disposable3);
	context.subscriptions.push(disposable4);
}

export function deactivate() { }
 */