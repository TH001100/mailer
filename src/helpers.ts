const getHtml = ({intro, body, outro}) => {
    try{
       const html =    `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body {
              font-family: Arial, sans-serif;
            }
            .content {
              padding: 20px;
            }
            .intro, .body, .outro {
              margin-bottom: 20px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="content">
              <div class="intro">
                <p>${intro}</p>
              </div>
              <div class="body">
                <p>${body}</p>
              </div>
              <div class="outro">
                <p>${outro}</p>
              </div>
            </div>
          </div>
        </body>
        </html>
        `
        return html
    }catch(e){
        console.log(e.message)
    }
}

export {getHtml}