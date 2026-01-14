const sumHandler = (req, res) => {
    const body = [];
        req.on("data", (chunk) =>{
            body.push(chunk);
        });
        req.on("end", () => {
            const parsedBody = Buffer.concat(body).toString();
            const num1 = parseFloat(parsedBody.split("&")[0].split("=")[1]);
            const num2 = parseFloat(parsedBody.split("&")[1].split("=")[1]);
            const result = num1 + num2;

            res.setHeader("Content-Type", "text/html");
            res.write(`
                <html>
                <head><title>Calculation Result</title></head>
                <body>
                <h1>Calculation Result</h1>
                <p>The result of ${num1} + ${num2} is ${result}</p>
                <a href="/calculator">Back to Calculator</a>
                </body>
                </html>
            `);
            
            console.log(parsedBody);
            console.log(result);
            res.end();
        });
}






module.exports = sumHandler;