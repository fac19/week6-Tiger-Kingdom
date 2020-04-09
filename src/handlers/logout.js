function logoutHandler(request, response) {
    if (request.headers.cookie) {
        response.writeHead(
            302, {
                'Location': '/',
                'Set-Cookie': `TigerKingdom=0; HttpOnly; Max-Age=0`
            });
    }
    return response.end();
}

module.exports = logoutHandler;