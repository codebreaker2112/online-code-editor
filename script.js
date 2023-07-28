function runCode() {
    const code = document.getElementById("editor").value;
  
    // Create an iframe to run the code
    const outputFrame = document.getElementById("output");
    const iframeDocument = outputFrame.contentDocument;
    iframeDocument.open();
    iframeDocument.write(code);
    iframeDocument.close();
  }
  