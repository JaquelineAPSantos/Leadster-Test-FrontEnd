"use client"

import { useState } from 'react';
import webinarsData from '/home/jaquelinesantos/Leadster/Leadster-Test-FrontEnd/leadster/data/webinars.json';

interface IWebinar {
  id: number;
  title: string;
  author: string;
  category: string;
  url: string;
  description: string;
  thumbnail: string;
}

interface button {
  category: string;
  onClick: (category: string) => void;
  className: string;
}

export default function NavBar() {
  const [webinars, setWebinars] = useState<IWebinar[]>(webinarsData.webinars);

  function handleButtonClick(category: string) {
    let lowerCaseCategory: string;
    if (category === "Agências") {
      lowerCaseCategory = "agencias";
    } else if (category === "Chatbots") {
      lowerCaseCategory = "chatbot";
    } else if (category === "Marketing Digital") {
      lowerCaseCategory = "marketing-digital";
    } else if (category === "Geração de Leads") {
      lowerCaseCategory = "geracao-de-leads";
    } else if (category === "Mídia Paga") {
      lowerCaseCategory = "midia-paga";
    } else {
      lowerCaseCategory = category.toLowerCase();
    }

    const filteredWebinars = webinarsData.webinars.filter((webinar: IWebinar) => webinar.category === lowerCaseCategory);
    setWebinars(filteredWebinars);
  }

  return (
    <div className="items-center justify-center p-10 max-md: flex overflow-x-scroll space-x-1 lg:space-x-3 no-scroll-bar pr-12 md:pr-0 lg:pr-12">
      <nav>
      <button className="border border-black rounded-full border-opacity-1 outline-none px-3 py-2 text-opacity-1 font-semibold text-[#2c3e50] p-10 m-5">Agências</button>
      <button className="border border-black rounded-full border-opacity-1 outline-none px-3 py-2 text-opacity-1 font-semibold text-[#2c3e50] p-10 m-5">Chatbots</button>
      <button className="border border-black rounded-full border-opacity-1 outline-none px-3 py-2 text-opacity-1 font-semibold text-[#2c3e50] p-10 m-5">Marketing Digital</button>
      <button className="border border-black rounded-full border-opacity-1 outline-none px-3 py-2 text-opacity-1 font-semibold text-[#2c3e50] p-10 m-5">Geração de Leads</button>
      <button className="border border-black rounded-full border-opacity-1 outline-none px-3 py-2 text-opacity-1 font-semibold text-[#2c3e50] p-10 m-5 space-x-1">Mídia Paga</button> 
      </nav>
    <div/>
    <div className='shrink-0 flex items-center lg:space-x-4 text-[#2c3e50]'>
    <p className='whitespace-nowrap font-extrabold hidden lg:inline'>Ordenar por</p>
      <select className='shrink-0 text-sm lg:text-base border border-black px-2 py-2 outline-none rounded-xl pr-8'>
        <option value="Data de Publicação">Data de Publicação</option>
      </select>
    
    </div>
  </div>
  );
}
