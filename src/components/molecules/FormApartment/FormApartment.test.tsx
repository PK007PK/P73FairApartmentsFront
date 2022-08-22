import { render } from "@testing-library/react";
import React from "react";
// import "@testing-library/jest-dom/extend-expect";
import '@testing-library/jest-dom'
import { FormApartment } from "./FormApartment";

describe('Test FormApartment component', () => {
    it('Render the component', () => {
        render(<FormApartment />)
    })
})
