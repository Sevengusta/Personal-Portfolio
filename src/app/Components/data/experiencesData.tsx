import React, { ReactNode } from 'react';
import { LuGraduationCap } from 'react-icons/lu';
import { MdAttachMoney } from "react-icons/md";
import { GiMaterialsScience } from "react-icons/gi";



export type experiencesData = {
  title: string;
  location: string;
  description: string;
  icon: ReactNode; 
  date: string;
};

export const experiencesData: experiencesData[] = [
  {
    title: "Monitor de Custos I",
    location: "Rio de Janeiro",
    description: "Auxiliar o professor da discliplina e realizar aulas de monitoria para tirar dúvidas dos alunos.",
    icon: <LuGraduationCap/>,
    date: "2021",
  },
  {
    title: "Estagiário em Finanças Corporativas",
    location: "Rio de Janeiro",
    description: "Auxiliar na elaboração de Laudos de PPA, a Avaliação de empresas e a criação gráficos.",
    icon: <MdAttachMoney />,
    date: "2022",
  },
  {
    title: "Assistente de Auditoria Junior",
    location: "Rio de Janeiro",
    description: "Participar de reuniões com clientes, elaborar testes de auditoria e relatórios financeiros.",
    icon: <MdAttachMoney />,
    date: "2023 - 2 meses",
  },
  {
    title: "Funções Corporativas: Ciência de Dados",
    location: "São Paulo",
    description: "Em andamento...",
    icon: <GiMaterialsScience />,
    date: "2024 - atualmente",
  },
];
