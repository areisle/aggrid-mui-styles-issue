# Issue with AgGrid Cell Renderer + Mui Theme Provider

Mui styles are being injected twice. to see the issue, run `npm start` and then look at the `<head>` in devtools. there will be 2 `<style data-jss data-meta="MuiButtonBase">` tags (as well as other duplicates)
