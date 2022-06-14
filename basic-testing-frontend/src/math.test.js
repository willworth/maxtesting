import { it, expect, test} from 'vitest';
import {add} from "./math";

it("should sum all nums", ()=>{
 const result =   add( [1,2,3]);
 //https://vitest.dev/api/#tobe
 expect(result).toBe(6)
})