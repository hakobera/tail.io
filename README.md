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

        -h,  --help           output usage information
        -V,  --version        output the version number
        -c,  --exec <command> set execute command after server start
        -v,  --verbose        enable output verbose log to console

Use tailio command with pipe.

    $ (while :; do; date; sleep 1; done) | tailio
    Server listening on port XXXXX

After server start, you can see output in `http://127.0.0.1:XXXXX`.

If you use Mac OS X, you can open browser after server start using with `--exec open` option.

    $ (while :; do; date; sleep 1; done) | tailio --exec open
