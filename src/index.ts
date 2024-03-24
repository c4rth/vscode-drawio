import * as vscode from "vscode";
import { Extension } from "./Extension";

export function activate(context: vscode.ExtensionContext) {
	context.subscriptions.push(new Extension(context));
}

export function deactivate() { }
