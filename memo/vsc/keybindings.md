## shortcuts

### Good to memorize

- Open File/Folder From Sidebar
  `⌘+Down`

- Add Block Comment
  `Shift+⌥+A`

- Go to Entity (Functions, vars, etc)
  `Cmd+Shift+O`

### keybindings.json

[keybindings.json](https://github.com/xyyolab/dotfiles/blob/master/vsc/keybindings.json)

```json
// Place your key bindings in this file to override the defaultsauto[]
[
  {
    "key": "alt+cmd+e",
    "command": "workbench.extensions.action.openExtensionsFolder"
  },
  {
    "key": "alt+enter",
    "command": "editor.action.showContextMenu",
    "when": "textInputFocus"
  },
  {
    "key": "shift+f10",
    "command": "-editor.action.showContextMenu",
    "when": "textInputFocus"
  },
  {
    "key": "cmd+i",
    "command": "expandLineSelection",
    "when": "textInputFocus"
  },
  {
    "key": "cmd+l",
    "command": "-expandLineSelection",
    "when": "textInputFocus"
  },
  {
    "key": "cmd+]",
    "command": "workbench.action.nextEditor"
  },
  {
    "key": "alt+cmd+right",
    "command": "-workbench.action.nextEditor"
  },
  {
    "key": "cmd+[",
    "command": "workbench.action.previousEditor"
  },
  {
    "key": "alt+cmd+left",
    "command": "-workbench.action.previousEditor"
  },
  {
    "key": "cmd+1",
    "command": "workbench.action.toggleSidebarVisibility"
  },
  {
    "key": "cmd+b",
    "command": "-workbench.action.toggleSidebarVisibility"
  },
  {
    "key": "cmd+q cmd+q",
    "command": "workbench.action.quit"
  },
  {
    "key": "cmd+q",
    "command": "-workbench.action.quit"
  },
  {
    "key": "cmd+2",
    "command": "workbench.action.toggleActivityBarVisibility"
  },
  {
    "key": "cmd+o cmd+o",
    "command": "editor.action.smartSelect.grow"
  },
  {
    "key": "cmd+p",
    "command": "workbench.action.quickOpen"
  },
  {
    "key": "cmd+p",
    "command": "-workbench.action.quickOpen"
  },
  {
    "key": "cmd+g cmd+g",
    "command": "git-graph.view"
  },
  {
    "key": "ctrl+shift+cmd+a",
    "command": "workbench.action.debug.start",
    "when": "!inDebugMode"
  },
  {
    "key": "f5",
    "command": "-workbench.action.debug.start",
    "when": "!inDebugMode"
  },
  {
    "key": "ctrl+shift+cmd+a",
    "command": "workbench.action.debug.continue",
    "when": "inDebugMode"
  },
  {
    "key": "f5",
    "command": "-workbench.action.debug.continue",
    "when": "inDebugMode"
  },
  {
    "key": "ctrl+shift+cmd+a",
    "command": "workbench.action.debug.restart",
    "when": "inDebugMode"
  },
  {
    "key": "shift+cmd+f5",
    "command": "-workbench.action.debug.restart",
    "when": "inDebugMode"
  },
  {
    "key": "shift+alt+l",
    "command": "workbench.files.action.showActiveFileInExplorer"
  },
  {
    "key": "ctrl+b 5",
    "command": "workbench.action.splitEditor"
  },
  {
    "key": "ctrl+alt+cmd+[IntlYen]",
    "command": "-workbench.action.splitEditor"
  },
  {
    "key": "ctrl+b 5",
    "command": "workbench.action.splitEditorLeft"
  },
  {
    "key": "ctrl+alt+cmd+[IntlYen]",
    "command": "-workbench.action.terminal.split",
    "when": "terminalFocus"
  },
  {
    "key": "ctrl+b 2",
    "command": "workbench.action.splitEditorDown"
  },
  {
    "key": "ctrl+h",
    "command": "workbench.action.navigateLeft"
  },
  {
    "key": "ctrl+l",
    "command": "workbench.action.navigateRight"
  },
  {
    "key": "ctrl+k",
    "command": "workbench.action.navigateUp"
  },
  {
    "key": "ctrl+j",
    "command": "workbench.action.navigateDown"
  }
]
```
