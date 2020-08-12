# Simple Cors

You should only use this if you are not using any authentication / authorization mechanism

## Usage Example

```
  
import { simpleCors } from "https://deno.land/x/simple-cors/simple-cors.ts";
import { opine} from "https://deno.land/x/opine/mod.ts";

const app = opine();
app.use(simpleCors)

app.get('/', (req: any, res: any) => {
  res.send('Hello World - I accept any request from any origin because I am using simpleCors');
});

     
```