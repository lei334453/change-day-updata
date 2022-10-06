declare function handleRequest(url: string, method: "GET" | "POST"): void;

//方式一
// const req = { url: "https://example.com", method: "GET" as "GET" };
// handleRequest(req.url, req.method);

// declare function handleRequest(url: string, method: "GET" | "POST"): void;
//方式二
const req = { url: "https://example.com", method: "GET" };
handleRequest(req.url, req.method as "GET");