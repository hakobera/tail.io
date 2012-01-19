tail.io
=======

This tool is a browser based `tail -f`, read data from stdin then convert it to HTML
and send it using Socket.IO.

How to install
--------------

    npm install tail.io

How to use
----------

Use tailio command with pipe.

    $ (while :; do; date; sleep 1; done) | tailio
    Server listening on port XXXXX

After server start, you can see output in `http://127.0.0.1:XXXXX`.

If you use Mac OS X, you can open browser after server start using with `--exec open` option.

    $ (while :; do; date; sleep 1; done) | tailio --exec open