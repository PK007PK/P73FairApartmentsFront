import { render, screen } from "@testing-library/react";
import React from "react";
import '@testing-library/jest-dom'
import { FormField } from "./FormField";


describe('Test Button component', ()=>{
    it('Render the component', ()=>{
        render(<FormField label="Testing label" name="Testing name" value="Start value" onChange={()=>{}}/>)
    })
})
