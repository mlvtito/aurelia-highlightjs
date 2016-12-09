#!/usr/bin/env python
import socket
import subprocess
import sys
import datetime

remoteServer = "localhost"
remoteServerIP="127.0.0.1"

t1 = datetime.now()

# Using port range
# Error handling
try:
    scan_port()

except socket.error:
    print "Error connect"
    sys.exit()

t2 = datetime.now()

# Calculates duration
total =  t2 - t1

# Printing the information to screen
print 'Completed in: '
  , totalcount.balance