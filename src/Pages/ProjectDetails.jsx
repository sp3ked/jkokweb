
import React from "react";
import { useParams } from "react-router-dom";

function ProjectDetails() {
  const { projectId } = useParams();

  return (
    <div className="project-details">
      <h1>{projectId.charAt(0).toUpperCase() + projectId.slice(1)} Details</h1>
      {/* Add detailed information about the project here */}
    </div>
  );
}

export default ProjectDetails;