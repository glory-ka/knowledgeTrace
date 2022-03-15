```vim
"       HOW TO DO 90% OF WHAT PLUGINS DO (WITH JUST VIM)


" FEATURES TO COVER:
" - Fuzzy File Search
" - Tag jumping
" - Autocomplete
" - File Browsing
" - Snippets
" - Build Integration (if we have time)




" {{{ BASIC SETUP
BASIC SETUP:
--------------

" enter the current millenium
set nocompatible  "Don't try to behave like vi

" enable syntax and plugins (for netrw)
syntax enable
filetype plugin on




FINDING FILES
--------------

" Search down into subfolders
" Provides tab-completion for all file-related tasks
set path+=**


" Display all matching files when we tab complete
set wildmenu


" NOW WE CAN:
" - Hit tab to :find by partial match
" - Use * to make it fuzzy

" THINGS TO CONSIDER:
" - :b lets you autocomplete any open buffer
" :b <openbuffername> or press tab to autocomplete

"b expends to bNext
"a buffer is an open file that was not closed with q
"good when you open new edit in the same window



" TAG JUMPING:

" Create the `tags` file (may need to install ctags first)
command! MakeTags !ctags -R .

" NOW WE CAN:
" - Use ^] to jump to tag under cursor
" - Use g^] for ambiguous tags
" - Use ^t to jump back up the tag stack

" THINGS TO CONSIDER:
" - This doesn't help if you want a visual list of tags





" AUTOCOMPLETE:

" The good stuff is documented in |ins-completion|

" HIGHLIGHTS:
" - ^x^n for JUST this file
" - ^x^f for filenames (works with our path trick!)
" - ^x^] for tags only
" - ^n for anything specified by the 'complete' option

" NOW WE CAN:
" - Use ^n and ^p to go back and forth in the suggestion list





FILE BROWSING:

" Tweaks for browsing

let g:netrw_banner=0        " disable annoying banner
let g:netrw_browse_split=4  " open in prior window
let g:netrw_altv=1          " open splits to the right
let g:netrw_liststyle=3     " tree view
let g:netrw_list_hide=netrw_gitignore#Hide()
let g:netrw_list_hide.=',\(^\|\s\s\)\zs\.\S\+'


" NOW WE CAN:
" - :edit a folder to open a file browser
" - \<CR>/v/t to open in an h-split/v-split/tab
" - check |netrw-browse-maps| for more mappings



SNIPPETS

" Read an empty HTML template and move cursor to title
nnoremap ,html :-1read $HOME/.vim/.skeleton.html\<CR>3jwf>a




"                    Download this file at:
"                github.com/mcantor/no_plugins

```
