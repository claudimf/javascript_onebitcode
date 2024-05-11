// import { z } from "./node_modules/zod/lib/index.mjs" -> sem webpack

import { z } from "zod"
const mySchema = z.string()

mySchema.parse("Fulano")
mySchema.parse(42)