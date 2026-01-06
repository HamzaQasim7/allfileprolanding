export function onRequest(context) {
  const url = new URL(context.request.url);
  
  // If it's a static asset, serve it directly
  if (url.pathname.startsWith('/static/') || 
      url.pathname.endsWith('.js') || 
      url.pathname.endsWith('.css') || 
      url.pathname.endsWith('.png') || 
      url.pathname.endsWith('.jpg') || 
      url.pathname.endsWith('.ico') ||
      url.pathname.endsWith('.json')) {
    return context.next();
  }
  
  // For all other routes, serve index.html
  return env.ASSETS.fetch(context.request);
}
