const Output = ({ content }) => {
    const noComment = removeComments(content);
  return (
    <>
      <h1 className="content">Output</h1>
      <pre className="content">{noComment}</pre>
    </>
  );
};

const removeComments = (text) => {

    if (!text) {
        return '';
    }

    let isSingleLine = false;
    let isMultiLine = false;
    let output = "";
    let i = 0;
    let lastCharN = false;

    while (i < text.length) {

        if(text.charAt(i) === "/" && text.charAt(i + 1) === "/") {
            isSingleLine = true;
            i += 2;
            continue;
        }

        if(isSingleLine && text.charAt(i) === '\n') {
            isSingleLine = false;
            continue;
        }

        if(text.charAt(i) === "/" && text.charAt(i + 1) === "*") {
            isMultiLine = true;
            i += 2;
            continue;
        }

        if(text.charAt(i) === "*" && text.charAt(i + 1) === "/") {
            isMultiLine = false;
            i += 2;
            continue;
        }

        if (!isSingleLine && !isMultiLine) {
            if (text.charAt(i) === "\n") {
                if (!lastCharN) {
                    output += "\n";
                    lastCharN = true;
                }
            } else {
                output += text.charAt(i);
                lastCharN = false;
            }
        }
        i++;
    }
    return output;
}

export default Output;
