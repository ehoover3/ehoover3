import ProjectCard from "../components/Projects/ProjectCard";

export default function Projects() {
  return (
    <div style={{ margin: "5%" }}>
      <h1>Projects</h1>
      <ProjectCard
        href='./loancalculator'
        symbol='%'
        title='Loan Calculator'
        description='Enter loan amount, term, and rate to calculate the monthly payment, total interest,
                & total paid'
        technicalSkills='React useState and useEffect'
      />
    </div>
  );
}
