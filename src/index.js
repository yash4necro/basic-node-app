import { add, sub, mod, prod } from "./math.js";

const a = (add(3, 4));
const b = (sub(3, 4));
const c = (mod(3, 4));
const d = (prod(3, 4));

const result = {
    add: a,
    sub: b,
    mod: c,
    prod: d
}

console.log(result);