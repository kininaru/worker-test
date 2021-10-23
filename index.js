addEventListener("fetch", (event) => {
  event.respondWith(
    handleRequest(event.request).catch(
      (err) => new Response(err.stack, { status: 500 })
    )
  );
});
  
async function handleRequest(request) {
 let resp = {};
  resp.code = 0;
   resp.msg = await Kininaru.get("waifu");
   resp.time = Date.now();
   return new Response(JSON.stringify(resp), {
       headers: { "Content-Type": "application/json" },
   });
}