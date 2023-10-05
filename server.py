import os
from http.server import BaseHTTPRequestHandler, HTTPServer

class SimpleHTTPRequestHandler(BaseHTTPRequestHandler):
    def do_GET(self):
        if self.path == '/':
            # Obtener la lista de directorios del disco local C
            directories = os.listdir('C:/')

            self.send_response(200)
            self.send_header('Content-type', 'text/plain')
            self.end_headers()

            # Convertir la lista de directorios en una cadena
            directories_str = '\n'.join(directories)
            self.wfile.write(directories_str.encode())
        else:
            self.send_response(404)
            self.end_headers()

def run():
    port = 8000
    server_address = ('', port)
    httpd = HTTPServer(server_address, SimpleHTTPRequestHandler)
    print(f"Servidor corriendo en el puerto {port}")
    httpd.serve_forever()

if __name__ == '__main__':
    run()
