import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import BlogForm from "./BlogForm";
import userEvent from "@testing-library/user-event";


//create new blog
test('create a new blog', () => {
    const component = render(
    <BlogForm />
    )
  
    const title = component.container.querySelector('.title')
    const author = component.container.querySelector('.author')
    const url = component.container.querySelector('.url')
  
    expect(title).toBeDefined()
    expect(author).toBeDefined()
    expect(url).toBeDefined()
  })