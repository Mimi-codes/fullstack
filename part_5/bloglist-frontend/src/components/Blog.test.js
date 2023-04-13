import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import userEvent from "@testing-library/user-event";
import Blog from './Blog'
import Togglable from "./Togglable";
import BlogForm from "./BlogForm";

//test to render only blog author and title
/*const blog = {
    title: 'A test',
    author: 'Mimi',
    url: 'www.mimi.com',
    likes: 20
  }
test('renders content', () => {
      const {container} = render(<Blog blog={blog} />)
const div = container.querySelector('.blog')
expect(div).toHaveTextContent(`${blog.title} ${blog.author}`)
    })
*/

  
describe("<Blog/>", () => {
  const blog = {
    title: 'A test',
    author: 'Mimi',
    url: 'www.mimi.com',
    likes: 20
  }
  let container;

  beforeEach(() => {
    container = render(<Blog blog={blog} />).container;
  });

  //display only blog author and title
  test("display only blog author and title", () => {
    const div = container.querySelector('.blog')
    expect(div).toHaveTextContent(`${blog.title} ${blog.author}`)
    
  });

  //display like and url after clicking the view button
  test("display like and url after clicking the view button ", async () => {
    const user = userEvent.setup();
    const button = screen.getByText("view");
    await user.click(button);

    const div = container.querySelector(".togglableContent");
    expect(div).toBeDefined();
  });
})

//like button is clicked twice
test("like button clicked! ", async () => {
  const blog = {
    title: 'A test',
    author: 'Mimi',
    url: 'www.mimi.com',
    likes: 20
  }

  const mockHandler = jest.fn();
  render(<Blog blog={blog} likeHandler={mockHandler} />);
  const user = userEvent.setup();
  const button = screen.getByText("view");
  await user.click(button);

  const likeButton = screen.getByText("like");
   await user.click(likeButton);
 await user.click(likeButton);
  expect(mockHandler.mock.calls).toHaveLength(2);
});
  
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