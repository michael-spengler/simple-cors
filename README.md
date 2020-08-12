# Simple Cors

You should only use this if you are not using any authentication / authorization mechanism.

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


## Support my Open Source Contributions  

If you like my work please consider downloading the brave browser via my promotion link: [https://brave.com/fan464](https://brave.com/fan464).  

![![](https://brave.com/)](https://brave.com/wp-content/uploads/2019/01/logotype-full-color.svg)
