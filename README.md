# Tab To Next Tab

A minimal JavaScript mod for Zen Browser using the Sine mod format.

## Target

Zen Browser 1.22.x / Firefox 156.x.

## What it does

- Plain `Tab` -> selects the next open tab.
- From the last tab, `Tab` wraps to the first tab.
- `Shift+Tab` is untouched.
- `Ctrl+Tab` is untouched.
- `Alt+Tab` is untouched.
- `Meta+Tab` is untouched.
- No CSS or visual modifications.

## Installation with Sine

1. Open Zen Settings -> Sine.
2. Add this mod as a local/custom GitHub mod using the repository folder.
3. If Sine requires permission for unofficial JavaScript mods, enable that option.
4. Enable the mod.
5. Fully restart Zen.

## Important

This is a privileged browser-chrome JavaScript mod. A normal Firefox WebExtension cannot reliably replace the browser's Tab focus behavior everywhere, so this mod must run in Zen's browser UI context.
