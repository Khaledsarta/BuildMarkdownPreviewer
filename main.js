function updatePreview() {
    let previewElement = document.getElementById("preview");
    let editorValue = document.getElementById("editor").value;
    let markedUpHTML = marked(editorValue);
    previewElement.innerHTML = markedUpHTML;
}

function setDefault() {
    let defaultText = `\
# Khaled Elsarta 
## Markdown Previewer
[Khaled](https://www.linkedin.com/in/khaled-sarta/).
<dl>
<dt>Definition list</dt>
<dd>It is something people use sometimes</dd>

<dt>Markdown in HTML</dt>
<dd>Does *not* work **very** well. Use HTML <em>tags</em>.</dd>
</dl>

\`inline code\`

\`\`\`
function exampleOf(){
return multilineCodeBlock;
}
\`\`\`
- Code
- All
- Day

> block quote

**Bold**

![Khaled](https://images.unsplash.com/photo-1721332149112-c54e68990d99?w=100&amp;auto=format&amp;fit=crop&amp;q=60&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0MXx8fGVufDB8fHx8fA%3D%3D)
    `;
    let editorField = document.getElementById("editor");
    let previewElement = document.getElementById("preview");
    editorField.value = defaultText;
    previewElement.innerHTML = marked(defaultText);
}