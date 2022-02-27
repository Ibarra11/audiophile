import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { render } from '@testing-library/react';
export function renderWithRouter(component, route, path) {
  return render(
    <Router>
      <Routes location={route}>
        <Route path={path} element={component} />
      </Routes>
    </Router>,
  );
}
