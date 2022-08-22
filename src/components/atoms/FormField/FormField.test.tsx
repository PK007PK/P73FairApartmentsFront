import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
// import "@testing-library/jest-dom/extend-expect";
import '@testing-library/jest-dom'
import { FormField } from "./FormField";

describe('Test FormField component', () => {
    it('Render the component', ()=>{
        render(<FormField label="Testing field" name={"Field one"} value={""} placeholder="Enter value" onChange={()=>{}}/>)
    })
})