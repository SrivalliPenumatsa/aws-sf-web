export async function GET() {
    const res = await fetch(
      `${process.env.BACKEND_URL}/api/hello`,
      {
        cache: 'no-store',
      }
    );

    console.log("Response status:", res.status);
    
  
    const data = await res.json();
  
    return Response.json(data);
  }