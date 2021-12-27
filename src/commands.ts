import * as vscode from 'vscode';

/* 添加注释 */
function commentLine() {
  vscode.commands.executeCommand('editor.action.addCommentLine');
}

/* 编辑器选中区域打印其定义 */
async function printDefinitionsForActiveEditor() {
  const activeEditor = vscode.window.activeTextEditor;
  if (!activeEditor) {
    return;
  }

  const definitions = await vscode.commands.executeCommand<vscode.Location[]>(
    'vscode.executeDefinitionProvider',
    activeEditor.document.uri,
    activeEditor.selection.active
  );

  for (const definition of definitions) {
    console.log(definition);
  }
}

const command1 = {
  name: 'st-ext.testCommand1',
  commandHandler: (name: string = 'world') => {
    console.log(`Hello ${name}!!!`);
  }
};
const stCommands = [];
stCommands.push(command1);

let commands = {
  commentLine,
  printDefinitionsForActiveEditor,
  stCommands
};

export default commands;