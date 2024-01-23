import React, { ReactNode } from 'react';
import { LuGraduationCap } from 'react-icons/lu';
import { MdAttachMoney } from "react-icons/md";
import { GiMaterialsScience } from "react-icons/gi";



export type experiencesData = {
  title_PT: string;
  title_US: string;
  location: string;
  description_PT: string;
  description_US: string;
  icon: ReactNode; 
  date_PT: string;
  date_US: string;
};

export const experiencesData: experiencesData[] = [
  {
    title_PT: "Monitor de Custos I",
    title_US: "Cost Monitor",
    location: "Rio de Janeiro",
    description_PT: "Auxiliar o professor da discliplina e realizar aulas de monitoria para tirar dúvidas dos alunos.",
    description_US: "Assist the subject teacher and carry out monitoring classes to answer students’ questions.",
    icon: <LuGraduationCap/>,
    date_PT: "2021",
    date_US: "2021",
  },
  {
    title_PT: "Estágio - Finanças Corporativas",
    title_US: "Corporate Finance Intern",
    location: "Rio de Janeiro",
    description_PT: "Auxiliar na elaboração de Laudos de PPA, a Avaliação de empresas e a criação gráficos.",
    description_US: "Assist in preparing PPA Reports, Companies Valuation and charts creation.",
    icon: <MdAttachMoney />,
    date_PT: "2022",
    date_US: "2022",
  },
  {
    title_PT: "Assistente de Auditoria Junior",
    title_US: "Junior Audit Assistant",
    location: "Rio de Janeiro",
    description_PT: "Participar de reuniões com clientes, elaborar testes de auditoria e relatórios financeiros.",
    description_US: "Participate in meetings with customers, prepare audit tests and financial reports.",
    icon: <MdAttachMoney />,
    date_PT: "2023 - 2 meses",
    date_US: "2023 - 2 months",
  },
  {
    title_PT: "Funções Corporativas: Ciência de Dados",
    title_US: "Enabling Functions: Decision Science",
    location: "São Paulo",
    description_PT: "Em andamento...",
    description_US: "In progress...",
    icon: <GiMaterialsScience />,
    date_PT: "2024 - até o presente",
    date_US: "2024 - at the moment",
  },
];
