import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-6 text-center">
      <h1 className="text-8xl font-bold text-blue-600">404</h1>
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mt-4">
        Oops! Página não encontrada.
      </h2>
      <p className="text-gray-600 mt-2 max-w-md">
        A página que você está tentando acessar não existe ou foi movida. Verifique o endereço ou volte para o início.
      </p>
      <Link
        to="/"
        className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
      >
        Voltar para a Home
      </Link>
    </div>
  );
}
