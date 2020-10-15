#!/bin/bash

# cleanup
echo "CLEANUP"
cd /web/group/trace/htdocs/
/bin/rm -r *

# unpack zip
echo "UNPACK"
cp ~/out.zip /web/group/trace/htdocs/
cd /web/group/trace/htdocs/
unzip /web/group/trace/htdocs/out.zip
rm /web/group/trace/htdocs/out.zip
cd /web/group/trace/htdocs/
chmod -R 775 *

echo "DONE"
