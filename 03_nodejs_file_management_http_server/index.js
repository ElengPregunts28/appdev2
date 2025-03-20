const http = require('http');
const fs = require('fs').promises;
const path = require('path');
const url = require('url');
const EventEmitter = require('events');

const fileEvents = new EventEmitter();


fileEvents.on("fileAction", (message) => {
    console.log(`File Action: ${message}`);
});

const server = http.createServer( async (req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;
    const query = parsedUrl.query;

    res.setHeader('Content-Type', 'text/plain');

    try {
        if (pathname === '/create') {
            const filePath = path.join(__dirname, 'newfile.txt');
            await fs.writeFile(filePath, 'New File');
            fileEvents.emit('fileAction', `File created: ${filePath}`);
            res.statusCode = 200; 
            res.end('File created successfully');
        }
        
        else if (pathname === '/read') {
            const filePath = path.join(__dirname, 'newfile.txt');
            const data = await fs.readFile(filePath, 'utf8');
            fileEvents.emit('fileAction', `File read: ${filePath}`);
            res.statusCode = 200;
            res.end(`File content: ${data}`);
        }

        else if (pathname === '/update') {
            const filePath = path.join(__dirname, 'newfile.txt');
            await fs.appendFile(filePath, 'Appended content');
            fileEvents.emit('fileAction', `File updated: ${filePath}`);
            res.statusCode = 200;
            res.end('File updated successfully');
        }

        else if (pathname === '/delete') {
            const filename = query.filename;
            if (!filename) {
                res.statusCode = 400;
                res.end('Filename is required.');
            } else {
                const filePath = path.join(__dirname, filename);
                await fs.unlink(filePath);
                fileEvents.emit('fileAction', `File deleted: ${filePath}`);
                res.statusCode = 200;
                res.end (`File deleted: ${filename}`);
            }
        } else {
            res.statusCode = 404;
            res.end('Route not found');
        }
    } catch (err) {
        res.statusCode = 500;
        res.end(`Error: ${err.message}`);
    }
});

const port = 3000;
const host = 'localhost';

server.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}/`);
});