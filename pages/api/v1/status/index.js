import database from "../../../../infra/database.js";

async function status(request, response) {
  const result = await database.query("SELECT 1 + 1 sum;");
  console.log(result.rows);
  response.status(200).json({ chave: "ip ip urrão" });
}

export default status;
