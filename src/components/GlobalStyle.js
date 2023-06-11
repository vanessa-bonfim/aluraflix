import { createGlobalStyle } from "styled-components";

// Criação do estilo global
export const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color: #2A7AE4;

    --course-color-frontend: #6BD1FF;
    --course-color-infra: #9CD33B;
    --course-color-backend: #69953B;
    --course-color-marketing: #6B5BE2;
    --course-color-mobile: #FFBA05;
    --course-color-inovation: #FF8C2A;
    --course-color-ux: #DC6EBE;
    --course-color-data-science: #9CD33B;

    --color-dark-dark: rgba(0, 0, 0, 0.9);
    --color-dark-medium: rgba(0, 0, 0, 0.6);
    --color-dark-light: rgba(0, 0, 0, 0.5);
    --color-dark-lighter: rgba(0, 0, 0, 0.25);

    --color-gray-dark: #C2C2C2;
    --color-gray-medium: #E5E5E5;
    --color-gray-light: #F5F5F5;

    --color-error-dark: #C62828;
    --color-error-medium: #E53935;
    --color-error-light: #FCE7E7;

    --big-title-size-60: 60px;
    --big-title-weight-400: 400; 

    --big-title-size: 60px;
    --medium-title-size: 46px;
    --small-title-size: 35px;

    --big-body-size: 27px;
    --medium-body-size: 18px;
    --small-body-size: 16px;
    --smaller-body-size: 12px;

    --weight-400: 400; 
    --weight-300: 300;
    --weight-600: 600;
    --weight-700: 700;
  }
  * {
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
  background-color: var(--color-dark-dark);
  margin: 0;
  padding: 0;
  text-decoration: none;
}
`;