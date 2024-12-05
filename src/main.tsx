import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import TodoList from './todo/TodoList.tsx'
import { Provider } from 'react-redux'
import { store } from './todo/store.ts'
import TodoInput from './todo/TodoInput.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <TodoInput/>
      <TodoList />
      
      </Provider>
  </StrictMode>,
)
