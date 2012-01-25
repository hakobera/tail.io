tail.io
=======

This tool is a browser based `tail -f`, read data from stdin then convert it to HTML
and send it using Socket.IO.

How to install
--------------

    npm install tail.io -g

How to use
----------

    Usage: tailio [options]

    Options:

        -h, --help           output usage information
        -V, --version        output the version number
        -c, --exec <command> set execute command after server start
        -p, --port <port>    set server port number
        -v, --verbose        enable output verbose log to console

Use tailio command with pipe.

    $ (while :; do; date; sleep 1; done) | tailio
    Server listening on port XXXXX

After server start, you can see output in `http://127.0.0.1:XXXXX`.

If you use Mac OS X, you can open browser after server start using with `--exec open` option.

    $ (while :; do; date; sleep 1; done) | tailio --exec open
    
License
-------
    (The MIT License)

    Copyright (c) 2012 Kazuyuki Honda <hakobera@gmail.com>

    Permission is hereby granted, free of charge, to any person obtaining
    a copy of this software and associated documentation files (the
    'Software'), to deal in the Software without restriction, including
    without limitation the rights to use, copy, modify, merge, publish,
    distribute, sublicense, and/or sell copies of the Software, and to
    permit persons to whom the Software is furnished to do so, subject to
    the following conditions:

    The above copyright notice and this permission notice shall be
    included in all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
    EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
    MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
    IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
    CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
    TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
    SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.