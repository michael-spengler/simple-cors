import { simpleCors } from "https://deno.land/x/simple-cors/simple-cors.ts";
import { opine} from "https://deno.land/x/opine/mod.ts";

const app = opine();
app.use(simpleCors)

app.get('/', (req: any, res: any) => {
  res.send('Hello World - I accept any request from any origin because I am using simpleCors.');
});

app.listen(3004)
console.log(`listening on http://localhost:3004`)