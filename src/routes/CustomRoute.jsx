import { Route, Routes } from 'react-router-dom';
import { AppShell } from '@/components/layouts/AppShell.jsx';
import { NotFound } from '@/pages/404.jsx';
import { Login, Register } from '@/pages/auth/index.js';

import { Contact } from '@/pages/contact.jsx';
import { HomePage } from '@/pages/index.jsx';

const CustomRoute = () => {
  return (
    <Routes>
      <Route element={<AppShell />} path="/">
        <Route element={<HomePage />} index />
        <Route element={<Contact />} path="contact" />
        <Route element={<Login />} path="auth/login" />
        <Route element={<Register />} path="auth/register" />
      </Route>
      <Route element={<NotFound />} path="*" />
    </Routes>
  );
};

export { CustomRoute };
