import React, { useEffect, useState } from "react";

const mockPosts = [
  {
    id: 1,
    tipo: "entrega",
    autor: "Ana Oliveira",
    conteudo: "Finalizei a API de autenticação com JWT e Google OAuth.",
    link: "https://github.com/exemplo1"
  },
  {
    id: 2,
    tipo: "aprendizado",
    autor: "João Silva",
    conteudo: "Aprendi a usar React Router e criei minha primeira SPA!",
    link: ""
  },
  {
    id: 3,
    tipo: "mentoria",
    autor: "Camila Torres",
    conteudo: "Disponível para mentoria em liderança de produto e UX.",
    link: ""
  }
];

export default function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Simulando chamada à API
    setTimeout(() => {
      setPosts(mockPosts);
    }, 800);
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">📰 Feed Profissional</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.id} className="bg-white p-4 rounded shadow">
            <div className="flex justify-between items-center">
              <span className="text-blue-600 text-sm font-medium">{post.tipo}</span>
              <span className="text-gray-500 text-sm">por {post.autor}</span>
            </div>
            <p className="text-gray-800 mt-2">{post.conteudo}</p>
            {post.link && (
              <a
                href={post.link}
                className="text-blue-500 text-sm underline mt-2 inline-block"
                target="_blank"
              >
                Ver mais
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
