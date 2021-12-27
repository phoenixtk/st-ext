import * as vscode from 'vscode';
import commands from './commands';
import rhp from './registerHoverProvider';

import { StTreeDataProvider } from './stTreeDataProvider';

export function activate(context: vscode.ExtensionContext) {

	console.log('do activate');
	

	let disposable = vscode.commands.registerCommand('st-ext.stCommands', () => {
		// commands.commentLine();
		commands.printDefinitionsForActiveEditor();
	});
	context.subscriptions.push(disposable);

	// rhp.registerHoverProvider1();
	// rhp.registerHoverProvider2();

	for (const stCommand of commands.stCommands) {
		context.subscriptions.push(vscode.commands.registerCommand(stCommand.name, stCommand.commandHandler));
	}
	rhp.registerHoverProvider3();



	const rootPath = (vscode.workspace.workspaceFolders && (vscode.workspace.workspaceFolders.length > 0))
		? vscode.workspace.workspaceFolders[0].uri.fsPath : undefined;
	const stTreeDataProvider = new StTreeDataProvider(rootPath);
	vscode.window.registerTreeDataProvider('stExplorer', stTreeDataProvider);
}

export function deactivate() { }
