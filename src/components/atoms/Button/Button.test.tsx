import { render, screen } from "@testing-library/react";
import React from "react";
// import "@testing-library/jest-dom/extend-expect";
import '@testing-library/jest-dom'
import { Button } from "./Button";

describe('Test Button component', () => {
    it('Render the component', ()=>{
        render(<Button>Submit</Button>)
        screen.getByText('Submit')
    })
})
