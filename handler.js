const sumHandler = require("./sum");

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
        sumHandler(req, res);
    }else{
        console.log("404 Not Found");
        res.end();
    }
};

module.exports = requestHandler; 