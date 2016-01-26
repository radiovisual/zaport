import socket
import sys

# Create a TCP/IP socket
sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)

port = sys.argv[1]

# Bind the socket to the port
server_address = ('localhost', int(port))
print sys.stderr, 'starting up on %s port %s' % server_address
sock.bind(server_address)

raw_input("click any key to shutdown...")