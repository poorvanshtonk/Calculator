const requestHandler = (req, res) => {
    console.log(req.url, req.method);
    

    if(req.url === "/") {
        res.setHeader("Content-Type", "text/html");
        res.write(`
                <html>
                <head><title>First Page</title></head>
                <body><h1>Hello!</h1>
                <h3>Welcome to the calculator</h3>
                <hr>
                <a href="/calculator"> Let's go to the Calculator</a>
                </body>
                </html>
        `);
        res.end();
    }else if (req.url === "/calculator"){
        res.setHeader("Content-Type", "text/html");
        res.write(`
                <html>
                <head><title>Calculator</title></head>
                <body>
                <h1>Calculator</h1>
                <form action="/result" method="POST">
                <input type="number" name="num1" placeholder="Enter first number" required>
                <input type="number" name="num2" placeholder="Enter second number" required>
                <button type="submit">Calculate</button>
                </form>
                </body>
                </html>
        `);
        res.end();
    }else if (req.url === "/result" && req.method === "POST"){
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
            res.end();
        });
    }else{
        console.log("404 Not Found");
        res.end();
    }
};

module.exports = requestHandler; 