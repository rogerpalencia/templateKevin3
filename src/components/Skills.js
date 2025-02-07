import React, { Component } from "react";

class Skills extends Component {
  render() {
    if (this.props.sharedSkills && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.skills;
      var skills = this.props.sharedSkills.icons.map(function (skills, i) {
        return (
          <li className="list-inline-item mx-3" key={i}>
            <div className="text-center skills-tile">
              {/* Se aplica el ícono con su clase */}
              <i className={skills.class} style={{ fontSize: "220%" }}></i>
              {/* Se mueve el texto fuera del <i> para que reciba estilos correctamente */}
              <p
                className="text-center"
                style={{
                  fontSize: "60%", // Ajustado para mayor visibilidad
                  marginTop: "8px",
                  fontWeight: "600", // Opción para mejor visibilidad
                  color: "#ffffff", // Ajusta según el fondo
                }}
              >
                {skills.name}
              </p>
            </div>
          </li>
        );
      });
    }

    return (
      <section id="skills">
        <div className="col-md-12">
          <div className="col-md-12">
            <h1 className="section-title">
              <span className="text-white">{sectionName}</span>
            </h1>
          </div>
          <div className="col-md-12 text-center">
            <ul className="list-inline mx-auto skill-icon">{skills}</ul>
          </div>
        </div>
      </section>
    );
  }
}

export default Skills;
