import ProjectCard from "./ProjectCard";
import "./Projects.css";
export default function Projects() {
  return (
    <div className='Projects' id='Projects'>
      <h1>Projects</h1>
      <ProjectCard
        href='./loancalculator'
        backgroundColor='#58cc02'
        symbol='%'
        title='Loan Calculator'
        description='Enter loan amount, term, and rate to calculate the monthly payment, total interest,
                & total amount paid'
        technicalSkills='React useState and useEffect'
      />
      <ProjectCard
        href='./stocktracker'
        symbol='$'
        title='Stock Tracker'
        description='Enter the stock symbol to get update finacial information'
        technicalSkills='React useState and useEffect, Axios fetch request to an API'
        backgroundColor='#ff9600'
      />
    </div>
  );
}
