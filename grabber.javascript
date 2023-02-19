function getToken() {
    window.alert("You must enter the mobile view for this to work!");
    window.alert("So make sure your in mobile view!");
    window.open("https://i.postimg.cc/KvPk6xQG/Untitled.png");
    let popup;
    popup = window.open('', '', `top=0,left=${screen.width-800},width=850,height=${screen.height}`);
    if(!popup || !popup.document || !popup.document.write) return alert('Popup blocked! Please allow popups and after you do so, rerun the code');
    
    window.dispatchEvent(new Event('beforeunload'));
    token = popup.localStorage.token

    popup.document.write(`
    <!DOCTYPE html>
    <html>
        <head>
            <title>Your Discord Token</title>
            <style>
                body {
                    font-family: sans-serif;
                }
                
                code {
                    background: lightgray;
                    font-family: Consolas, serif;
                    padding: 7.5px;
                    border-radius: 7.5px;
                    margin-right: 5px;
                }
    
                .warning {
                    background: yellow;
                    border: 5px solid red;
                    padding: 7.5px;
                    margin-top: 40px;
                }
                button {
                    padding: 6px;
                }
                .noselect {
                	-webkit-user-select: none;
					-khtml-user-select: none;
					-moz-user-select: none;
					-ms-user-select: none;
					-o-user-select: none;
					user-select: none;
                }
            </style>
        </head>
        <body>
            <h1>Your Discord Token</h1>
            <code id="token_p"></code>
            <button class="noselect" id="copy">Copy</button>
            <button class="noselect" id="close">Close</button>
    </html>
    `)

    token = token.replace("\"", "");
    token = token.replace("\"", "");

    popup.document.getElementById('token_p').innerHTML = token;

    // CLOSE BUTTON CODE
    var closeButton = popup.document.getElementById("close");
    closeButton.addEventListener('click', oncloseButtonClick);
    function oncloseButtonClick(){
        popup.close();
    }

    // COPY BUTTON CODE
    var copyButton = popup.document.getElementById("copy");
    copyButton.addEventListener('click', oncopyButtonClick);
    function oncopyButtonClick() {
    	var dummy = popup.document.createElement("textarea");
	    popup.document.body.appendChild(dummy);
	    dummy.value = token;
	    dummy.select();
	    popup.document.execCommand("copy");
	    popup.document.body.removeChild(dummy);

  	    popup.alert("Successfully copied your Discord token!")
    }

}		
getToken()
