import { add } from "../update"

describe('user hander',()=>{
    it('should take in 2 arguments and return the sum', ()=>{
        expect(add(1,2)).toBe(3)
    })
})