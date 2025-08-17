import { describe,it,expect } from "vitest";
import { sum,sub } from "../src/into";

describe("sum",()=>{
    it("it must return sum of 2 numbers",()=>{
        expect(sum(2,3)).toBe(5)
    })
})

describe("sub",()=>{
    it("it must return sb of 2 numbers",()=>{
        expect(sub(5,1)).toBe(4)
    })
})