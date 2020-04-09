function logoutHandler(request, response) {
    if (request.headers.cookie) {
        response.writeHead(
            302, {
                'Location': '/',
                'Set-Cookie': `TigerKingdom=hjk; HttpOnly; Max-Age=0`
            });
    }
    return response.end(console.log('hello'));
}

module.exports = logoutHandler;