import * as vscode from 'vscode';

function registerHoverProvider1() {
  /* javascript悬停后 添加Add comment命令 */
	vscode.languages.registerHoverProvider(
    'javascript',
    new (class implements vscode.HoverProvider {
      provideHover(
        _document: vscode.TextDocument,
        _position: vscode.Position,
        _token: vscode.CancellationToken
      ): vscode.ProviderResult<vscode.Hover> {
        const commentCommandUri = vscode.Uri.parse(`command:editor.action.addCommentLine`);
        const contents = new vscode.MarkdownString(`[Add comment](${commentCommandUri})`);

        // To enable command URIs in Markdown content, you must set the `isTrusted` flag.
        // When creating trusted Markdown string, make sure to properly sanitize all the
        // input content so that only expected command URIs can be executed
        contents.isTrusted = true;

        return new vscode.Hover(contents);
      }
    })()
  );
}

function registerHoverProvider2() {
  /* javascript悬停后 添加Add comment命令 */
	vscode.languages.registerHoverProvider(
    'javascript',
    new (class implements vscode.HoverProvider {
      provideHover(
        _document: vscode.TextDocument,
        _position: vscode.Position,
        _token: vscode.CancellationToken
      ): vscode.ProviderResult<vscode.Hover> {
        const args = [{ resourceUri: _document.uri }];
        const stageCommandUri = vscode.Uri.parse(
          `command:git.stage?${encodeURIComponent(JSON.stringify(args))}`
        );
        const contents = new vscode.MarkdownString(`[Stage file](${stageCommandUri})`);
        contents.isTrusted = true;
        return new vscode.Hover(contents);
      }
    })()
  );
}

function registerHoverProvider3() {
  /* javascript悬停后 添加Add comment命令 */
	vscode.languages.registerHoverProvider(
    'vue',
    new (class implements vscode.HoverProvider {
      provideHover(
        _document: vscode.TextDocument,
        _position: vscode.Position,
        _token: vscode.CancellationToken
      ): vscode.ProviderResult<vscode.Hover> {
        const args = `宿爸爸`;
        const testCommand1 = vscode.Uri.parse(
          `command:st-ext.testCommand1?${encodeURIComponent(JSON.stringify(args))}`
        );
        const contents = new vscode.MarkdownString(`[testCommand1](${testCommand1})`);
        contents.isTrusted = true;
        return new vscode.Hover(contents);
      }
    })()
  );
}

const rhp = {
  registerHoverProvider1,
  registerHoverProvider2,
  registerHoverProvider3
};

export default rhp;