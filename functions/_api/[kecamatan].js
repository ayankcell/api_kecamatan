import kecamatan from "../wilayah/kecamatan";
import provinsi from "../wilayah/provinsi";
import getObjects from "../lib/jsonsearch";

export async function onRequestGet({ params, request }) {
  try {
    const query = params.kecamatan
    const result = getObjects(kecamatan, 'sub_district', decodeURIComponent( query.toUpperCase()) )
    console.log(result)

    return new Response( JSON.stringify(result), {
      headers: { "content-type": "text/plain" },
    });
  } catch (error) {
    return new Response(error, {
      headers: { "content-type": "text/plain" },
    });
  }
}
