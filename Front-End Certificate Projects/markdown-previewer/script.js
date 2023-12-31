document.addEventListener("DOMContentLoaded", function () {
	const editor = document.getElementById("editor");
	const preview = document.getElementById("preview");
	const updatePreview = () => {
		const markdownText = editor.value;
		const htmlText = marked(markdownText);
		preview.innerHTML = htmlText;
	};

	editor.addEventListener("input", updatePreview);

	const defaultMarkdown = `
# Welcome to my Markdown Previewer

## This is a sub-heading

### This is a size 3 heading

You can also make text **bold**
or _italic_.
or **_both_**
you can ~~cross stuff out~~
you can create [link to google](https://www.google.com)
another way to do it is [link to BBC](https://www.bbc.com)

> Tab block quotes



make tables
Header 1 | Header 2 | Header 3
-------- | -------- | --------
Row 1a | Row 1b | Row 1c
Row 2a | Row 2b | Row 2c

- Main list
- sub-list
- sub-sub-list
- sub-sub-sub-list

1. Numbered List

- with a sub-list

2.Next item in list
3.You can also embed images:
![alt text](https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png)
`;

	editor.value = defaultMarkdown;
	updatePreview();
});