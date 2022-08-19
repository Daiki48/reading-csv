import { parse } from "https://deno.land/std@0.79.0/encoding/csv.ts";
import { BufReader } from "https://deno.land/std@0.79.0/io/bufio.ts";

const file = await Deno.open("./data/data.csv");
try {
  const buf = BufReader.create(file);
  const result = await parse(buf);
  console.log(result);
} finally {
  file.close();
}
